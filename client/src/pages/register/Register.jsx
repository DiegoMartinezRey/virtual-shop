import ButtonGeneral from '../../components/buttonGeneral/ButtonGeneral';
import InputText from '../../components/inputText/InputText';
import {
	StyledRegisterContainer,
	StyledRegisterForm,
	StyledRegisterPage
} from './register.styles';

const Register = () => {
	return (
		<StyledRegisterPage>
			<StyledRegisterContainer>
				<h1>Sign Up</h1>
				<StyledRegisterForm>
					<InputText type='text' placeholder='Name' label={'Name'} />
					<InputText type='text' placeholder='Last Name' label={'Last Name'} />
					<InputText type='email' placeholder='Email' label={'Email'} />
					<InputText
						type='password'
						placeholder='Password'
						label={'Password'}
					/>
					<ButtonGeneral color={props => props.theme.colors.secondary}>
						Sign In
					</ButtonGeneral>
				</StyledRegisterForm>
			</StyledRegisterContainer>
		</StyledRegisterPage>
	);
};

export default Register;
