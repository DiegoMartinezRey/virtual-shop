// context/AuthContext.js
import { jwtDecode } from 'jwt-decode';
import { createContext, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);
	const navigate = useNavigate();

	useEffect(() => {
		verify();
	}, []);

	const login = userData => {
		setUser(userData);
		localStorage.setItem('user', JSON.stringify(userData));
	};

	const verify = () => {
		try {
			const storedUser = localStorage.getItem('user');
			if (storedUser) {
				const parsedUser = JSON.parse(storedUser);
				const decoded = jwtDecode(parsedUser.token);
				if (decoded.exp * 1000 < Date.now()) {
					logout();
					return;
				}
				setUser(parsedUser);
			}
		} catch (error) {
			console.error('Error en la verificación del token:', error);
		} finally {
			setLoading(false); // Termina la verificación y cambia el estado de carga
		}
	};

	const logout = () => {
		setUser(null);
		localStorage.removeItem('user');
		localStorage.removeItem('cart');
		navigate('/sign-in');
	};

	const isAuthenticated = !!user;

	return (
		<AuthContext.Provider
			value={{ user, loading, login, verify, logout, isAuthenticated }}
		>
			{children}
		</AuthContext.Provider>
	);
};

export const useAuth = () => useContext(AuthContext);
