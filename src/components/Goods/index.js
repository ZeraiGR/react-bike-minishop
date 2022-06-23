import { Card } from "./Card";
import styles from './Goods.module.scss';

export const Goods = ({items, cartItems, favoriteItems, onCartToggler, onLikeToggler, search, isItemsUpdate, updatingItem, isLoading}) => {

	const renderItems = () => {
		const filteredItems = items.filter(item => item.title.toLowerCase().includes(search.toLowerCase()));

		return (isLoading ? [...Array(12)] : filteredItems).map((cart, idx) => {
					return (
						<li key={cart?.globalId || idx}>
							<Card 
								onLikeToggler={() => onLikeToggler(cart)} 
								onCartToggler={() => onCartToggler(cart)} 
								isItemsUpdate={isItemsUpdate} 
								isItemCartUpdate={cart?.globalId === updatingItem.id && updatingItem.action === 'cart'} 
								isItemFavoriteUpdate={cart?.globalId === updatingItem.id && updatingItem.action === 'favorite'} 
								isCart={cartItems.some(el => el.globalId === cart?.globalId)} isLiked={favoriteItems.some(el => el.globalId === cart?.globalId)}
								isLoading={isLoading}
								{...cart} 
							/>
						</li>
					);
				})
	};

	return (
		<ul className={styles.list}>
			{renderItems()}
		</ul>
	);
};

