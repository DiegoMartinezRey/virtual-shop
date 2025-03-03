import styled from 'styled-components';

export const StyledProductCardContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
	background-color: ${props => props.theme.colors.primary};
	padding: 1rem;
	border-radius: 1rem;
	box-shadow: 0 0 10px ${props => props.theme.colors.primary};
`;

export const StyledImageProduct = styled.img`
	width: 100px;
`;
