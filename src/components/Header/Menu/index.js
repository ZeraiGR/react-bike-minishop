import styles from './Menu.module.scss';

const Menu = ({onOpenDrawer}) => {
	return (
		<ul className={styles.menu}>
			<li>
				<button className={styles.cart} type="button" onClick={onOpenDrawer}>
					<svg className={styles.icon}>
						<use href="/img/sprite.svg#icon-cart"></use>
					</svg>
					1205 руб.
				</button>
			</li>
			<li>
				<a href="#">
					<svg className={styles.icon}>
						<use href="/img/sprite.svg#icon-love"></use>
					</svg>
					<span className="sr-only">Избранное</span>
				</a>
			</li>
			<li>
				<a href="#">
					<svg className={styles.icon}>
						<use href="/img/sprite.svg#icon-user"></use>
					</svg>
					<span className="sr-only">Профиль</span>
				</a>
			</li>
		</ul>
	);
};

export default Menu;