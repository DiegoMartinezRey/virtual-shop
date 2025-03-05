import axios from 'axios';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const useAxiosInterceptor = () => {
	const navigate = useNavigate();

	useEffect(() => {
		const interceptor = axios.interceptors.response.use(
			response => response,
			error => {
				if (!error.response) {
					alert('Network error, please try again later.');
					return Promise.reject(error);
				}

				const status = error.response.status;

				if (status === 400) {
					alert('Incorrect email or password. Please try again.');
				} else if (status === 401) {
					alert('Your session has expired. Please log in again.');
					navigate('/sign-in');
				} else if (status === 403) {
					alert('You do not have permission to perform this action.');
				} else {
					alert('An unexpected error occurred. Please try again.');
				}

				return Promise.reject(error);
			}
		);

		// Cleanup para eliminar el interceptor cuando el componente se desmonta
		return () => axios.interceptors.response.eject(interceptor);
	}, [navigate]);
};

export default useAxiosInterceptor;
