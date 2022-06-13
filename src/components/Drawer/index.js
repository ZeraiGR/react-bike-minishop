import Cart from "./Cart";
import Button from "../global/Button";
import styles from "./Drawer.module.scss";

const Drawer = ({cartItems, onCloseDrawer, onCartRemove, drawerState}) => {
	return (
		<aside className={`${styles.drawer} ${drawerState && styles.open}`}>
			<div className={styles.overlay}>
				<span className="sr-only">Затемнение</span>
			</div>
			<div className={styles.content}>
				<div className={styles.top}>
					<h2 className={styles.title}>Корзина</h2>
					<button className={styles.remove} type="button" onClick={onCloseDrawer}>
						<svg>
							<use href="/img/sprite.svg#icon-add"></use>
						</svg>
						<span className="sr-only">Закрыть корзину</span>
					</button>
				</div>
				<ul className={styles.list}>
					{
						cartItems.map(cartItem => 
							<li className={styles.item} key={cartItem.id}>
								<Cart title={cartItem.title} imageUrl={cartItem.imageUrl} price={cartItem.price} onCartRemove={() => onCartRemove(cartItem.id)} />
							</li>
						)
					}
				</ul>

				<div className={styles.resume}>
					<ul className={styles.resumeList}>
						<li className={styles.resumeItem}>
							<span>Итого: </span>
							<div className={styles.dashes}></div>
							<strong>21 498 руб.</strong>
						</li>
						<li className={styles.resumeItem}>
							<span>Налог 5%: </span>
							<div className={styles.dashes}></div>
							<strong>1074 руб.</strong>
						</li>
					</ul>

					<Button />
				</div>
			</div>
		</aside>
	);
};

export default Drawer;