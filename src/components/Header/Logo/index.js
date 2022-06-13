import styles from './Logo.module.scss';

const Logo = () => {
	return (
		<a className={styles.logo} href="#">
			<img src="/img/logo.png" alt="logo" />
			
			<div className={styles.title}>
				<strong>REACT SNEAKERS</strong>
				<span>Магазин лучших кроссовок</span>
			</div>
		</a>
	);
};

export default Logo;