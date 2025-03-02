import { Route, Routes } from 'react-router-dom';
import { AuthProvider } from '../contexts/UserContext';
import Layout from '../layout/Layout';
import AboutUs from '../pages/aboutUs/AboutUs';
import Home from '../pages/home/Home';
import Login from '../pages/login/Login';
import MyShop from '../pages/myShop/MyShop';
import Products from '../pages/products/Products';
import Register from '../pages/register/Register';

const Router = () => {
	return (
		<AuthProvider>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route index element={<Home />} />
					<Route path='/sign-in' element={<Login />} />
					<Route path='/sign-up' element={<Register />} />
					<Route path='/products' element={<Products />} />
					<Route path='/about-us' element={<AboutUs />} />
					<Route path='/my-shop' element={<MyShop />} />
				</Route>
			</Routes>
		</AuthProvider>
	);
};

export default Router;
