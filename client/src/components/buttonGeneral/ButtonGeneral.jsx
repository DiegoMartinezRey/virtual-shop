import { StyledButton } from './buttonGeneral.styles';

const ButtonGeneral = ({ children, color, onClick }) => {
	return (
		<StyledButton type='button' $color={color} onClick={onClick}>
			{children}
		</StyledButton>
	);
};

export default ButtonGeneral;
