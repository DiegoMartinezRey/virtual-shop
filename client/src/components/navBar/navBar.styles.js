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
	display: none;

	@media screen and (min-width: 768px) {
		display: flex;
		flex-direction: row;
		gap: 15px;
		font-weight: 900;
	}
`;

const StyledMenuMobile = styled.div`
	display: flex;
	flex-direction: column;
	gap: 15px;
	font-weight: 900;

	@media screen and (min-width: 768px) {
		display: none;
	}
`;

const StyledMenuSpan = styled.span`
	@media (hover: hover) {
		&:hover {
			cursor: pointer;
			color: ${({ $showMenuBar, theme }) =>
				$showMenuBar ? theme.colors.primary : theme.colors.secondary};
		}
	}
`;

const StyledOptionsNavBar = styled.div`
	display: flex;
	gap: 10px;
	align-items: center;
`;

const StyledIconOptions = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 0.5rem;
	background-color: ${({ $login, theme }) =>
		$login ? theme.colors.secondary : ''};
	padding: 0.3rem;
	border-radius: 0.8rem;

	@media (hover: hover) {
		&:hover {
			cursor: pointer;
			background-color: white;
			color: ${({ theme }) => theme.colors.secondary};
		}
	}
`;

const StyledMenuBurger = styled.div`
	display: flex;
	align-items: center;

	@media (hover: hover) {
		cursor: pointer;
	}

	@media screen and (min-width: 768px) {
		display: none;
	}
`;

const StyledMenuBar = styled.div`
	position: fixed;
	width: 100%;
	height: 100vh;
	top: 0;
	left: ${({ $showMenuBar }) => ($showMenuBar ? '0' : '-100%')};
	background-color: ${props => props.theme.colors.secondary};
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	transition: left 0.3s ease-in-out;
	z-index: 100;
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
	StyledMenuMobile,
	StyledMenuSpan,
	StyledNavBar,
	StyledOptionsNavBar
};
