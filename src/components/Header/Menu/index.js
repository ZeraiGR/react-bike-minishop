import { Link } from 'react-router-dom';
import styles from './Menu.module.scss';

export const Menu = ({onOpenDrawer, cartItems}) => {
	const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0);

	return (
		<ul className={styles.menu}>
			<li>
				<button className={styles.cart} type="button" onClick={onOpenDrawer}>
					<svg className={styles.icon}>
						<use href="img/sprite.svg#icon-cart"></use>
					</svg>
					{totalPrice + ' руб.'}
				</button>
			</li>
			<li>
				<Link to="favorite">
					<svg className={styles.icon}>
						<use href="img/sprite.svg#icon-love"></use>
					</svg>
					<span className="sr-only">Избранное</span>
				</Link>
			</li>
			<li>
				<Link to="orders">
					<svg className={styles.icon}>
						<use href="img/sprite.svg#icon-user"></use>
					</svg>
					<span className="sr-only">Профиль</span>
				</Link>
			</li>
		</ul>
	);
};