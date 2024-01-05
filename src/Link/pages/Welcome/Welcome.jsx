import playCircle from '../../../assets/icons/play-circle-filled.svg';
import logo from '../../../assets/images/logo-white.png';
import welcomeImage from '../../../assets/images/welcome-link.png';
import Header from '../../../components/Header';
import Footer from '../../components/Footer/Footer';
import {
  BoxCompany,
  BoxRepresentative,
  ButtonVideo,
  Container,
  ContainerMain,
  HighlightText,
  LogoHeader,
  PrimaryText,
  SecundaryText,
  VideoIcon,
  WelcomeImage,
} from './styles';

export default function Welcome() {
  const clientMock = {
    name: 'Michele Silva',
    company: '101 Bazar Do Jeans',
  };

  const { name, company } = clientMock;

  return (
    <Container>
      <Header logo title="BEM-VINDO">
        <LogoHeader src={ logo } />
      </Header>
      <ContainerMain>
        <WelcomeImage
          src={ welcomeImage }
        />
        <BoxCompany>
          <HighlightText>
            {company}
          </HighlightText>
          <SecundaryText>
            Separamos um link com produtos especiais para você
            escolher e efetuar suas compras
          </SecundaryText>
        </BoxCompany>
        <BoxRepresentative>
          <HighlightText>
            {name}
          </HighlightText>
          <PrimaryText>
            Sua representante
          </PrimaryText>
        </BoxRepresentative>
        <ButtonVideo>
          <VideoIcon
            src={ playCircle }
          />
          <HighlightText>
            Vídeo APP
          </HighlightText>
        </ButtonVideo>
      </ContainerMain>
      <Footer
        textUp="IR PARA"
        textDown="COMPRAS"
      />
    </Container>
  );
}
