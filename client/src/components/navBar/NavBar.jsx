import { useState } from 'react';
import { FaBars, FaShoppingCart, FaTimes, FaUser } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import {
	StyledCloseMenu,
	StyledMenu,
	StyledMenuBar,
	StyledMenuBurger,
	StyledNavBar,
	StyledOptionsNavBar
} from './navBar.styles';

const NavBar = () => {
	const [showMenuBar, setShowMenuBar] = useState(false);

	const navigate = useNavigate();

	const handleMenuBar = () => {
		setShowMenuBar(!showMenuBar);
	};

	const MenuOptions = () => (
		<StyledMenu>
			<span onClick={() => navigate('/products')}>Products</span>
			<span onClick={() => navigate('/about-us')}>About Us</span>
			<span onClick={() => navigate('/my-shop')}>My shop</span>
		</StyledMenu>
	);

	return (
		<StyledNavBar>
			<span>Shop</span>
			<MenuOptions />
			<StyledOptionsNavBar>
				<FaShoppingCart onClick={() => navigate('/cart')} />
				<FaUser />
				<StyledMenuBurger onClick={handleMenuBar}>
					<FaBars />
				</StyledMenuBurger>
			</StyledOptionsNavBar>

			<StyledMenuBar $showMenuBar={showMenuBar}>
				<StyledCloseMenu>
					<FaTimes onClick={handleMenuBar} />
				</StyledCloseMenu>
				<MenuOptions />
			</StyledMenuBar>
		</StyledNavBar>
	);
};

export default NavBar;
