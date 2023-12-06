import styled from 'styled-components';

export const CardContainer = styled.div`
  display: flex;
  padding: 20px;
  gap: 16px;
  justify-content: space-between;
`;

export const CardImageWithInfosContainer = styled.div`
  display: flex;
  align-items: start;
  gap: 4px;
`;

export const CardInfosContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  justify-content: center;
  align-items: flex-start;
  padding: 4px 0;
`;

export const PricesWithSizesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  gap: 8px;
`;

export const ContainerImage = styled.div`
  height: auto;
  width: 64px;
  height: 96px;
`;

export const CardImage = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
  border-radius: 5px;
  border: 0.5px solid black;
`;

export const PrimaryText = styled.p`
  color: #000;
  text-align: center;
  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
`;

export const SecundaryText = styled.span`
  color: #656262;
  text-align: center;
  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  font-weight: 300;
`;

export const ColorContainer = styled.div`
  width: 100%;
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

export const SizesTable = styled.table`
  
`;

export const SizesTableHead = styled.thead`
  
`;

export const SizesTableHeadContaienr = styled.tr`
  
`;

export const SizeName = styled.th`
  
`;

export const SizesTableBody = styled.tbody`
  
`;

export const SizesTableBodyRow = styled.tr`
  
`;

export const Size = styled.td`
  
`;
