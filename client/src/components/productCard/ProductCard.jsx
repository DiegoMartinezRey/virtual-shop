import { useContext } from 'react';
import { FaMinus, FaPlus } from 'react-icons/fa';
import { CartContext } from '../../contexts/CartContext';
import ButtonGeneral from '../buttonGeneral/ButtonGeneral';
import {
	StyledAddToCart,
	StyledImageProduct,
	StyledInfoContainer,
	StyledProductCardContainer
} from './productCard.styles';

const ProductCard = ({ product }) => {
	const { cart, addToCart, updateCartQuantity } = useContext(CartContext);

	const cartItem = cart.find(item => item._id === product._id);
	const quantity = cartItem ? cartItem.quantity : 0;

	const handleAddToCart = () => {
		addToCart(product);
	};

	const handleIncrease = () => {
		if (quantity < product.stock) {
			updateCartQuantity(product._id, quantity + 1);
		}
	};

	const handleDecrease = () => {
		updateCartQuantity(product._id, quantity - 1);
	};

	return (
		<StyledProductCardContainer>
			{product?.imageUrl ? (
				<StyledImageProduct src={product.imageUrl} alt='product' />
			) : (
				<StyledImageProduct src='/assets/images/box.png' alt='product' />
			)}
			<h2>{product.name}</h2>
			<p>{product.description}</p>
			<StyledInfoContainer>
				<span>{product.category}</span> | <span>{product.price} €</span> |{' '}
				<span>{product.stock} units</span>
			</StyledInfoContainer>
			{quantity === 0 ? (
				<ButtonGeneral
					color={props => props.theme.colors.secondary}
					onClick={handleAddToCart}
				>
					Add to cart
				</ButtonGeneral>
			) : (
				<StyledAddToCart>
					<ButtonGeneral
						color={props => props.theme.colors.red}
						onClick={handleDecrease}
					>
						<FaMinus />
					</ButtonGeneral>
					<span>{quantity}</span>
					<ButtonGeneral
						color={props => props.theme.colors.secondary}
						onClick={handleIncrease}
						disabled={quantity >= product.stock}
					>
						<FaPlus />
					</ButtonGeneral>
				</StyledAddToCart>
			)}
		</StyledProductCardContainer>
	);
};

export default ProductCard;
