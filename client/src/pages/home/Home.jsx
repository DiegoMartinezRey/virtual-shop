import styled from 'styled-components';

const StyledHomePage = styled.div`
	section {
		padding: 3rem 1rem;

		&:first-of-type {
			background-color: ${props => props.theme.colors.background};
			padding: 4rem 1rem;
		}

		&:nth-of-type(2) {
			background-color: ${props => props.theme.colors.primary};
		}
	}
`;

const Title = styled.h1`
	font-size: ${props => props.theme.fontSizes.text_2xl};
	color: ${props => props.theme.colors.primary};
`;

const Subtitle = styled.h2`
	font-size: ${props => props.theme.fontSizes.text_xl};
	color: ${props => props.theme.colors.red};
	margin-bottom: 2rem;
`;

const SectionTitle = styled.h3`
	color: ${props => props.theme.colors.secondary};
	font-size: ${props => props.theme.fontSizes.text_l};
`;

const Paragraph = styled.p`
	font-size: ${props => props.theme.fontSizes.text_s};
	margin: 2rem 0;
`;

const LinkButton = styled.a`
	background-color: ${props => props.theme.colors.secondary};
	color: ${props => props.theme.colors.text};
	padding: 1rem 2rem;
	border-radius: 8px;
	font-size: ${props => props.theme.fontSizes.text_s};
	text-decoration: none;
`;

const FlexContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 2rem;
`;

const Home = () => {
	return (
		<StyledHomePage>
			<section>
				<FlexContainer>
					<Title>
						Descubre tu próximo par favorito en{' '}
						<span style={{ color: 'inherit' }}>vShop</span>
					</Title>
					<Paragraph>
						Calzado que combina estilo, comodidad y tecnología para todos tus
						momentos
					</Paragraph>
					<LinkButton href='/productos'>Ver Colección Completa</LinkButton>
				</FlexContainer>
			</section>

			<section>
				<Subtitle>🔥 Ofertas Relámpago</Subtitle>
				<FlexContainer>
					<FlexContainer>
						<SectionTitle>Hasta 50% OFF</SectionTitle>
						<Paragraph>En selección de zapatillas deportivas</Paragraph>
					</FlexContainer>
					<FlexContainer>
						<SectionTitle>Envío Gratis</SectionTitle>
						<Paragraph>En compras superiores a $150.000</Paragraph>
					</FlexContainer>
				</FlexContainer>
			</section>

			<section>
				<Subtitle>¿Por qué elegir vShop?</Subtitle>
				<FlexContainer>
					<FlexContainer>
						<div style={{ color: 'inherit', fontSize: 'inherit' }}>✔️</div>
						<SectionTitle>Garantía de Autenticidad</SectionTitle>
						<Paragraph>Todos nuestros productos son 100% originales</Paragraph>
					</FlexContainer>
					<FlexContainer></FlexContainer>
				</FlexContainer>
			</section>
		</StyledHomePage>
	);
};

export default Home;
