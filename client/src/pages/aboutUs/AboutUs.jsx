import {
	StyledAboutLogo,
	StyledAboutPage,
	StyledAboutTextContainer
} from './aboutUs.styles';

const AboutUs = () => {
	return (
		<StyledAboutPage>
			<StyledAboutLogo src='/assets/images/logo.png' alt='logo' />
			<StyledAboutTextContainer>
				<h2>Introducción</h2>
				<p>
					“En vShop, somos apasionados del calzado y nos dedicamos a ofrecer a
					nuestros clientes una experiencia de compra en línea excepcional.”{' '}
				</p>
				<h3>Misión</h3>
				<p>
					“Nuestra misión es proporcionar una amplia gama de calzado de alta
					calidad que combine estilo y comodidad, garantizando satisfacción en
					cada paso que nuestros clientes den.”{' '}
				</p>
				<h3>Visión</h3>
				<p>
					“Aspiramos a ser la tienda en línea líder en calzado, reconocida por
					su compromiso con la calidad, innovación y servicio al cliente.”
				</p>
			</StyledAboutTextContainer>
		</StyledAboutPage>
	);
};

export default AboutUs;
