import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ButtonGeneral from '../../components/buttonGeneral/ButtonGeneral';
import InputText from '../../components/inputText/InputText';
import {
	StyledLoginContainer,
	StyledLoginForm,
	StyledLoginPage
} from './login.styles';

const Login = () => {
	const [emailInput, setEmailInput] = useState('');
	const [passwordInput, setPasswordInput] = useState('');

	const navigate = useNavigate();

	const url = import.meta.env.VITE_API_URL;

	const loginUser = async () => {
		try {
			const response = await axios.post(`${url}/user/login`, {
				email: emailInput,
				password: passwordInput
			});

			if (response?.data?.msg === 'Userlogged') {
				navigate('/');
			} else {
				console.log('Error to login');
			}

			setEmailInput('');
			setPasswordInput('');
		} catch (error) {
			console.log('Error: ', error);
		}
	};

	return (
		<StyledLoginPage>
			<StyledLoginContainer>
				<h1>Sign In</h1>
				<StyledLoginForm>
					<InputText
						type='email'
						label={'Email'}
						value={emailInput}
						onChange={e => setEmailInput(e.target.value)}
					/>
					<InputText
						type='password'
						label={'Password'}
						value={passwordInput}
						onChange={e => setPasswordInput(e.target.value)}
					/>
					<ButtonGeneral
						color={props => props.theme.colors.secondary}
						onClick={loginUser}
					>
						Sign In
					</ButtonGeneral>
				</StyledLoginForm>
			</StyledLoginContainer>
		</StyledLoginPage>
	);
};

export default Login;
