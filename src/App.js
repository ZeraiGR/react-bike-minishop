import Header from "./components/Header";
import Drawer from "./components/Drawer";
import Promo from "./components/Promo/Promo";
import Goods from "./components/Goods";
import { useState, useEffect } from "react";

function App() {
	const [items, setItems] = useState([]);
	const [cartItems, setCartItems] = useState([]);
	const [drawerState, setDrawerState] = useState(false);

	// Получаем данные с сервера
	useEffect(() => {
		fetch('https://62a70a9897b6156bff85c96f.mockapi.io/items')
		.then(response => response.json())
		.then((items) => setItems(items))
	}, []);

	const cartStatusHandler = (id) => {
		const updatedItems = items.map(item => item.id === id ? {...item, isCart: !item.isCart} : item);
		setItems(updatedItems);
		
		const isCartItems = updatedItems.filter(item => item.isCart); 
		setCartItems(isCartItems);
	};

	const likeStatusHandler = (id) => {
		const updatedItems = items.map(item => item.id === id ? {...item, isLiked: !item.isLiked} : item);
		setItems(updatedItems);
	};

	const switchDrawerHandler = () => {
		setDrawerState(prev => !prev);
	};

  return (
    <div className="wrapper">
			<Header onOpenDrawer={switchDrawerHandler} />
			<Drawer drawerState={drawerState} cartItems={cartItems} onCloseDrawer={switchDrawerHandler} onCartRemove={cartStatusHandler} />

			<Promo/>
			
			<Goods items={items} onCartStatus={cartStatusHandler} onLikeStatus={likeStatusHandler} />
    </div>
  );
}

export default App;
