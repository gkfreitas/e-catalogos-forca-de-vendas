import { styled } from 'styled-components';

export const SizesContainer = styled.div`
  display: flex;
`;

export const SizeCard = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SizeName = styled.div`
  padding: 4px 12px;
  background: #F0F0F0;
  text-align: center;
`;

export const SizeQuantity = styled.div`
  padding: 4px 12px;
  background: #F0F0F0;
  border: 1px solid #000;
  text-align: center;
`;

export const SizeText = styled.p`
  color: #000;
  font-family: Roboto;
  font-size: 10px;
  font-weight: 400;
  line-height: 8px;
`;

export const TotalText = styled.p`
  color: #8E8E8E;
  font-family: Roboto;
  font-size: 10px;
`;
