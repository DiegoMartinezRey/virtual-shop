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
	border-radius: 0.4rem;
	padding: 0.5rem;
	border: 1px solid #000;
`;

export { StyledInput, StyledInputContainer, StyledLabel };
