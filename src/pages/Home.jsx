import { Promo } from "../components/Promo/Promo";
import { Goods } from "../components/Goods";
import { SearchForm } from '../components/global/SearchForm';
import { Pagination } from "../components/global/Pagination";

import styles from '../components/Goods/Goods.module.scss';

export const Home = ({items, cartItems, favoriteItems, onCartToggler, onLikeToggler, search, setSearch, isItemsUpdate, updatingItem, isLoading, totalItems, currentPage, limitItems, paginationHandler}) => {

	const itemsOnPage = Math.ceil(totalItems / limitItems);
	let bullets = [];

	for (let i = 1; i <= itemsOnPage; i++) {
		let bullet = 
			<li className={currentPage === i ? 'active' : ''} key={i}>
				<button type="button" onClick={() => paginationHandler(i)}>{i}</button>
			</li>;
		bullets.push(bullet);
	}

	return (
		<>
			<Promo />
			<section className={styles.goods}>
				<div className="container">
					<div className={styles.top}>
						<h1 className="title">{search ? 'Поиск по запросу: ' + search : 'Все велосипеды'}</h1>
						<SearchForm search={search} setSearch={setSearch} />
					</div>
					<Goods items={items} cartItems={cartItems} favoriteItems={favoriteItems} onCartToggler={onCartToggler} onLikeToggler={onLikeToggler} search={search} isItemsUpdate={isItemsUpdate} updatingItem={updatingItem} isLoading={isLoading} />

				{ bullets.length > 1 && !search ? 
						<Pagination bullets={bullets} />
						: null
					}
					

				</div>
			</section>
		</>
	);
};