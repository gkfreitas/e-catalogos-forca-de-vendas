import LogoImage from '../../../assets/images/logo.png';
import { ButtonYT } from '../../../components/Buttons';
import FormLogin from '../../../components/FormLogin';
import { LoginContainer, LoginLogo } from './styles';

export default function LoginPage() {
  return (
    <LoginContainer>
      <LoginLogo src={ LogoImage } />
      <FormLogin />
      <ButtonYT />
    </LoginContainer>
  );
}
