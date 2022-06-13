import styles from './Button.module.scss';

const Button = () => {
	return (
		<button className={`${styles.button} button`} type="button">
			<span>Оформить заказ</span>
			<svg>
				<use href="/img/sprite.svg#icon-arrow"></use>
			</svg>
		</button>
	);
};

export default Button;