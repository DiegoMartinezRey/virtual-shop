import styled from 'styled-components';

const StyledLoginPage = styled.section`
	height: calc(100vh - ${props => props.theme.navBar.height});
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const StyledLoginContainer = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 30px;
	background-color: ${props => props.theme.colors.primary};
	border-radius: 20px;
	padding: 3rem;
	width: 40%;
	max-width: 600px;
	min-width: 300px;
	box-shadow: 0 0 10px ${props => props.theme.colors.primary};
`;

const StyledLoginForm = styled.form`
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 20px;
`;

const StyledSpanAccount = styled.span`
	color: ${props => props.theme.colors.secondary};
	font-weight: 900;

	&:hover {
		cursor: pointer;
		text-decoration: underline;
	}
`;

export {
	StyledLoginContainer,
	StyledLoginForm,
	StyledLoginPage,
	StyledSpanAccount
};
