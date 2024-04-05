import LogoImage from '../../../assets/images/logo.png';
import { ButtonYT } from '../../../components/Buttons';
import FormLogin from '../../../components/FormLogin';
import { LoginContainer, LoginLogo, LoginYTContainer } from './styles';

export default function LoginPage() {
  return (
    <LoginContainer>
      <LoginLogo src={ LogoImage } />
      <FormLogin />
      <LoginYTContainer>
        <ButtonYT name="Tutorial App Força de Vendas" />
      </LoginYTContainer>
    </LoginContainer>
  );
}
