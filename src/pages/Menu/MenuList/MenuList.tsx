import ProductCard from '../../../components/ProductCard/ProductCard';
import { MenuListProps } from './MenuList.props';

import styles from './MenuList.module.scss';


function MenuList({ products }: MenuListProps) {
	return <div className={styles.wrapper}>
		{products.map(p=> (
			<ProductCard 
				key={p.id}
				id={p.id}
				name={p.name}
				description={p.ingredients.join(', ')}
				rating={p.rating}
				image={p.image}
				price={p.price}
			/>
		))}
	</div>;
	
	
}

export default MenuList;