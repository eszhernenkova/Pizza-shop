import { forwardRef } from 'react';
import styles from './Search.module.scss';
import { SearchProps } from './Search.props';

import cn from 'classnames'; //библиотека для упрощения выражений с тернарными операторами


const Search = forwardRef<HTMLInputElement, SearchProps>( function Input({ className, isValid = true,  ...props } , ref) {
	return (

		<div className={styles['input-wrapper']}>
			<input { ...props } ref={ref  } className={cn(className, styles.input, {
				[styles.invalid] : !isValid
			})}  />
			<img className={styles.icon} src="/search-icon.svg" alt="Иконка лупы" />
		</div>
		
	);
});

export default Search;