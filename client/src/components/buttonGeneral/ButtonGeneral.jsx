import { StyledButton } from './buttonGeneral.styles';

const ButtonGeneral = ({ children, color, onClick, type }) => {
	return (
		<StyledButton
			type={type ? `${type}` : 'button'}
			$color={color}
			onClick={onClick}
		>
			{children}
		</StyledButton>
	);
};

export default ButtonGeneral;
