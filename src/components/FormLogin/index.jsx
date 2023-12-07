import { useState } from 'react';
import { AiOutlineIdcard, AiOutlineLock, AiOutlineUser } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import { ButtonLogin } from '../Buttons';
import InputText from '../InputLogin';
import { ErrorMessage, FormContainer, InputContainer } from './styles';

export default function FormLogin() {
  const router = useNavigate();

  const [userInfo, setUserInfo] = useState({
    name: '',
    login: '',
    password: '',
  });

  const [errorName, setErrorName] = useState(false);
  const [errorLogin, setErrorLogin] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);
  const [errorInputs, setErrorInputs] = useState(false);

  const verifyInputs = (name, value) => {
    if (name === 'name') {
      const minLengthName = 3;
      const verifyName = value.length < minLengthName;

      setErrorName(verifyName);
    }

    if (name === 'login') {
      const minLengthLogin = 4;
      const verifyLogin = value.length < minLengthLogin;

      setErrorLogin(verifyLogin);
    }

    if (name === 'password') {
      const minLengthPassword = 6;
      const verifyPassword = value.length < minLengthPassword;

      setErrorPassword(verifyPassword);
    }
  };

  const handleChange = ({ target: { name, value } }) => {
    setUserInfo((prevState) => (
      {
        ...prevState,
        [name]: value,
      }
    ));
    verifyInputs(name, value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.values(userInfo).some((input) => input === '')) {
      return setErrorInputs(true);
    }
    if (errorName || errorLogin || errorPassword) return;
    router('/clients');
  };

  return (
    <FormContainer onSubmit={ handleSubmit }>
      <InputContainer>
        <InputText
          onChange={ handleChange }
          error={ errorName }
          name="name"
          value={ userInfo.name }
          label="Nome"
          icon={ AiOutlineIdcard }
          placeholder="Seu nome"
        />
        <InputText
          onChange={ handleChange }
          error={ errorLogin }
          name="login"
          value={ userInfo.login }
          label="Login"
          icon={ AiOutlineUser }
          placeholder="Seu Login"
        />
        <InputText
          onChange={ handleChange }
          error={ errorPassword }
          name="password"
          value={ userInfo.password }
          password
          label="Senha"
          icon={ AiOutlineLock }
          placeholder="Sua senha"
        />
      </InputContainer>
      {errorInputs && <ErrorMessage>Preencha todos os valores!</ErrorMessage>}
      <ButtonLogin />
    </FormContainer>
  );
}
