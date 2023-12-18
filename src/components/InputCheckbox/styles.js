import { styled } from 'styled-components';

export const LabelInput = styled.label`
 color: #000;
  text-align: left;
  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  font-weight: 300;
  line-height: 12px;
  display: flex;
  align-items: center;
  gap: 4px;
  max-width: 100px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  justify-content: start;
  width: 100%;
`;

export const Input = styled.input`
  width: ${({ $size }) => `${$size}px` || '12px'};
  height: ${({ $size }) => `${$size}px` || '12px'};
  cursor: pointer;
`;
