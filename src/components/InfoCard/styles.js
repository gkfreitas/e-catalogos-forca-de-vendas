import { styled } from 'styled-components';

export const InfoTag = styled.p`
  color: #000;
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  padding: 8px 12px;
`;

export const InfoContent = styled.span`
  color: #000;
  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
`;

export const ColorTitle = styled.p`
  color: #000;
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  padding: 8px 12px;
  text-align: center;
  margin: 0 auto;
`;

export const ColorContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
   gap: 8px;
`;

export const ColorTag = styled.div`
  width: 45%;
  padding: 2px;
  background-color: ${({ $color }) => `#${$color}`};
  color: #fff;
  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  text-align: center;
  border-radius: 8px;
 
`;
