
import styles from  './Button.module.scss';
import { ButtonProps } from './Button.props';
import cn from 'classnames';

function Button({ children, appearence = 'small', className, ...props }: ButtonProps) {
	return (
		 <button
			className={cn(
				styles.button,
				{
					[styles.big]: appearence === 'big',
					[styles.small]: appearence === 'small'
				},
				className 
			)}
			{...props}
		>
			{children}
		</button>
	);
}

export default Button;