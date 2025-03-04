import styled from 'styled-components';

export const StyledAboutPage = styled.div`
	min-height: calc(100vh - ${props => props.theme.navBar.height});
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 4rem;

	@media screen and (min-width: 768px) {
		flex-direction: row;
	}
`;

export const StyledAboutLogo = styled.img`
	max-width: 40rem;
	min-width: 20rem;
	width: 100%;

	@media (hover: hover) {
		&:hover {
			cursor: pointer;
		}
	}
`;

export const StyledAboutTextContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 2rem;
`;
