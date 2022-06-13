import Logo from "./Logo";
import Menu from "./Menu";
import styles from './Header.module.scss';

const Header = ({onOpenDrawer}) => {
	return (
		<header className={styles.header}> 
			<nav className={styles.nav}>
				<Logo />
				<Menu onOpenDrawer={onOpenDrawer} />
			</nav>
	</header>
	);
};

export default Header;