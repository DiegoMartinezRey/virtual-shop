import { useContext } from 'react';
import { FaTrash } from 'react-icons/fa';
import { CartContext } from '../../contexts/CartContext';
import ButtonGeneral from '../buttonGeneral/ButtonGeneral';
import {
	StyledCartProductContainer,
	StyledCartProductInfoContainer,
	StyledCartProductShopContainer,
	StyledImageProduct,
	StyledInfoProduct,
	StyledPriceContainer
} from './cartProduct.styles';

const CartProduct = ({ productCart }) => {
	const { removeFromCart } = useContext(CartContext);

	return (
		<>
			<StyledCartProductContainer>
				<StyledCartProductShopContainer>
					<StyledCartProductInfoContainer>
						<StyledImageProduct src='/assets/images/box.png' alt='product' />
						<StyledInfoProduct>
							<h2>{productCart?.name}</h2>
							<span>Category: {productCart?.category}</span>
						</StyledInfoProduct>
					</StyledCartProductInfoContainer>
					<StyledPriceContainer>
						<span>x{productCart?.quantity}</span>
						<span>{productCart?.price}€</span>
					</StyledPriceContainer>
				</StyledCartProductShopContainer>
				<ButtonGeneral
					color={props => props.theme.colors.red}
					onClick={() => removeFromCart(productCart._id)}
				>
					<FaTrash />
				</ButtonGeneral>
			</StyledCartProductContainer>
		</>
	);
};

export default CartProduct;
