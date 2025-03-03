import styled from 'styled-components';

export const StyledCartPage = styled.div`
	min-height: calc(100vh - ${props => props.theme.navBar.height});
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 1.5rem;
	padding: 2rem;
`;

export const StyledCartContainer = styled.div`
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

export const StyledListProduct = styled.ul`
	display: flex;
	flex-direction: column;
	gap: 1rem;

	li:not(:last-child)::after {
		content: '';
		display: block;
		width: 95%;
		height: 1px;
		background-color: #ccc;
		margin: 10px auto;
	}
`;

export const StyledProduct = styled.li`
	display: flex;
	flex-direction: column;
	gap: 1rem;
`;

export const StyledTotalContainer = styled.div`
	p::before {
		content: '';
		display: block;
		width: 100%;
		height: 2px;
		background-color: ${props => props.theme.colors.secondary};
		margin: 10px 0;
	}
`;
