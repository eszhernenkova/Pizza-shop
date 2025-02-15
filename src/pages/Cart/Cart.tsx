import { useSelector } from 'react-redux';
import Headling from '../../components/Headling/Headling';
import { RootState } from '../../store/store';
import CartItem from '../../components/CartItem/CartItem';
import { useEffect, useState } from 'react';
import { Product } from '../../interfaces/product.unterface';
import axios from 'axios';
import { PREFIX } from '../../helpers/API';
import styles from './Cart.module.scss'




function Cart() {
	const [ cartProducts, setCartProducts ] = useState<Product[]>([]);
	const items = useSelector((s: RootState)=> s.cart.items);

	const getItem = async ( id: number ) => {
		const {data} = await axios.get<Product>(`${PREFIX}/products/${id}`);
		return data;
	}

	const loadAllItems = async ()=> {
		const res = await Promise.all(items.map( i => getItem(i.id)));
		setCartProducts(res);
	}

	useEffect(()=> {
		if (items.length > 0) {
        	loadAllItems();
    	}
		//loadAllItems();
	}, [items])


	return (
		<>
			<Headling className={styles.headling} >Корзина</Headling>

			{items.map((i, index) => {
				const product = cartProducts.find(p => p.id === i.id);
				if (!product) return null; // чтобы не рендерить пустые элементы

				return <CartItem key={`${product.id}-${i.count}-${index}`} count={i.count} {...product} />;
			})}
			{/* {items.map(i => {
				const product = cartProducts.find( p => p.id === i.id);
				if(!product) return;
				return <CartItem key={product.id} count = {i.count} {...product} />
			})} */}
		</>
	);
}

export default Cart;