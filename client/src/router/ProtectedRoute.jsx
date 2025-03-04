import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/UserContext';

const ProtectedRoute = ({ children }) => {
	const { isAuthenticated } = useAuth();

	if (isAuthenticated) {
		return <Navigate to='/' />;
	}

	if (!isAuthenticated) {
		return <Navigate to='/sign-in' />;
	}

	return children;
};

export default ProtectedRoute;
