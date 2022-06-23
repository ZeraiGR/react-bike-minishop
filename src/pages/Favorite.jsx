import { Card } from '../components/Goods/Card';
import { Link } from 'react-router-dom';
import { InfoBlock } from '../components/global/InfoBlock/InfoBlock';

import styles from '../components/Goods/Goods.module.scss';

export const Favorite = ({favoriteItems, cartItems, onCartToggler, onLikeToggler, isItemsUpdate, updatingItem, isLoading}) => {

	const renderItems = () => {
		return (isLoading ? [...Array(12)] : favoriteItems).map((cart, idx) => 
				<li key={cart?.globalId || idx}>
					<Card 
						onLikeToggler={() => onLikeToggler(cart)} 
						onCartToggler={() => onCartToggler(cart)} 
						isItemsUpdate={isItemsUpdate}
						isItemCartUpdate={cart?.globalId === updatingItem.id && updatingItem.action === 'cart'} 
						isItemFavoriteUpdate={cart?.globalId === updatingItem.id && updatingItem.action === 'favorite'} 
						isCart={cartItems.some(el => el.globalId === cart?.globalId)} 
						isLiked={favoriteItems.some(el => el.globalId === cart?.globalId)}
						isLoading={isLoading}
						{...cart} 
					/>
				</li>
			)
	};

	return (
		<section className={`${styles.goods} ${styles.favorite}`}>
				<div className="container">
					<div className={`${styles.top} ${styles.favorite}`}>
						<Link className={styles.backLink} to="/">
							<svg className="icon">
								<use href="/img/sprite.svg#icon-angle-left"></use>
							</svg>
						</Link>
						<h1 className="title">Мои закладки</h1>
					</div>
					
					{!isLoading && favoriteItems.length === 0 ? 
						<div className={styles.emptyList}>
							<InfoBlock 
								img="/img/disappointed-smile.png"
								title="Закладок нет :("
								descr="Вы ничего не добавляли в закладки"
								btnTitle="Вернуться назад"
								iconPosition="left"
								type="link"
								btnWidth={70}
								btnHeight={70}
							/>
						</div> :
						<ul className={styles.list} >
							{renderItems()} 
						</ul>
					}
				</div>
			</section>
	);
};