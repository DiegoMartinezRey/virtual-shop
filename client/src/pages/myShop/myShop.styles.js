import styled from 'styled-components';

export const StyledMyShopPage = styled.div`
	min-height: calc(100vh - ${props => props.theme.navBar.height});
	display: flex;
	flex-direction: column;
	justify-content: start;
	align-items: center;
	padding: 4rem;
	gap: 2rem;
`;

export const StyledMyShopContainer = styled.form`
	display: flex;
	flex-direction: column;
	gap: 1rem;
	background-color: ${props => props.theme.colors.primary};
	border-radius: 20px;
	padding: 3rem;
	width: 100%;
	max-width: 600px;
	min-width: 300px;
`;

export const StyledInputNumberContainer = styled.div`
	display: flex;
	gap: 1rem;
`;
