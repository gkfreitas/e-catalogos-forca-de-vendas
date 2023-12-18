import styled from 'styled-components';

export const Label = styled.label`
  font-size: 14px;
  font-weight: 300;
  font-family: 'Roboto', sans-serif;
  color: #000;
  text-align: center;
`;

export const Input = styled.input`
  padding: 4px;
  border: 1px solid #000;
  border-radius: 3px;
  outline: none;
  font-family: 'Roboto', sans-serif;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 30%;
`;
