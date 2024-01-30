import styled from 'styled-components';

export const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
`;

export const DropdownButton = styled.button`
  display: flex;
  padding: 2px 4px;
  justify-content: center;
  align-items: center;
  gap: 4px; 
  border-radius: 2px;
  background: #809CAA;
  color: #FFF;
  text-align: center;
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  width: 100%;
  cursor: pointer;
`;

export const DropdownContent = styled.div`
  display: ${({ $isOpen }) => ($isOpen ? 'block' : 'none')};
  position: absolute;
  background-color: #f9f9f9;
  min-width: 146px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
`;

export const CheckboxLabel = styled.label`
  display: flex;
  padding: 4px 8px;
  color: black;
  gap: 4px;
  &:hover {
    background-color: #f1f1f1;
  }
`;

export const CheckboxInput = styled.input`
  gap: 8px;
`;
