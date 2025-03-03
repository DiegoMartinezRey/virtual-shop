import styled from 'styled-components';

const StyledButton = styled.button`
	width: auto;
	padding: 10px;
	border-radius: 0.6rem;
	background-color: ${({ $color }) => $color};
	font-weight: bold;
	color: white;
	border: none;
	cursor: pointer;
	/* align-self: self-start; */
`;

export { StyledButton };
