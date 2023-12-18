import styled from 'styled-components';

export const InputContainer = styled.div`
  padding: 3px 6px;
  border-radius: 3px;
  background-color: ${({ $bgColor }) => $bgColor || '#F7F7F7'};
  width: ${({ $width }) => $width || '100%'};
  margin-top: 4px;
  flex-shrink: 0;
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
