import { useState } from 'react';
import { AiOutlineIdcard, AiOutlineLock, AiOutlineUser } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import { ButtonLogin } from '../Buttons';
import ButtonRegister from '../Buttons/ButtonRegister';
import InputText from '../InputLogin';
import { ErrorMessage, FormContainer, InputContainer } from './styles';

export default function FormLogin() {
  const router = useNavigate();

  const [userInfo, setUserInfo] = useState({
    key: '2463',
    login: 'Lojas S/A',
    password: '123456',
  });

  const [errorKey, setErrorKey] = useState(false);
  const [errorLogin, setErrorLogin] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);
  const [errorInputs, setErrorInputs] = useState(false);

  // const verifyInputs = (name, value) => {
  //   if (name === 'key') {
  //     const minLengthKey = 3;
  //     const verifyName = value.length < minLengthKey;
  //
  //     setErrorKey(verifyName);
  //   }
  //
  //   if (name === 'login') {
  //     const minLengthLogin = 4;
  //     const verifyLogin = value.length < minLengthLogin;
  //
  //     setErrorLogin(verifyLogin);
  //   }
  //
  //   if (name === 'password') {
  //     const minLengthPassword = 6;
  //     const verifyPassword = value.length < minLengthPassword;
  //
  //     setErrorPassword(verifyPassword);
  //   }
  // };

  // const handleChange = ({ target: { name, value } }) => {
  //   setUserInfo((prevState) => (
  //     {
  //       ...prevState,
  //       [name]: value,
  //     }
  //   ));
  //   verifyInputs(name, value);
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.values(userInfo).some((input) => input === '')) {
      return setErrorInputs(true);
    }
    if (errorKey || errorLogin || errorPassword) return;
    router('/clients');
  };

  return (
    <FormContainer onSubmit={ handleSubmit }>
      <InputContainer>
        <InputText
          error={ errorKey }
          name="key"
          value={ userInfo.key }
          label="Chave"
          icon={ AiOutlineIdcard }
          placeholder="Sua chave"
        />
        <InputText
          error={ errorLogin }
          name="login"
          value={ userInfo.login }
          label="Login"
          icon={ AiOutlineUser }
          placeholder="Seu Login"
        />
        <InputText
          error={ errorPassword }
          name="password"
          value={ userInfo.password }
          password
          label="Senha"
          icon={ AiOutlineLock }
          placeholder="Sua senha"
        />
      </InputContainer>
      {/* <ForgotPassword>
        Esqueci minha senha
      </ForgotPassword> */}
      {errorInputs && <ErrorMessage>Preencha todos os valores!</ErrorMessage>}
      <ButtonLogin />
      <ButtonRegister />
    </FormContainer>
  );
}
