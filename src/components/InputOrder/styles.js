import styled from 'styled-components';

export const InputContainer = styled.div`
  padding: 3px 6px;
  border-radius: 3px;
  background-color: ${({ $bgColor }) => $bgColor || '#E4F5FE'};
  width: ${({ $width }) => $width || '100%'};
  margin-top: 4px;
  flex-shrink: 0;
`;

export const InputTag = styled.p`
  color: #000;
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
`;

export const InputContent = styled.span`
  color: #000;
  font-family: Roboto;
  font-size: 13px;
  font-style: normal;
  font-weight: 300;
`;
