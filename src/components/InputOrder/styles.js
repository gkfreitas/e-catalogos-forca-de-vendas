import styled from 'styled-components';

export const InputContainer = styled.div`
  padding: 3px 6px;
  border-radius: 3px;
  background: #F7F7F7;
  width: ${({ $width }) => $width || '90%'};
  margin: 10px auto;
`;

export const InputTag = styled.p`
  color: #000;
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
`;

export const InputContent = styled.span`
  color: #000;
  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  font-weight: 300;
`;
