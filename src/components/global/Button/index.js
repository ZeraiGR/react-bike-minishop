import { Link } from 'react-router-dom';
import styles from './Button.module.scss';

export const Button = ({title, iconPosition, onClick, type, hasIcon = true}) => {
	return (
		type === 'link' ? 
		<Link className={`${styles.button} ${styles[iconPosition]} button`} to="/">
			<span>{title}</span>
			{ hasIcon && 
				<svg>
					<use href="img/sprite.svg#icon-arrow"></use>
				</svg>
			}
		</Link> :
		<button className={`${styles.button} ${styles[iconPosition]} button`} type="button" onClick={onClick}>
			<span>{title}</span>
			{ hasIcon && 
				<svg>
					<use href="img/sprite.svg#icon-arrow"></use>
				</svg>
			}
		</button>
	);
};