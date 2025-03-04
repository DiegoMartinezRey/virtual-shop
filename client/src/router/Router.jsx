import { Route, Routes } from 'react-router-dom';
import { CartProvider } from '../contexts/CartContext';
import { AuthProvider } from '../contexts/UserContext';
import useAxiosInterceptor from '../hooks/useAxiosInterceptor';
import Layout from '../layout/Layout';
import AboutUs from '../pages/aboutUs/AboutUs';
import Home from '../pages/home/Home';
import Login from '../pages/login/Login';
import MyShop from '../pages/myShop/MyShop';
import Products from '../pages/products/Products';
import Profile from '../pages/profile/Profile';
import Register from '../pages/register/Register';
import ShoppingCart from '../pages/shoppingCart/ShoppingCart';
import ProtectedRoute from './ProtectedRoute';

const Router = () => {
	useAxiosInterceptor();
	return (
		<AuthProvider>
			<CartProvider>
				<Routes>
					<Route path='/' element={<Layout />}>
						<Route index element={<Home />} />
						<Route path='/sign-in' element={<Login />} />
						<Route path='/sign-up' element={<Register />} />
						<Route path='/products' element={<Products />} />
						<Route path='/about-us' element={<AboutUs />} />
						<Route
							path='/my-shop'
							element={
								<ProtectedRoute>
									<MyShop />
								</ProtectedRoute>
							}
						/>
						<Route path='/cart' element={<ShoppingCart />} />
						<Route
							path='/profile'
							element={
								<ProtectedRoute>
									<Profile />
								</ProtectedRoute>
							}
						/>
						<Route path='*' element={<h1>Not Fount</h1>} />
					</Route>
				</Routes>
			</CartProvider>
		</AuthProvider>
	);
};

export default Router;
