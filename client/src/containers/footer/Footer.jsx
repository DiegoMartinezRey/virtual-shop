import {
	StyledFooterContainer,
	StyledLinkFooter,
	StyledLogoFooter
} from './footer.styles';

const Footer = () => {
	return (
		<StyledFooterContainer>
			<StyledLogoFooter src='/assets/images/logo.png' />
			<p>
				See on{' '}
				<StyledLinkFooter
					href='https://github.com/DiegoMartinezRey/virtual-shop'
					target='_blank'
					rel='noopener noreferrer'
				>
					GitHub
				</StyledLinkFooter>
			</p>
		</StyledFooterContainer>
	);
};

export default Footer;
