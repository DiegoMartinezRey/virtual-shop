import { useNavigate } from 'react-router-dom';
import ButtonGeneral from '../../components/buttonGeneral/ButtonGeneral';
import {
	StyledButtonContainer,
	StyledFirstContainer,
	StyledHomePage,
	StyledImgContainer,
	StyledSecondContainer
} from './home.styles';

const Home = () => {
	const navigate = useNavigate();
	return (
		<StyledHomePage>
			<StyledFirstContainer>
				<StyledImgContainer />
				<StyledButtonContainer>
					<ButtonGeneral
						color={props => props.theme.colors.secondary}
						onClick={() => navigate('/products')}
					>
						See complete collection
					</ButtonGeneral>
				</StyledButtonContainer>
			</StyledFirstContainer>
			<StyledSecondContainer>
				<div>
					<h2>Bienvenido a vShop</h2>
					<p>Tu destino en línea para el calzado de calidad.</p>
				</div>
				<div>
					<h3>Destacados</h3>
					<p>
						Explora nuestra selección de productos más populares, donde la
						comodidad y el estilo se encuentran.
					</p>
				</div>
				<div>
					<h3>Beneficios</h3>
					<p>Disfruta de beneficios exclusivos al comprar con nosotros</p>
					<ul>
						<li>
							Variedad Inigualable: Encuentra diseños para todos los gustos y
							ocasiones.
						</li>
						<li>
							Calidad Garantizada: Trabajamos con marcas reconocidas para
							ofrecerte lo mejor.
						</li>
						<li>
							Envíos Rápidos: Recibe tus pedidos en tiempo récord, directamente
							en tu hogar.
						</li>
						<li>
							Atención Personalizada: Nuestro equipo está siempre dispuesto a
							ayudarte en todo momento.
						</li>
					</ul>
				</div>
				<div>
					<h3>Testimonios</h3>
					<ul>
						<li>“Excelente servicio y productos de alta calidad. </li>
						<li>¡Recomiendo totalmente vShop!” </li>
						<li>
							“La variedad de calzado es impresionante. Siempre encuentro lo que
							busco.”
						</li>
					</ul>
				</div>
				<div>
					<p>
						No esperes más para renovar tu guardarropa. Explora nuestra
						colección y encuentra el par perfecto para ti.
					</p>
				</div>
			</StyledSecondContainer>
		</StyledHomePage>
	);
};

export default Home;
