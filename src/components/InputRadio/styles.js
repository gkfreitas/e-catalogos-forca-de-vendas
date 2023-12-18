import styled from 'styled-components';

export const InputRadioStyle = styled.input`
  width: ${({ $size }) => `${$size}px` || '24px'};
  height: ${({ $size }) => `${$size}px` || '24px'};
  border: 1px solid #809caa;
  background-color: #fff;
`;

export const LabelForInput = styled.label`
  color: #6A6A6A;
  font-family: Roboto;
  width: ${({ $width }) => `${$width}%` || 'auto'};
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  padding-left: 6px;
  display: flex;
  align-items: center;
  gap: ${({ $gap }) => `${$gap}px` || '6px'};
`;

export const InputContainer = styled.div`
  
`;
