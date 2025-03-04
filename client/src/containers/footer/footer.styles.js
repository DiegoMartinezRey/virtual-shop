import styled from 'styled-components';

export const StyledFooterContainer = styled.footer`
	height: ${props => props.theme.footer.height};
	width: 100%;
	background-color: ${props => props.theme.colors.primary};
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export const StyledLogoFooter = styled.img`
	width: 10rem;
`;

export const StyledLinkFooter = styled.a`
	text-decoration: underline;
	font-weight: 900;

	@media (hover: hover) {
		&:hover {
			cursor: pointer;
			color: ${props => props.theme.colors.secondary};
		}
	}
`;
