import { Outlet } from 'react-router-dom';
import NavBar from '../components/navBar/NavBar';
import Footer from '../containers/footer/Footer';
import { StyledLayout } from './layout.styles';

const Layout = () => {
	return (
		<StyledLayout>
			<NavBar />
			<Outlet />
			<Footer />
		</StyledLayout>
	);
};

export default Layout;
