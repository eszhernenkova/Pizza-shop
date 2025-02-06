import { useLoaderData } from 'react-router-dom';
import { type  Product } from '../../interfaces/product.unterface';


function Product() {
	const data = useLoaderData() as Product;

	return (
		<div>Product - { data.name } </div>
	);
}

export default Product;