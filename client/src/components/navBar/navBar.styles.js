import styled from 'styled-components';

const StyledNavBar = styled.nav`
	height: ${props => props.theme.navBar.height};
	display: flex;
	justify-content: space-between;
	align-items: center;
	background-color: ${props => props.theme.colors.primary};
	padding-inline: 20px;
	padding-block: 15px;
	box-shadow: 0 2px 4px ${props => props.theme.colors.secondary};
	position: relative;
`;

const StyledLogo = styled.img`
	height: 100%;

	@media (hover: hover) {
		&:hover {
			cursor: pointer;
		}
	}
`;

const StyledMenu = styled.div`
	display: flex;
	flex-direction: column;
	gap: 15px;
	font-weight: 900;

	@media screen and (width>767px) {
		flex-direction: row;
	}
`;

const StyledMenuSpan = styled.span`
	@media (hover: hover) {
		&:hover {
			cursor: pointer;
			color: ${props => props.theme.colors.secondary};
		}
	}
`;

const StyledOptionsNavBar = styled.div`
	display: flex;
	gap: 10px;
	align-items: center;
`;

const StyledIconOptions = styled.div`
	@media (hover: hover) {
		&:hover {
			cursor: pointer;
			color: ${props => props.theme.colors.secondary};
		}
	}
`;

const StyledMenuBurger = styled.div`
	display: flex;
	align-items: center;

	@media (hover: hover) {
		cursor: pointer;
	}

	@media screen and (width>767px) {
		display: none;
	}
`;

const StyledMenuBar = styled.div`
	position: absolute;
	width: 100%;
	height: 100vh;
	top: ${({ $showMenuBar }) => ($showMenuBar ? '0' : '-100vh')};
	background-color: ${props => props.theme.colors.secondary};
	opacity: ${({ $showMenuBar }) => ($showMenuBar ? '1' : '0.5')};
	left: 0;
	transition: all 0.4s ease-in-out;
	z-index: 10;
`;

const StyledCloseMenu = styled.div`
	position: absolute;
	top: 25px;
	right: 25px;
`;

export {
	StyledCloseMenu,
	StyledIconOptions,
	StyledLogo,
	StyledMenu,
	StyledMenuBar,
	StyledMenuBurger,
	StyledMenuSpan,
	StyledNavBar,
	StyledOptionsNavBar
};
