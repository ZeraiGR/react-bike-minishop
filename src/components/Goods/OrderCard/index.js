import { CardLoader } from '../../global/CardLoader';
import styles from '../Card/Card.module.scss';

export const OrderCard = ({title, imageUrl, price, isLoading}) => {
	return (
		isLoading ? <CardLoader /> :
		<article className={`${styles.card} `}>
			<img width={'100%'} height={126} src={imageUrl} alt="sneakers" />
			<h3 className={styles.title}>
				{title}
			</h3>
			<div className={styles.bottom}>
				<div className={styles.price}>
					<span>Цена:</span>
					<strong>{price} руб.</strong>
				</div>
			</div>
		</article>
	);
};