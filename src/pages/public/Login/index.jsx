import LogoImage from '../../../assets/images/logo.png';
import { BaseLayout } from '../../../base/baseLayout';
import { ButtonYT } from '../../../components/Buttons';
import FormLogin from '../../../components/FormLogin';
import { LoginContainer, LoginLogo } from './styles';

export default function LoginPage() {
  return (
    <BaseLayout>
      <LoginContainer>
        <LoginLogo src={ LogoImage } />
        <FormLogin />
        <ButtonYT />
      </LoginContainer>
    </BaseLayout>
  );
}
