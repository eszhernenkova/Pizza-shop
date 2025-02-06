
import { HeadlingProps } from './Headling.props';
import styles from './Headling.module.scss';

import cn from 'classnames'; //библиотека для упрощения выражений с тернарными операторами


function Headling ({ children, className, ...props }: HeadlingProps) {
	return (
		<h1 className={cn(className, styles.title)} {...props} >{children}</h1>
	);
};

export default Headling;