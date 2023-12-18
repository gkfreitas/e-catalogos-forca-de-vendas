import { InputRadioStyle, LabelForInput } from './styles';

export default function InputRadio({ size, label, gap, width, ...rest }) {
  return (
    <LabelForInput $gap={ gap } $width={ width }>
      <InputRadioStyle $size={ size } type="radio" { ...rest } />
      {label}
    </LabelForInput>

  );
}
