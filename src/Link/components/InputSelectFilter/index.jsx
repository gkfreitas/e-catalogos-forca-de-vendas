import { OptionContainer, SelectContainer } from './style';

export default function InputSelect({ name, options, onChange, value, ...rest }) {
  return (
    <SelectContainer
      { ...rest }
      name={ name }
      onChange={ onChange }
    >
      {options.map((option, index) => (
        <OptionContainer
          disabled={ option.isDisabled }
          key={ index }
          value={ option.value }
        >
          {option.label}
        </OptionContainer>
      ))}
    </SelectContainer>
  );
}
