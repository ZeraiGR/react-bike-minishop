import styles from "./Cart.module.scss";

export const Cart = ({onCartRemove, title, imageUrl, price}) => {
	return (
		<article className={styles.cart}>
			<img width={70} height={70} src={imageUrl} alt="Sneackers" />
			<div className={styles.info}>
				<h3 className={styles.name}>
					{title}
				</h3>
				<span className={styles.price}>
					{price}
				</span>
			</div>
			
			<button className={styles.remove} type="button" onClick={onCartRemove}>
				<svg>
					<use href="img/sprite.svg#icon-add"></use>
				</svg>
				<span className="sr-only">Удалить из корзины</span>
			</button>
		</article>
	);
};