import styled from 'styled-components';

const StyledNavBar = styled.nav`
	height: ${props => props.theme.navBar.height};
	display: flex;
	justify-content: space-between;
	align-items: center;
	background-color: ${props => props.theme.colors.primary};
	padding-inline: 20px;
	box-shadow: 0 2px 4px ${props => props.theme.colors.secondary};
`;

export { StyledNavBar };
