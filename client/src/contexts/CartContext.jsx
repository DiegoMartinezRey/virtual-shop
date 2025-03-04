import axios from 'axios';
import { createContext, useEffect, useState } from 'react';
import { useAuth } from './UserContext';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
	const [cart, setCart] = useState(() => {
		const savedCart = localStorage.getItem('cart');
		return savedCart ? JSON.parse(savedCart) : [];
	});

	const { user } = useAuth();

	const url = import.meta.env.VITE_API_URL;

	useEffect(() => {
		localStorage.setItem('cart', JSON.stringify(cart));
	}, [cart]);

	const addToCart = product => {
		setCart(prevCart => {
			const existingItem = prevCart.find(item => item._id === product._id);
			if (existingItem) {
				return prevCart.map(item =>
					item._id === product._id
						? { ...item, quantity: item.quantity + 1 }
						: item
				);
			}
			return [...prevCart, { ...product, quantity: 1 }];
		});
	};

	const removeFromCart = id => {
		setCart(prevCart => prevCart.filter(item => item._id !== id));
	};

	const updateCartQuantity = (id, newQuantity) => {
		if (newQuantity < 1) {
			removeFromCart(id);
		} else {
			setCart(prevCart =>
				prevCart.map(item =>
					item._id === id ? { ...item, quantity: newQuantity } : item
				)
			);
		}
	};

	const clearCart = () => {
		setCart([]);
	};

	const sendCartToBackend = async () => {
		const response = await axios.post(
			`${url}/order/create`,
			{
				user: user?._id,
				items: cart.map(item => ({
					product: item?._id,
					quantity: item?.quantity,
					price: item?.price
				})),
				totalAmount: cart.reduce(
					(acc, item) => acc + item?.quantity * item?.price,
					0
				),
				paymentStatus: 'paid',
				stripePaymentIntentId: 'stripeId'
			},
			{
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${user?.token}`
				}
			}
		);

		if (response.data.paymentStatus === 'paid') {
			console.log('Compra realizada con éxito');
			clearCart();
		}
	};

	return (
		<CartContext.Provider
			value={{
				cart,
				addToCart,
				removeFromCart,
				updateCartQuantity,
				clearCart,
				sendCartToBackend
			}}
		>
			{children}
		</CartContext.Provider>
	);
};
