import axios from 'axios';
import { useState } from 'react';

import { CART_URL, ORDER_URL } from '../../mockapi-urls';

import { Cart } from "./Cart";
import { Button } from "../global/Button";
import { Preloader } from "../global/Preloader";
import { InfoBlock } from "../global/InfoBlock/InfoBlock";

import styles from "./Drawer.module.scss";

const delay = (ms) => new Promise((resolve) => setTimeout(() => resolve, ms));

export const Drawer = ({cartItems, onCloseDrawer, onCartRemove, isDrawerOpen, isDrawerUpdate, setIsDrawerUpdate, setCartItems, setOrderItems}) => {
	const [isOrderComplete, setIsOrderComplete] = useState(false);
	const [orderId, setOrderId] = useState(null);

	const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0);

	async function orderBtnHandler() {
		setIsDrawerUpdate(true);

		for (let i = 0; i < cartItems.length; i++) {
			try {
				const item = cartItems[i];
				await axios.delete(CART_URL + '/' + item.cartId);
				delay(1000);
			} catch (error) {
				alert('Ошибка при попытке удалить товар из корзины!');
			}
		}

		const { data } = await axios.post(ORDER_URL, {items: cartItems});
		setOrderItems(prev => [...prev, data]);
		setCartItems([]);

		setOrderId(data.orderId);
		setIsDrawerUpdate(false);
		setIsOrderComplete(true);
	}

	return (
		<aside className={`${styles.drawer} ${isDrawerOpen && styles.open}`}>
			<div className={styles.overlay} onClick={isOrderComplete ? () => onCloseDrawer(isOrderComplete, setIsOrderComplete) : onCloseDrawer}>
				<span className="sr-only">Затемнение</span>
			</div>
			<div className={styles.content}>
				<div className={styles.top}>
					<h2 className={styles.title}>Корзина</h2>
					<button className={styles.remove} type="button" onClick={isOrderComplete ? () => onCloseDrawer(isOrderComplete, setIsOrderComplete) : onCloseDrawer}>
						<svg>
							<use href="/img/sprite.svg#icon-add"></use>
						</svg>
						<span className="sr-only">Закрыть корзину</span>
					</button>
				</div>
				{isDrawerUpdate ? <Preloader /> : 
				cartItems.length > 0 ? 
				( 
					<>
						<ul className={styles.list}>
							{
								cartItems.map(cartItem => 
									<li className={styles.item} key={cartItem.globalId}>
										<Cart onCartRemove={() => onCartRemove(cartItem)} {...cartItem} />
									</li>
								)
							}
						</ul>

						<div className={styles.resume}>
							<ul className={styles.resumeList}>
								<li className={styles.resumeItem}>
									<span>Итого: </span>
									<div className={styles.dashes}></div>
									<strong>{totalPrice} руб.</strong>
								</li>
								<li className={styles.resumeItem}>
									<span>Налог 5%: </span>
									<div className={styles.dashes}></div>
									<strong>{Math.round(totalPrice * 0.05)} руб.</strong>
								</li>
							</ul>

							<Button title="Оформить заказ" iconPosition="right" onClick={orderBtnHandler} />
						</div>
					</>
				) : (
					<InfoBlock 
						img={isOrderComplete ? "/img/order-complete.jpg" : "/img/empty-box.png"}
						title={isOrderComplete ? "Заказ оформлен!" : "Корзина пустая"} 
						descr={isOrderComplete ? `Ваш заказ #${orderId} скоро будет передан курьерской доставке` : 
						"Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ."}
						btnTitle="Вернуться назад"
						iconPosition="left"
						callback={isOrderComplete ? () => onCloseDrawer(isOrderComplete, setIsOrderComplete) : onCloseDrawer}
						btnWidth={isOrderComplete ? 83 : 120}
						btnHeight={120}
					/>
				)
				}
			</div>
			
		</aside>
	);
};


