import { Logo } from "./Logo";
import { Menu } from "./Menu";
import styles from './Header.module.scss';

export const Header = ({onOpenDrawer, cartItems}) => {
	return (
		<header className={styles.header}> 
			<nav className={styles.nav}>
				<Logo />
				<Menu onOpenDrawer={onOpenDrawer} cartItems={cartItems} />
			</nav>
	</header>
	);
};