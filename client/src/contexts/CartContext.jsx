import { createContext, useEffect, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
	const [cart, setCart] = useState(() => {
		const savedCart = localStorage.getItem('cart');
		return savedCart ? JSON.parse(savedCart) : [];
	});

	useEffect(() => {
		localStorage.setItem('cart', JSON.stringify(cart));
	}, [cart]);

	const addToCart = product => {
		console.log(product);
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

	const clearCart = () => {
		setCart([]);
	};

	const sendCartToBackend = async () => {
		const response = await fetch('https://api.tu-backend.com/checkout', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				userId: '123', // Si el usuario está autenticado
				items: cart,
				totalPrice: cart.reduce(
					(acc, item) => acc + item.price * item.quantity,
					0
				)
			})
		});

		if (response.ok) {
			console.log('Compra realizada con éxito');
			clearCart();
		}
	};

	return (
		<CartContext.Provider
			value={{ cart, addToCart, removeFromCart, clearCart, sendCartToBackend }}
		>
			{children}
		</CartContext.Provider>
	);
};
