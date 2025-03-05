import styled from 'styled-components';

export const StyledHomePage = styled.div`
	min-height: calc(100vh - ${props => props.theme.navBar.height});
	display: flex;
	flex-direction: column;
	justify-content: start;
	align-items: start;
`;

export const StyledFirstContainer = styled.section`
	height: calc(100vh - ${props => props.theme.navBar.height});
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: end;
	align-items: center;
`;

export const StyledImgContainer = styled.div`
	height: 85vh;
	width: 100%;
	box-sizing: border-box;
	background-image: url('/assets/images/home_image.png');
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center;
`;

export const StyledButtonContainer = styled.div`
	margin-bottom: 2rem;
`;

export const StyledSecondContainer = styled.section`
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 2rem;
	padding: 4rem;
`;
