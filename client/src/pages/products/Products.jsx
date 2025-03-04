import axios from 'axios';
import { useEffect, useState } from 'react';
import ProductCard from '../../components/productCard/ProductCard';
import { StyledProductsContainer } from './products.styles';

const Products = () => {
	const [allProducts, setAllProducts] = useState([]);
	const [loading, setLoading] = useState(true);

	const url = import.meta.env.VITE_API_URL;

	useEffect(() => {
		getAllProducts();
	}, []);

	const getAllProducts = async () => {
		try {
			const response = await axios.get(`${url}/product/`);
			setAllProducts(response.data);
		} catch (error) {
			console.log(error);
		} finally {
			setLoading(false);
		}
	};

	return (
		<StyledProductsContainer>
			{loading && <span>Loading...</span>}
			{!loading &&
				allProducts &&
				allProducts.map(product => (
					<ProductCard key={product._id} product={product} />
				))}
		</StyledProductsContainer>
	);
};

export default Products;
