import { useState } from 'react';
import { FaBars, FaShoppingCart, FaTimes, FaUser } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import {
	StyledCloseMenu,
	StyledIconOptions,
	StyledLogo,
	StyledMenu,
	StyledMenuBar,
	StyledMenuBurger,
	StyledMenuSpan,
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
			<StyledMenuSpan onClick={() => navigate('/products')}>
				Products
			</StyledMenuSpan>
			<StyledMenuSpan onClick={() => navigate('/about-us')}>
				About Us
			</StyledMenuSpan>
			<StyledMenuSpan onClick={() => navigate('/my-shop')}>
				My shop
			</StyledMenuSpan>
		</StyledMenu>
	);

	return (
		<StyledNavBar>
			<StyledLogo
				src='/assets/images/single_logo.png'
				alt='logo'
				onClick={() => navigate('/')}
			/>
			<MenuOptions />
			<StyledOptionsNavBar>
				<StyledIconOptions>
					<FaShoppingCart onClick={() => navigate('/cart')} />
				</StyledIconOptions>
				<StyledIconOptions>
					<FaUser onClick={() => navigate('/profile')} />
				</StyledIconOptions>
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
