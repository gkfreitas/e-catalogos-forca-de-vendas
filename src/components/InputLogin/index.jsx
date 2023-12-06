import {
  IconContainer,
  InputText, InputWithIcon, LabelError, LabelInputLogin, LabelText,
} from './styles';

export default function InputLogin({ label, icon: Icon,
  placeholder, password, name, onChange, value, error }) {
  const errorMessages = {
    name: 'O nome deve ter no mínimo 3 caracteres',
    login: 'O login deve ter no mínimo 4 caracteres',
    password: 'A senha deve ter no mínimo 6 caracteres',
  };

  return (
    <LabelInputLogin>
      <LabelText>{label}</LabelText>
      <InputWithIcon $error={ error }>
        <IconContainer>
          <Icon size={ 32 } fill={ error ? 'red' : '#024650' } />
        </IconContainer>
        <InputText
          value={ value }
          onChange={ onChange }
          name={ name }
          type={ password ? 'password' : 'text' }
          placeholder={ placeholder }
        />
      </InputWithIcon>
      <LabelError>{error && errorMessages[name]}</LabelError>
    </LabelInputLogin>
  );
}
