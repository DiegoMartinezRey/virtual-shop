import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/UserContext';

const ProtectedRoute = ({ children }) => {
	const { isAuthenticated } = useAuth();

	if (isAuthenticated) {
		return <Navigate to='/' />;
	}

	return children;
};

export default ProtectedRoute;
