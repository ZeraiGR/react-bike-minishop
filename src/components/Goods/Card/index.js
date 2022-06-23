import { CardLoader } from '../../global/CardLoader';
import styles from './Card.module.scss';

export const Card = ({title, imageUrl, price, isLiked, isCart, onLikeToggler, onCartToggler, isItemsUpdate, isItemCartUpdate, isItemFavoriteUpdate, isLoading}) => {
	
	return (
		isLoading ? <CardLoader /> :
		<article className={`${styles.card} `}>
			<button className={`${isLiked ? styles.like + ' ' + styles.likeActive : styles.like} ${isItemFavoriteUpdate ? styles.animate : ''}`} type="button" onClick={onLikeToggler} disabled={isItemsUpdate}>
				<svg>
					<use href={`/img/sprite.svg#icon-${isLiked ? 'like' : 'love'}`}></use>
				</svg>
				<span className="sr-only">Добавить в Избранное</span>
			</button>
			<img width={'100%'} height={126} src={imageUrl} alt="sneakers" />
			<h3 className={styles.title}>
				{title}
			</h3>
			<div className={styles.bottom}>
				<div className={styles.price}>
					<span>Цена:</span>
					<strong>{price} руб.</strong>
				</div>
				<button className={`${isCart ? styles.add + ' ' + styles.addActive : styles.add} ${isItemCartUpdate ? styles.animate : ''}`} type="button" onClick={onCartToggler} disabled={isItemsUpdate}>
					<svg>
						<use href={`/img/sprite.svg#icon-${isCart ? 'check' : 'add'}`}></use>
					</svg>
					<span className="sr-only">Добавить в корзину</span>
				</button>
			</div>
		</article>
	);
};