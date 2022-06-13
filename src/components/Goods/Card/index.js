import styles from './Card.module.scss';

const Card = ({title, imageUrl, price, isLiked, isCart, onLikeStatus, onCartStatus}) => {
	return (
		<article className={`${styles.card} `}>
			<button className={`${isLiked ? styles.like + ' ' + styles.likeActive : styles.like}`} type="button"  onClick={onLikeStatus}>
				<svg>
					<use href={`/img/sprite.svg#icon-${isLiked ? 'like' : 'love'}`}></use>
				</svg>
				<span className="sr-only">Добавить в Избранное</span>
			</button>
			<img src={imageUrl} alt="sneakers" />
			<h3 className={styles.title}>
				{title}
			</h3>
			<div className={styles.bottom}>
				<div className={styles.price}>
					<span>Цена:</span>
					<strong>{price} руб.</strong>
				</div>
				<button className={`${isCart ? styles.add + ' ' + styles.addActive : styles.add}`} type="button" onClick={onCartStatus}>
					<svg>
						<use href={`/img/sprite.svg#icon-${isCart ? 'check' : 'add'}`}></use>
					</svg>
					<span className="sr-only">Добавить в корзину</span>
				</button>
			</div>
		</article>
	);
};

export default Card;