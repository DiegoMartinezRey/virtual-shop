import axios from 'axios';
import { useState } from 'react';
import ButtonGeneral from '../../components/buttonGeneral/ButtonGeneral';
import InputText from '../../components/inputText/InputText';
import {
	StyledRegisterContainer,
	StyledRegisterForm,
	StyledRegisterPage
} from './register.styles';

const Register = () => {
	const [nameInput, setNameInput] = useState('');
	const [lastNameInput, setLastNameInput] = useState('');
	const [emailInput, setEmailInput] = useState('');
	const [passwordInput, setPasswordInput] = useState('');

	const url = import.meta.env.VITE_API_URL;

	const registerUser = async () => {
		try {
			await axios.post(`${url}/user/create`, {
				name: nameInput,
				lastName: lastNameInput,
				email: emailInput,
				password: passwordInput
			});
			setNameInput('');
			setLastNameInput('');
			setEmailInput('');
			setPasswordInput('');
		} catch (error) {
			console.log('Error: ', error);
		}
	};

	return (
		<StyledRegisterPage>
			<StyledRegisterContainer>
				<h1>Sign Up</h1>
				<StyledRegisterForm>
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
						color={props => props.theme.colors.secondary}
						onClick={registerUser}
					>
						Sign Up
					</ButtonGeneral>
				</StyledRegisterForm>
			</StyledRegisterContainer>
		</StyledRegisterPage>
	);
};

export default Register;
