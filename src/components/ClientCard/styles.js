import { styled } from 'styled-components';

export const CardContainer = styled.div`
  margin: 0px auto;
  padding: 8px;
  max-width: 280px;
  width: 100%;
  max-height: 150px;
  overflow: auto;
  border-radius: 8px;
  cursor: pointer;
  flex-shrink: 0;
  border: ${({ $currentClient }) => ($currentClient ? '1px solid #12A1B8' : 'none')};
  background: #F7F7F7;
  box-shadow: 0px 8px 8px -4px rgba(0, 0, 0, 0.2);
  &:hover {
    box-shadow: 0px 10px 10px -5px rgba(0, 0, 0, 0.20);
  
}
`;

export const InfoTagContainer = styled.div`
  margin-top: 4px;
`;

export const CardTitle = styled.h1`
  color: #323232;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
`;

export const InfoTag = styled.p`
  color: #323232;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
`;

export const InfoContent = styled.span`
  color: #4B4B4B;
  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
`;
