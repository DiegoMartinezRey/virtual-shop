import {
	StyledInput,
	StyledInputContainer,
	StyledLabel
} from './inputText.styles';

const InputText = ({ type, placeholder, label }) => {
	return (
		<StyledInputContainer>
			<StyledLabel>{label}</StyledLabel>
			<StyledInput type={type} placeholder={placeholder} />
		</StyledInputContainer>
	);
};

export default InputText;
