import styles from './SearchForm.module.scss';

const SearchForm = () => {
	return (
		<form className={styles.form}>
			<svg>
				<use href="/img/sprite.svg#icon-search"></use>
			</svg>
			<input className={styles.search} placeholder="Поиск..." type="search" />
		</form>
	);
};

export default SearchForm;