import LogoImage from '../../../assets/images/logo.png';
import { ButtonYT } from '../../../components/Buttons';
import FormLogin from '../../../components/FormLogin';
import { LoginContainer, LoginLogo, LoginYTContainer } from './styles';

export default function LoginPage() {
  return (
    <LoginContainer>
      <LoginLogo src={ LogoImage } />
      <FormLogin />
<<<<<<< HEAD
      <ButtonYT name='Força de Vendas'/>
      <ButtonYT name='Link do Ecommerce'/>
=======
      <LoginYTContainer>
        <ButtonYT name="Força de Vendas" />
        <ButtonYT name="Link do Ecommerce" />
      </LoginYTContainer>
>>>>>>> 50b7297044e8e1848156d08f7b36fd7b79e1dbaf
    </LoginContainer>
  );
}
