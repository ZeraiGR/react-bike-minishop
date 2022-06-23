import { Button } from "../Button";
import styles from './InfoBlock.module.scss';

export const InfoBlock = ({img, title, descr, btnTitle, iconPosition, callback, type, btnWidth, btnHeight}) => {
	return (
		<div className={styles.info}>
			<img width={btnWidth} height={btnHeight} src={img} alt="Empty cart" />
			<h3 className={styles.title}>{title}</h3>
			<p className={styles.descr}>{descr}</p>
			<Button 
				title={btnTitle} 
				iconPosition={iconPosition} 
				onClick={callback} 
				type={type} 
			/>
		</div>
	)
}