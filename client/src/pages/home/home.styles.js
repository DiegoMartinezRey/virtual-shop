import styled from 'styled-components';

export const StyledHomePage = styled.div`
	min-height: calc(100vh - ${props => props.theme.navBar.height});
	display: flex;
	justify-content: center;
	align-items: self-start;
	padding: 4rem;
`;
