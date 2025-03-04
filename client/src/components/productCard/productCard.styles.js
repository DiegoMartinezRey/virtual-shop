import styled from 'styled-components';

export const StyledProductCardContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	gap: 1rem;
	background-color: ${props => props.theme.colors.primary};
	padding: 1rem;
	border-radius: 1rem;
	box-shadow: 0 0 10px ${props => props.theme.colors.primary};
	text-align: center;
`;

export const StyledImageProduct = styled.img`
	max-width: 100px;
`;

export const StyledInfoContainer = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-around;
	align-items: center;
`;

export const StyledAddToCart = styled.div`
	display: flex;
	align-items: center;
	gap: 1.5rem;
`;
