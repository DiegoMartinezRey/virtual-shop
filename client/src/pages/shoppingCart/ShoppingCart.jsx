import { useContext } from 'react';
import ButtonGeneral from '../../components/buttonGeneral/ButtonGeneral';
import CartProduct from '../../components/cartProduct/CartProduct';
import { CartContext } from '../../contexts/CartContext';
import {
	StyledCartContainer,
	StyledCartPage,
	StyledListProduct,
	StyledProduct,
	StyledTotalContainer
} from './shoppingCart.styles';

const ShoppingCart = () => {
	const { cart, clearCart } = useContext(CartContext);

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
						<StyledTotalContainer>
							<p>
								Total: <span>100 €</span>
							</p>
						</StyledTotalContainer>
						<div>
							<ButtonGeneral
								color={props => props.theme.colors.secondary}
								// onClick={sendCartToBackend}
							>
								Finalizar Compra
							</ButtonGeneral>
							<ButtonGeneral
								color={props => props.theme.colors.red}
								onClick={clearCart}
							>
								Vaciar Carrito
							</ButtonGeneral>
						</div>
					</>
				)}
			</StyledCartContainer>
		</StyledCartPage>
	);
};

export default ShoppingCart;
