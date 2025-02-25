import styled from 'styled-components';

const StyledRegisterPage = styled.section`
	height: calc(100vh - ${props => props.theme.navBar.height});
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const StyledRegisterContainer = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 30px;
	background-color: ${props => props.theme.colors.primary};
	border-radius: 20px;
	padding: 3rem;
	width: 80%;
	max-width: 600px;
	box-shadow: 0 0 10px ${props => props.theme.colors.primary};
`;

const StyledRegisterForm = styled.form`
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 20px;
`;

export { StyledRegisterContainer, StyledRegisterForm, StyledRegisterPage };
