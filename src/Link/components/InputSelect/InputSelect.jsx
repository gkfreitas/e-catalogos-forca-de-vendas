import { useState } from 'react';
import { OptionContainer, SelectContainer } from './styles';

export default function InputSelect({ name, options, onChange, updateLink, ...rest }) {
  const [selectValue, setSelectValue] = useState([]);

  const handleChangeLink = (valueOption) => {
    setSelectValue(valueOption);
    updateLink(JSON.parse(valueOption));
  };

  return (
    <SelectContainer
      { ...rest }
      name={ name }
      value={ selectValue }
      onChange={ ({ target }) => handleChangeLink(target.value ? target.value : []) }
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
