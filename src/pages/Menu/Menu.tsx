import { ChangeEvent, useEffect, useState } from 'react';
import Headling from '../../components/Headling/Headling';
import Search from '../../components/Search/Search';
import { PREFIX } from '../../helpers/API';
import { Product } from '../../interfaces/product.unterface';

import styles from './Menu.module.scss';
import axios, { AxiosError } from 'axios';
import MenuList from './MenuList/MenuList';

function Menu() {
	const [ products, setProducts ] = useState<Product[]>([]);
	const [ isLoading, setIsLoading ] = useState<boolean>(false);
	const [ error, setError ] = useState<string | undefined>();
	const [ filter, setFilter ] = useState<string>();

	useEffect(()=>{
		getMenu(filter);
	}, [filter])
	
	const getMenu = async (name?: string) => {
		try{
			setIsLoading(true);
			const { data } = await axios.get<Product[]>(`${PREFIX}/products`, {
				params: {
					name
				}
			});
			setProducts(data);
			
		}catch(e){
			console.error(e);
			if(e instanceof AxiosError) {
				setError(e.message);
			}
			return;
		} finally {
			
			setIsLoading(false);
		}
	};
	
	const updateFilter = (e: ChangeEvent<HTMLInputElement>)=> {
		setFilter(e.target.value);
	};
	

	return (
		<>
			<div className={styles.head}>
				<Headling>Меню</Headling>
				<Search placeholder='Введите блюдо или состав' onChange={updateFilter} />
			</div>
			<div>
				{error && <>{error}</>}
				{!isLoading && products.length > 0 && <MenuList products={products} />}
				{isLoading && <>Загружаем продукты...</>}
				{!isLoading && products.length === 0 && <>Не найдено блюд по запросу</>}
				
			</div>

		</>
	);
}

export default Menu;