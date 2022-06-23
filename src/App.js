import { useState, useEffect } from "react";
import { Route, Routes } from 'react-router-dom';
import axios from "axios";

import {ITEMS_URL, CART_URL, FAVORITE_URL, ORDER_URL} from './mockapi-urls';

import { Header } from "./components/Header";
import { Drawer } from "./components/Drawer";
import { Home } from './pages/Home';
import { Favorite } from './pages/Favorite';
import { Orders } from "./pages/Orders";

export function App() {
	const [items, setItems] = useState([]);
	const [cartItems, setCartItems] = useState([]);
	const [favoriteItems, setFavoriteItems] = useState([]);
	const [orderItems, setOrderItems] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);
	const [limitItems] = useState(12);
	const [totalItems, setTotalItems] = useState(0);
	
	const [isLoading, setIsLoading] = useState(true);

	const [isDrawerOpen, setIsDrawerOpen] = useState(false);
	const [isDrawerUpdate, setIsDrawerUpdate] = useState(false);
	const [isItemsUpdate, setisItemsUpdate] = useState(false);
	const [updatingItem, setUpdatingItem] = useState({id: null, action: null});
	
	const [search, setSearch] = useState('');


	useEffect(() => {
		(async function () {
			try {
				const [cartData, favoriteData, listData, ordersData] = await Promise.all([
					axios.get(CART_URL), 
					axios.get(FAVORITE_URL), 
					axios.get(`${ITEMS_URL}?page=${currentPage}&limit=${limitItems}`),
					axios.get(ORDER_URL)
				]);
				setIsLoading(false);

				setFavoriteItems(favoriteData.data);
				setCartItems(cartData.data);
				setOrderItems(ordersData.data);
				setItems(listData.data.items);
				setTotalItems(listData.data.count);
			} catch (error) {
				alert('Ошибка при получении данных с сервера!');
				console.error(error);
			}
		})();
	}, []);

	async function paginationHandler(pageNum) {
		try {
			setCurrentPage(pageNum);
			const {data} = await axios.get(`${ITEMS_URL}?page=${pageNum}&limit=${limitItems}`);
			setItems(data.items);
		} catch (error) {
			alert('Ошибка при запросе на сервер!');
			console.error(error);
		}
	}

	async function postItem(url, item, setState) {
		try {
			const {data} = await axios.post(url, item);
			setState(prev => [...prev, data]);
			update(false);
		} catch (error) {
			alert('Ошибка при попытке добавить товар!');
			console.error(error);
		}
	}

	async function deleteItem(url, item, id, setState) {
		try {
			await axios.delete(`${url + '/' + id}`, id);
			setState(prev => prev.filter(el => el.globalId !== item.globalId));
			update(false);
		} catch (error) {
			alert('Ошибка при попытке удалить товар!');
			console.error(error);
		}
	}

	function updateItem (status, id, action) {
		if (status && id) {
			setUpdatingItem({id, action: action});
		} else {
			setUpdatingItem({id: null, action: null});
		}
	}

	function update (status, id, action) {
		if (status) {
			updateItem(true, id, action);
			setisItemsUpdate(true);
			setIsDrawerUpdate(true);
		} else {
			updateItem(false);
			setisItemsUpdate(false);
			setIsDrawerUpdate(false);
		}
	}

	const togglerHandler = (card, cardList, url, setState) => {
		let currentItem;
		let id;

		switch (cardList) {
			case cartItems:
				update(true, card.globalId, 'cart');
				id = 'cartId';
				break;
			case favoriteItems:
				update(true, card.globalId, 'favorite');
				id = 'favoriteId';
			default:
		}

		if (currentItem = cardList.find(el => el.globalId === card.globalId)) {
			deleteItem(url, currentItem, currentItem[id], setState);
		} else {
			postItem(url, card, setState);
		}
	};

	const cartTogglerHandler = (card) => {
		togglerHandler(card, cartItems, CART_URL, setCartItems);
	};

	const likeTogglerHandler = (card) => {
		togglerHandler(card, favoriteItems, FAVORITE_URL, setFavoriteItems);
	};

	const switchDrawerHandler = (isOrderComplete = false, setIsOrderComplete = null) => {
		setIsDrawerOpen(prev => !prev);

		if (isOrderComplete && setIsOrderComplete) {
			setIsOrderComplete(false);
		}
	};

  return (
    <div className="wrapper">
			<Header 
				onOpenDrawer={switchDrawerHandler} 
				cartItems={cartItems} 
			/>
			<Drawer 
				isDrawerOpen={isDrawerOpen} 
				isDrawerUpdate={isDrawerUpdate}
				setIsDrawerUpdate={setIsDrawerUpdate} 
				cartItems={cartItems} 
				onCloseDrawer={switchDrawerHandler} 
				onCartRemove={cartTogglerHandler} 
				setCartItems={setCartItems} 
				setOrderItems={setOrderItems} 
			/>

			<Routes>
				<Route index element={
					<Home 
						items={items}
						cartItems={cartItems} 
						favoriteItems={favoriteItems} 
						isItemsUpdate={isItemsUpdate} 
						updatingItem={updatingItem} 
						isLoading={isLoading}
						totalItems={totalItems} 
						currentPage={currentPage}
						limitItems={limitItems}
						setCurrentPage={setCurrentPage}
						search={search} 
						setSearch={setSearch} 
						onCartToggler={cartTogglerHandler} 
						onLikeToggler={likeTogglerHandler}
						paginationHandler={paginationHandler}
					/>
				} 
				/>

				<Route path="/favorite" element={
					<Favorite 
						favoriteItems={favoriteItems} 
						cartItems={cartItems} 
						onCartToggler={cartTogglerHandler} 
						onLikeToggler={likeTogglerHandler} 
						isItemsUpdate={isItemsUpdate} 
						updatingItem={updatingItem} 
						isLoading={isLoading} 
					/>
				} 
				/>

				<Route path="/orders" element={
					<Orders 
						orderItems={orderItems} 
						isLoading={isLoading} />
					}/>
			</Routes>
    </div>
  );
}

