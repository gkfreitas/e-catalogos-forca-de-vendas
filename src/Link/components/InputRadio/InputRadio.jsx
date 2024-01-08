import { Input, Label, LabelText } from './styles';

export default function InputRadio({ name, value, onChange, selectedValue }) {
  return (
    <Label>
      <Input
        type="radio"
        value={ value }
        checked={ selectedValue === value }
        onChange={ onChange }
      />
      <LabelText>{name}</LabelText>
    </Label>
  );
}
