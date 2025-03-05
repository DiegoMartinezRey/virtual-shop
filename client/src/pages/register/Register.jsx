import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ButtonGeneral from '../../components/buttonGeneral/ButtonGeneral';
import InputText from '../../components/inputText/InputText';
import { useAuth } from '../../contexts/UserContext';
import {
	StyledRegisterContainer,
	StyledRegisterForm,
	StyledRegisterPage,
	StyledSpanAccount
} from './register.styles';

const Register = () => {
	const [nameInput, setNameInput] = useState('');
	const [lastNameInput, setLastNameInput] = useState('');
	const [emailInput, setEmailInput] = useState('');
	const [passwordInput, setPasswordInput] = useState('');
	const [loading, setLoading] = useState(false);

	const { user } = useAuth();

	const navigate = useNavigate();

	const url = import.meta.env.VITE_API_URL;

	if (user) {
		navigate('/');
		return null;
	}

	const registerUser = async e => {
		e.preventDefault();

		try {
			await axios.post(`${url}/user/create`, {
				name: nameInput,
				lastName: lastNameInput,
				email: emailInput,
				password: passwordInput
			});

			navigate('/sign-in');

			setNameInput('');
			setLastNameInput('');
			setEmailInput('');
			setPasswordInput('');
		} catch (error) {
			console.log('Error: ', error);
		} finally {
			setLoading(true);
		}
	};

	return (
		<StyledRegisterPage>
			<StyledRegisterContainer>
				<h1>Sign Up</h1>
				<StyledRegisterForm onSubmit={registerUser}>
					<InputText
						type='text'
						label={'Name'}
						value={nameInput}
						onChange={e => {
							setNameInput(e.target.value);
						}}
					/>
					<InputText
						type='text'
						label={'Last Name'}
						value={lastNameInput}
						onChange={e => {
							setLastNameInput(e.target.value);
						}}
					/>
					<InputText
						type='email'
						label={'Email'}
						value={emailInput}
						onChange={e => {
							setEmailInput(e.target.value);
						}}
					/>
					<InputText
						type='password'
						label={'Password'}
						value={passwordInput}
						onChange={e => {
							setPasswordInput(e.target.value);
						}}
					/>
					<ButtonGeneral
						type={'submit'}
						color={props => props.theme.colors.secondary}
					>
						{loading ? 'Loading...' : 'Sign Up'}
					</ButtonGeneral>
				</StyledRegisterForm>
				<p>
					Do you have an account?{' '}
					<StyledSpanAccount onClick={() => navigate('/sign-in')}>
						Sign In
					</StyledSpanAccount>
				</p>
			</StyledRegisterContainer>
		</StyledRegisterPage>
	);
};

export default Register;
