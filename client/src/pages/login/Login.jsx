import ButtonGeneral from '../../components/buttonGeneral/ButtonGeneral';
import InputText from '../../components/inputText/InputText';
import {
	StyledLoginContainer,
	StyledLoginForm,
	StyledLoginPage
} from './login.styles';

const Login = () => {
	return (
		<StyledLoginPage>
			<StyledLoginContainer>
				<h1>Sign In</h1>
				<StyledLoginForm>
					<InputText type='email' label={'Email'} />
					<InputText type='password' label={'Password'} />
					<ButtonGeneral color={props => props.theme.colors.secondary}>
						Sign In
					</ButtonGeneral>
				</StyledLoginForm>
			</StyledLoginContainer>
		</StyledLoginPage>
	);
};

export default Login;
