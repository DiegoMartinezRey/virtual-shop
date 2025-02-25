import { Outlet } from 'react-router-dom';
import NavBar from '../components/navBar/NavBar';
import { StyledLayout } from './layout.styles';

const Layout = () => {
	return (
		<StyledLayout>
			<NavBar />
			<Outlet />
		</StyledLayout>
	);
};

export default Layout;
