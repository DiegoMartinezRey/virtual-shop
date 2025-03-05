import axios from 'axios';
import { useEffect, useState } from 'react';
import ButtonGeneral from '../../components/buttonGeneral/ButtonGeneral';
import { useAuth } from '../../contexts/UserContext';
import {
	StyledPersonalInfoContainer,
	StyledProfileContainer,
	StyledProfilePage
} from './profile.styles';

const Profile = () => {
	const [loading, setLoading] = useState(true);
	const [userData, setUserData] = useState({});
	const [userOrders, setUserOrders] = useState([]);

	const { user, logout } = useAuth();

	const url = import.meta.env.VITE_API_URL;

	useEffect(() => {
		if (user) {
			getUserById();
		}
	}, [user]);

	const getUserById = async () => {
		try {
			const response = await axios.get(`${url}/user/${user?._id}`, {
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${user.token}`
				}
			});
			if (!response.data?._id) {
				console.error("Can't get user data");
				return;
			}
			setUserData(response.data);

			const responseOrders = await axios.get(`${url}/order/${user?._id}`, {
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${user.token}`
				}
			});
			if (!responseOrders.data || !Array.isArray(responseOrders.data)) {
				console.error("Can't get orders data or data is not an array");
				return;
			}
			setUserOrders(responseOrders.data);
		} catch (error) {
			console.error('Error fetching user data:', error);
		} finally {
			setLoading(false);
		}
	};

	return (
		<StyledProfilePage>
			<h2>Personal Info</h2>
			<StyledProfileContainer>
				<StyledPersonalInfoContainer>
					{loading && <span>Loading...</span>}
					{!loading && (
						<div>
							<h3>
								{userData?.name} {userData?.lastName}
							</h3>
							<p>
								email: <span>{userData?.email}</span>
							</p>
						</div>
					)}
					<ButtonGeneral
						color={props => props.theme.colors.red}
						onClick={logout}
					>
						Sign Out
					</ButtonGeneral>
				</StyledPersonalInfoContainer>
			</StyledProfileContainer>
			<h2>History Orders</h2>
			<StyledProfileContainer>
				{!loading && userOrders.length > 0 ? (
					userOrders.map(order => (
						<div key={order._id}>
							<span>Ref: {order._id}</span>
							<ul>
								{order.items &&
									order.items.map((item, index) => (
										<li key={index}>
											<span>{item.product?.name}</span>
											<span>x{item.product?.quantity}</span>
											<span>{item.product?.price}€</span>
										</li>
									))}
							</ul>
							<span>Total: {order.totalAmount}€</span>
						</div>
					))
				) : (
					<span>No orders found</span>
				)}
			</StyledProfileContainer>
		</StyledProfilePage>
	);
};

export default Profile;
