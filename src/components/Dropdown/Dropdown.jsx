import { useState } from 'react';
import { FaAngleDown } from 'react-icons/fa6';

import {
  CheckboxInput,
  CheckboxLabel,
  DropdownButton,
  DropdownContainer,
  DropdownContent,
} from './styles';

function Dropdown({ name, options, onChange }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleDropdown = () => {
    if (!options[0]) {
      return;
    }
    setIsOpen(!isOpen);
  };
  return (
    <DropdownContainer>
      <DropdownButton onClick={ handleDropdown }>
        { name }
        <FaAngleDown />
      </DropdownButton>
      <DropdownContent $isOpen={ isOpen }>
        { options.map((option, index) => (
          <CheckboxLabel
            key={ index }
          >
            <CheckboxInput
              onClick={ onChange }
              type="checkbox"
              value={ option }
            />
            { option }
          </CheckboxLabel>
        )) }
      </DropdownContent>
    </DropdownContainer>
  );
}

export default Dropdown;
