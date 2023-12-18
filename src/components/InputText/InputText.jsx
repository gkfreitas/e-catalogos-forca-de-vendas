import { Input, Label } from './styles';

export default function InputText({ labelText, setValue, value, ...rest }) {
  return (
    <>
      <Label htmlFor={ labelText }>
        { labelText }
      </Label>
      <Input
        { ...rest }
        id={ labelText }
        type="text"
        onChange={ setValue }
        value={ value }
      />
    </>
  );
}
