import { Input, LabelInput } from './styles';

export default function InputCheckbox({ text, onClick, name }) {
  return (
    <LabelInput>
      <Input type="checkbox" onClick={ onClick } name={ name } />
      <span>{text}</span>
    </LabelInput>
  );
}
