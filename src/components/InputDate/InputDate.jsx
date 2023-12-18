import { Input, InputContainer, Label } from './styles';

export default function InputDate({ labelText, value, setValue }) {
  return (
    <InputContainer>
      <Label htmlFor={ labelText }>
        { labelText }
      </Label>
      <Input
        type="date"
        id={ labelText }
        value={ value }
        onChange={ setValue }
      />
    </InputContainer>
  );
}
