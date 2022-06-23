import { Link } from 'react-router-dom'; 
import styles from './Logo.module.scss';

export const Logo = () => {
	return (
		<Link className={styles.logo} to="/">
			<img width={40} height={40} src="img/logo.jpg" alt="logo" />
			
			<div className={styles.title}>
				<strong>REACT BIKE</strong>
				<span>Магазин велосипедов</span>
			</div>
		</Link>
	);
};