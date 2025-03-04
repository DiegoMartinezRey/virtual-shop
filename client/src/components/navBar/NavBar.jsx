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
	StyledMenuMobile,
	StyledMenuSpan,
	StyledNavBar,
	StyledOptionsNavBar
} from './navBar.styles';

const NavBar = () => {
	const [showMenuBar, setShowMenuBar] = useState(false);
	const navigate = useNavigate();

	const handleMenuBar = () => setShowMenuBar(!showMenuBar);

	const menuItems = [
		{ label: 'Products', path: '/products' },
		{ label: 'About Us', path: '/about-us' },
		{ label: 'My shop', path: '/my-shop' }
	];

	const MenuOptions = ({ isMobile }) => {
		const StyledMenuWrapper = isMobile ? StyledMenuMobile : StyledMenu;
		return (
			<StyledMenuWrapper>
				{menuItems.map(item => (
					<StyledMenuSpan key={item.path} onClick={() => navigate(item.path)}>
						{item.label}
					</StyledMenuSpan>
				))}
			</StyledMenuWrapper>
		);
	};

	return (
		<StyledNavBar>
			<StyledLogo
				src='/assets/images/single_logo.png'
				alt='logo'
				onClick={() => navigate('/')}
			/>
			<MenuOptions isMobile={false} /> {/* Desktop Menu */}
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
			{/* Menú desplegable en móviles */}
			<StyledMenuBar $showMenuBar={showMenuBar}>
				<StyledCloseMenu>
					<FaTimes onClick={handleMenuBar} />
				</StyledCloseMenu>
				<MenuOptions isMobile={true} /> {/* Mobile Menu */}
			</StyledMenuBar>
		</StyledNavBar>
	);
};

export default NavBar;
