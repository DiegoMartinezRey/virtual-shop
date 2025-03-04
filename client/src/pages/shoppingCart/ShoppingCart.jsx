import { useContext } from 'react';
import ButtonGeneral from '../../components/buttonGeneral/ButtonGeneral';
import CartProduct from '../../components/cartProduct/CartProduct';
import { CartContext } from '../../contexts/CartContext';
import {
	StyledButtonContainer,
	StyledCartContainer,
	StyledCartPage,
	StyledLine,
	StyledListProduct,
	StyledProduct,
	StyledTotalContainer,
	StyledTotalText
} from './shoppingCart.styles';

const ShoppingCart = () => {
	const { cart, clearCart, sendCartToBackend } = useContext(CartContext);

	const totalPrice = cart.reduce(
		(acc, item) => acc + item.price * item.quantity,
		0
	);

	return (
		<StyledCartPage>
			<h2>Carrito de Compras</h2>
			<StyledCartContainer>
				{cart && cart.length === 0 && <p>Shopping cart is empty</p>}
				{cart && cart.length > 0 && (
					<>
						<StyledListProduct>
							{cart.map(item => (
								<StyledProduct key={item._id}>
									<CartProduct productCart={item} />
								</StyledProduct>
							))}
						</StyledListProduct>
						<StyledLine />
						<StyledTotalContainer>
							<StyledTotalText>
								Total: <span>{totalPrice} €</span>
							</StyledTotalText>
						</StyledTotalContainer>
						<StyledButtonContainer>
							<ButtonGeneral
								color={props => props.theme.colors.secondary}
								onClick={sendCartToBackend}
							>
								Finalizar Compra
							</ButtonGeneral>
							<ButtonGeneral
								color={props => props.theme.colors.red}
								onClick={clearCart}
							>
								Vaciar Carrito
							</ButtonGeneral>
						</StyledButtonContainer>
					</>
				)}
			</StyledCartContainer>
		</StyledCartPage>
	);
};

export default ShoppingCart;
