import styled from 'styled-components';

export const StyledProductsContainer = styled.div`
	min-height: calc(100vh - ${props => props.theme.navBar.height});
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
	gap: 1rem;
	padding: 1rem 2rem;
`;
