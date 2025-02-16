import { useLoaderData, useNavigate } from 'react-router-dom';

import { type  Product } from '../../interfaces/product.unterface';
import Headling from '../../components/Headling/Headling';
import Button from '../../components/Button/Button';

import styles from './Product.module.scss';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store/store';
import { cartActions } from '../../store/cart.slice';



function Product() {
	const data = useLoaderData() as Product;
	const dispatch = useDispatch<AppDispatch>();
	const navigate = useNavigate();
	const add = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		dispatch(cartActions.add(data.id));
	}


	return (
		<div className={styles.wrapper}>
			<div className={styles.head}>
				<button onClick={()=> navigate('/')} className={styles.toggle}><img src="/slide-icon.svg" alt="" /></button>
				<Headling  className={styles.title}>{data.name}</Headling>
				<Button onClick={add} className={styles['add-to-cart']} appearence='small'>
					<img src="/cart-button-icon.svg" alt="Иконка корзины" />
					В корзину
				</Button>
			</div>
			<div className={styles.content}>
				<div className={styles.image}><img src={data.image} alt="" /></div>
				<div className={styles.description}>
					<div className={styles.price}>
						<div>Цена</div>&nbsp;
						<div>{data.price}&nbsp;₽</div>	
					</div>
					<hr className={styles.hr}/>
					<div className={styles.rating}>
						<div>Рейтинг</div>&nbsp;
						<div>
							<span>
								{data.rating}&nbsp;<img src="/star-icon.svg" alt="Иконка звезды" />
							</span>
						</div>	
					</div>
					<div className={styles.ingridients}>
						Состав:
						<ul>
							{data.ingredients.map((ingredient, index )=> 
							<li key={index} >{ingredient}</li>)
							}
						</ul>
					</div>
				</div>
			</div>

			
		</div>
	);
}

export default Product;