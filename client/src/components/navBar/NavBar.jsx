import { StyledNavBar } from './navBar.styles';

const NavBar = () => {
	return (
		<StyledNavBar>
			<span>Shop</span>
			<div>
				<span>Cart</span>
				<span>Profile</span>
			</div>
		</StyledNavBar>
	);
};

export default NavBar;
