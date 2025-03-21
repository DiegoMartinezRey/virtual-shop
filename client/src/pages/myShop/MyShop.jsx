import axios from 'axios';
import { useState } from 'react';
import ButtonGeneral from '../../components/buttonGeneral/ButtonGeneral';
import InputText from '../../components/inputText/InputText';
import { useAuth } from '../../contexts/UserContext';
import {
	StyledInputNumberContainer,
	StyledMyShopContainer,
	StyledMyShopPage
} from './myShop.styles';

const MyShop = () => {
	const [nameProduct, setNameProduct] = useState('');
	const [descriptionProduct, setDescriptionProduct] = useState('');
	const [priceProduct, setPriceProduct] = useState('');
	const [stockProduct, setStockProduct] = useState('');
	const [categoryProduct, setCategoryProduct] = useState('');

	const { user } = useAuth();

	const url = import.meta.env.VITE_API_URL;

	const createProduct = async () => {
		try {
			const response = await axios.post(
				`${url}/product/create`,
				{
					name: nameProduct,
					description: descriptionProduct,
					price: priceProduct,
					stock: stockProduct,
					imageUrl: '',
					category: categoryProduct
				},
				{
					headers: {
						'Content-Type': 'application/json',
						Authorization: `Bearer ${user.token}`
					}
				}
			);

			console.log(response);

			setNameProduct('');
			setDescriptionProduct('');
			setPriceProduct('');
			setStockProduct('');
			setCategoryProduct('');
		} catch (error) {
			console.log('Error: ', error);
		}
	};

	return (
		<StyledMyShopPage>
			<h2>Add Product</h2>
			<StyledMyShopContainer onSubmit={createProduct}>
				<InputText
					type='string'
					label={'Name'}
					value={nameProduct}
					onChange={e => setNameProduct(e.target.value)}
				/>
				<InputText
					type='string'
					label={'Description'}
					value={descriptionProduct}
					onChange={e => setDescriptionProduct(e.target.value)}
				/>
				<StyledInputNumberContainer>
					<InputText
						type='number'
						label={'Price'}
						value={priceProduct}
						onChange={e => setPriceProduct(e.target.value)}
					/>
					<InputText
						type='number'
						label={'Stock'}
						value={stockProduct}
						onChange={e => setStockProduct(e.target.value)}
					/>
				</StyledInputNumberContainer>
				<InputText
					type='string'
					label={'Category'}
					value={categoryProduct}
					onChange={e => setCategoryProduct(e.target.value)}
				/>
				<ButtonGeneral
					type={'submit'}
					color={props => props.theme.colors.secondary}
					// onClick={createProduct}
				>
					Publish
				</ButtonGeneral>
			</StyledMyShopContainer>
		</StyledMyShopPage>
	);
};

export default MyShop;
