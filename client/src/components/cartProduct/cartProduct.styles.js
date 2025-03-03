import styled from 'styled-components';

export const StyledCartProductContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 1rem;
`;

export const StyledCartProductShopContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;
	width: 100%;

	@media screen and (width>767px) {
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
	}
`;

export const StyledCartProductInfoContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.5rem;

	@media screen and (width>767px) {
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}
`;

export const StyledImageProduct = styled.img`
	max-width: 100px;
`;

export const StyledInfoProduct = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
`;

export const StyledPriceContainer = styled.div`
	display: flex;
	gap: 0.5rem;
	align-items: center;

	@media screen and (width>767px) {
	}
`;

export const StyledDeleteButton = styled.button`
	border: none;
	color: white;
	cursor: pointer;
	background-color: rgb(247, 27, 27);
	padding: 0.3rem;
	border-radius: 0.3rem;
`;
