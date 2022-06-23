import { Link } from 'react-router-dom';
import { OrderCard } from '../components/Goods/OrderCard';
import { InfoBlock } from '../components/global/InfoBlock/InfoBlock';

import styles from '../components/Goods/Goods.module.scss';

export const Orders = ({orderItems, isLoading}) => {

	const renderItems = () => {
		return (isLoading ? [...Array(12)] : orderItems.map(obj => obj.items).flat()).map((cart, idx) => {
			return (
				<li key={cart?.orderId || idx}>
					<OrderCard 
						isLoading={isLoading}
						{...cart} 
					/>
				</li>
			);
		})
	};

	return (
		<section className={`${styles.goods} ${styles.favorite}`}>
				<div className="container">
					<div className={`${styles.top} ${styles.favorite}`}>
						<Link className={styles.backLink} to="/">
							<svg className="icon">
								<use href="img/sprite.svg#icon-angle-left"></use>
							</svg>
						</Link>
						<h1 className="title">Мои покупки</h1>
					</div>
					{!isLoading && orderItems.length === 0 ?
						<div className={styles.emptyList}>
							<InfoBlock 
								img="img/sad-smile.png"
								title="У вас нет заказов"
								descr="Оформите хотя бы один заказ."
								btnTitle="Вернуться назад"
								iconPosition="left"
								type="link"
								btnWidth={70}
								btnHeight={70}
							/>
						</div> :
						<ul className={styles.list}>
							{renderItems()}
						</ul>
					}
					
				</div>
			</section>
	);
};