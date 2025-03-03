import { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';
import ButtonGeneral from '../buttonGeneral/ButtonGeneral';
import {
	StyledImageProduct,
	StyledProductCardContainer
} from './productCard.styles';

const ProductCard = ({ product }) => {
	const { addToCart } = useContext(CartContext);

	return (
		<StyledProductCardContainer>
			<StyledImageProduct src='/assets/images/box.png' alt='product' />
			<h2>{product?.name}</h2>
			<span>{product?.category}</span>
			<span>{product?.price} €</span>
			<ButtonGeneral
				color={props => props.theme.colors.secondary}
				onClick={() => addToCart(product)}
			>
				Add to cart
			</ButtonGeneral>
		</StyledProductCardContainer>
	);
};

export default ProductCard;
