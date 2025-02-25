import { StyledButton } from './buttonGeneral.styles';

const ButtonGeneral = ({ children, color }) => {
	return <StyledButton $color={color}>{children}</StyledButton>;
};

export default ButtonGeneral;
