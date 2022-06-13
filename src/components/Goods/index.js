import SearchForm from "./SearchForm";
import Card from "./Card";
import styles from './Goods.module.scss';

const Goods = ({items, onCartStatus, onLikeStatus}) => {
	
	const addToCartBtnHandler = (id) => {
		onCartStatus(id);
	};

	const likeCartBtnHandler = (id) => {
		onLikeStatus(id);
	};

	return (
		<section className={styles.goods}>
				<div className="container">
					<div className={styles.top}>
						<h1 className="title">Все кроссовки</h1>
						<SearchForm />
					</div>
					
					<ul className={styles.list}>
						{
							items.map((cart, idx) => {
								return (
									<li key={idx}>
										<Card title={cart.title} imageUrl={cart.imageUrl} price={cart.price} isLiked={cart.isLiked} isCart={cart.isCart} onLikeStatus={() => likeCartBtnHandler(cart.id)} onCartStatus={() => addToCartBtnHandler(cart.id)} />
									</li>
								);
							})
						}
					</ul>

				</div>
			</section>
	);
};

export default Goods;