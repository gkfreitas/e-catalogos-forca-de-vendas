import { Input, LabelInput } from './styles';

export default function InputCheckbox({ text, size, type, ...rest }) {
  return (
    <LabelInput>
      <Input
        $size={ size }
        type={ type }
        { ...rest }
      />
      {text}
    </LabelInput>
  );
}
