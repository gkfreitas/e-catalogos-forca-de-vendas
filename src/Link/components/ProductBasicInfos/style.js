import { styled } from 'styled-components';

export const ProductBasicInfosContainer = styled.div`
  padding: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 24px;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center;
  justify-content: center;
`;

export const RefenceText = styled.p`
  color: #001A1E;
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
`;

export const PrimaryText = styled.span`
  color: #000;
  font-family: Roboto;
  font-size: 12px;
  font-weight: 400;
`;

export const SecundaryText = styled.span`
  color: #000;
  font-family: Roboto;
  font-size: 10px;
  font-weight: 300;
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
  padding: 2px;
  width: 100%;
  background-color: ${({ $color }) => `#${$color}`};
  color: #fff;
  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  text-align: center;
  border-radius: 8px;
 
`;
