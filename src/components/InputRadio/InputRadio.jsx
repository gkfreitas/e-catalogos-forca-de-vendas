import { InputRadioStyle, LabelForInput } from './styles';

export default function InputRadio({ size, label, gap, ...rest }) {
  return (
    <LabelForInput $gap={ gap }>
      <InputRadioStyle $size={ size } type="radio" { ...rest } />
      {label}
    </LabelForInput>

  );
}
