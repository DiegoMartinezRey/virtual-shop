import {
	StyledInput,
	StyledInputContainer,
	StyledLabel
} from './inputText.styles';

const InputText = ({ type, placeholder, label, value, onChange }) => {
	return (
		<StyledInputContainer>
			<StyledLabel>{label}</StyledLabel>
			<StyledInput
				type={type}
				placeholder={placeholder}
				value={value}
				onChange={onChange}
				required
			/>
		</StyledInputContainer>
	);
};

export default InputText;
