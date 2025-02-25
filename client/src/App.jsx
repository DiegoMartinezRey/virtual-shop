import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Router from './router/Router';
import { GlobalStyles } from './styles/GlobalStyles';
import { theme } from './styles/theme';

const App = () => {
	return (
		<ThemeProvider theme={theme}>
			<BrowserRouter>
				<GlobalStyles />
				<Router />
			</BrowserRouter>
		</ThemeProvider>
	);
};

export default App;
