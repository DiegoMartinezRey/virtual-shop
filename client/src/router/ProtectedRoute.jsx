import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/UserContext';

const ProtectedRoute = ({ children }) => {
	const { isAuthenticated, loading } = useAuth();

	if (loading) {
		return null;
	}

	if (!isAuthenticated) {
		return <Navigate to='/sign-in' />;
	}

	return children;
};

export default ProtectedRoute;
