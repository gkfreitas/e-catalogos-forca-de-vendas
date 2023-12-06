import { Input, LabelInput } from './styles';

export default function InputCheckbox({ text, size, ...rest }) {
  return (
    <LabelInput>
      <Input
        $size={ size }
        type="checkbox"
        { ...rest }
      />
      <span>{text}</span>
    </LabelInput>
  );
}
