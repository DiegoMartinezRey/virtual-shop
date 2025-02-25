import styled from 'styled-components';

const StyledButton = styled.button`
	width: auto;
	padding: 10px;
	border-radius: 0.6rem;
	background-color: ${({ $color }) => $color};
`;

export { StyledButton };
