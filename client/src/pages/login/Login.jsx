import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ButtonGeneral from '../../components/buttonGeneral/ButtonGeneral';
import InputText from '../../components/inputText/InputText';
import { useAuth } from '../../contexts/UserContext';
import {
	StyledLoginContainer,
	StyledLoginForm,
	StyledLoginPage,
	StyledSpanAccount
} from './login.styles';

const Login = () => {
	const [emailInput, setEmailInput] = useState('');
	const [passwordInput, setPasswordInput] = useState('');
	const [loading, setLoading] = useState(false);

	const { user, login } = useAuth();

	const navigate = useNavigate();

	const url = import.meta.env.VITE_API_URL;

	useEffect(() => {
		if (user) {
			navigate('/');
		}
	}, [user, navigate]);

	const loginUser = async e => {
		e.preventDefault();

		try {
			const response = await axios.post(`${url}/user/login`, {
				email: emailInput,
				password: passwordInput
			});

			if (response.data._id) {
				login(response.data);
				navigate('/');
			} else {
				alert('Email or password incorrect');
			}

			setEmailInput('');
			setPasswordInput('');
		} catch (error) {
			console.log('Error: ', error);
		} finally {
			setLoading(true);
		}
	};

	return (
		<StyledLoginPage>
			<StyledLoginContainer>
				<h1>Sign In</h1>
				<StyledLoginForm onSubmit={loginUser}>
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
						type={'submit'}
						color={props => props.theme.colors.secondary}
					>
						{loading ? 'Loading...' : 'Sign In'}
					</ButtonGeneral>
				</StyledLoginForm>
				<p>
					Don’t have an account?{' '}
					<StyledSpanAccount onClick={() => navigate('/sign-up')}>
						Register
					</StyledSpanAccount>
				</p>
			</StyledLoginContainer>
		</StyledLoginPage>
	);
};

export default Login;
