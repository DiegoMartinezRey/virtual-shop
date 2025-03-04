import styled from 'styled-components';

export const StyledProfilePage = styled.div`
	min-height: calc(100vh - ${props => props.theme.navBar.height});
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 1.5rem;
	padding: 2rem;
`;

export const StyledProfileContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;
	background-color: ${props => props.theme.colors.primary};
	border-radius: 20px;
	padding: 2rem;
	width: 100%;
	max-width: 600px;
	min-width: 300px;
`;

export const StyledPersonalInfoContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;
