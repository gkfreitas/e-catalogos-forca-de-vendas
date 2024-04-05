import styled from 'styled-components';

export const CardContainer = styled.div`
  display: flex;
  margin: 8px;
  gap: 4px;
  justify-content: space-between;
  border-radius: 5px;
  box-shadow: 0px 0px 5px 0px 
  ${({ $selected }) => ($selected ? 'green' : 'rgba(0,0,0,0.25)')};
  cursor: pointer;
`;

export const CardImageWithInfosContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  width: 100%;
`;

export const CardInfosContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: flex-start;
  padding: 4px 0;
  width: 100%;
`;

export const PricesWithSizesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: end;
  padding: 0 4px;
  gap: 4px;
`;

export const ContainerImage = styled.div`
  width: 100%;
  max-width: 80px;
`;

export const CardImage = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
  border-radius: 5px;
`;

export const PrimaryText = styled.p`
  color: #000;
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
`;

export const SecondaryText = styled.span`
  text-align: center;
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
`;

export const ColorContainer = styled.div`
  width: 100%;
  max-width: 120px;
  padding: 4px;
  border-radius: 10px;
  background-color: ${({ color }) => color};
`;

export const ColorText = styled.p`
  color: #FFF;
  text-align: center;
  font-family: Roboto;
  font-size: 8px;
  font-style: normal;
  font-weight: 500;
`;

export const SizesContainer = styled.div`
  display: flex;
`;

export const KeyValueContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  
`;

export const SizeContent = styled.div`
  width: 100%;
  color: #000;
  font-family: Roboto;
  text-align: center;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  padding: 1px 5px;
  border-right: 1px solid #D9D9D9;
  border-bottom: 1px solid #D9D9D9;
`;

export const TotalSizeTag = styled.div`
  width: 100%;
  color: #fff;
  font-family: Roboto;
  text-align: center;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  padding: 1px 5px;
  border-right: 1px solid #D9D9D9;
  border-bottom: 1px solid #D9D9D9;
  background-color: #000;
`;

export const TotalQuantitySize = styled.div`
  width: 100%;
  color: #fff;
  font-family: Roboto;
  text-align: center;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  padding: 1px 5px;
  border-right: 1px solid #D9D9D9;
  border-bottom: 1px solid #D9D9D9;
  background-color: #809CAA;
`;

export const PricesContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const UnitContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const CurrencyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const PriceValueContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const PriceTitle = styled.p`
  color: #809CAA;
  font-family: Roboto;
  font-size: 12px;
  font-weight: 600;
`;

export const PriceValue = styled.span`
  color: #000;
  font-family: Roboto;
  font-size: 12px;
  font-weight: 400;
  margin-left: 8px;
`;
