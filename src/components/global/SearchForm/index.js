import styles from './SearchForm.module.scss';

export const SearchForm = ({search, setSearch}) => {
	return (
		<form className={styles.form}>
			<svg>
				<use href="/img/sprite.svg#icon-search"></use>
			</svg>
			<input value={search} onChange={(e) => setSearch(e.target.value)} className={styles.search} placeholder="Поиск..." type="search" />
			{search && 
				<button className={styles.btn} type="button" 
				onClick={() => setSearch('')}>
					<svg>
					<use href="/img/sprite.svg#icon-add"></use>
				</svg>
				</button>
			}
			
		</form>
	);
};