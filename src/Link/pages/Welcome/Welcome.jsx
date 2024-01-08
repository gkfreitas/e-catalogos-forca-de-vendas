import { useNavigate } from 'react-router-dom';
import playCircle from '../../../assets/icons/play-circle-filled.svg';
import logo from '../../../assets/images/logo-white.png';
import welcomeImage from '../../../assets/images/welcome-link.png';
import Header from '../../../components/Header';
import { companiesMock } from '../../../mocks/mockClients';
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
  const { pathname } = window.location;
  const [linkId, clientWhatsapp] = pathname.split('/').pop().split('-');
  const links = JSON.parse(localStorage.getItem('links')) || [];
  const { nome } = companiesMock.find((company) => (company.whatsapp)
    .split('-').join('').split(' ').join('')
  === clientWhatsapp);

  const navigate = useNavigate();

  const { representativeName } = links.find((link) => link.id === Number(linkId));

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
            {nome}
          </HighlightText>
          <SecundaryText>
            Separamos um link com produtos especiais para você
            escolher e efetuar suas compras
          </SecundaryText>
        </BoxCompany>
        <BoxRepresentative>
          <HighlightText>
            {representativeName}
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
        onClick={ () => navigate(`/link/availableProducts/${linkId}`) }
        textUp="IR PARA"
        textDown="COMPRAS"
      />
    </Container>
  );
}
