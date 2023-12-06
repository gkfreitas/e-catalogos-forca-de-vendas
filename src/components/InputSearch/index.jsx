import { SlMagnifier } from 'react-icons/sl';
import { InputBox, InputText } from './styles';

export default function InputSearch({ value, onChange, placeholder }) {
  return (

    <InputBox>
      <SlMagnifier size={ 16 } fill="#646464" />
      <InputText
        placeholder={ placeholder || 'Buscar' }
        value={ value }
        onChange={ onChange }
      />
    </InputBox>

  );
}
