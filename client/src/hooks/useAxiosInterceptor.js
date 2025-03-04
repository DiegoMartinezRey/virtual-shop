import axios from 'axios';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const useAxiosInterceptor = () => {
	const navigate = useNavigate();

	useEffect(() => {
		const interceptor = axios.interceptors.response.use(
			response => response,
			error => {
				if (
					error.response &&
					(error.response.status === 401 || error.response.status === 400)
				) {
					alert('Token inválido o sesión expirada. Redirigiendo a login...');
					navigate('/sign-in');
				}
				return Promise.reject(error);
			}
		);

		return () => {
			axios.interceptors.response.eject(interceptor);
		};
	}, [navigate]);
};

export default useAxiosInterceptor;
