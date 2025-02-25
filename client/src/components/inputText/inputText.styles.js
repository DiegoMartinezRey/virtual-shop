import styled from 'styled-components';

const StyledInputContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 10px;
`;

const StyledLabel = styled.label`
	font-weight: bold;
`;

const StyledInput = styled.input`
	width: 100%;
	border-radius: 0.6rem;
	padding: 0.6rem;
`;

export { StyledInput, StyledInputContainer, StyledLabel };
