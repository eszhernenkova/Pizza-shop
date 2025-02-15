
import styles from './CartItem.module.scss';
import { CartItemProps } from './CartItem.props';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store/store';
import { cartActions } from '../../store/cart.slice';

function CartItem(props: CartItemProps) {
	const dispatch = useDispatch<AppDispatch>()

	const increase = () => {
		dispatch(cartActions.add(props.id));
	}

    const descrease = () => {
		dispatch(cartActions.remove(props.id));

	}

    const remove = () => {
		dispatch(cartActions.delete(props.id));
	}
	
	return (
        <div className={styles.item}>

            <div className={styles.image} style={{ backgroundImage: `url('${props.image}')`}}></div>
            <div className={styles.descriptoin}>
                <div className={styles.name}>{props.name}</div>
                <div className={styles.price}><span>{props.price}&nbsp;₽</span></div>
            </div>
            <div className={styles.actions}>
                <button className={styles.minus} onClick={descrease}>
                    <img src="./minus-icon.svg" alt="Удалить" />
                </button>
                <div className={styles.number}>{props.count}</div>
                <button className={styles.plus} onClick={increase}>
                    <img src="./plus-icon.svg" alt="Добавить" />
                </button>
                <button className={styles.remove} onClick={remove}>
                    <img src="./delete-icon.svg" alt="Удалить все" />
                </button>
            </div>
        </div>
		
	);
}

export default CartItem;