import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100svh;
`;

export const AvailableProductsContainer = styled.div`
  overflow: auto;
  height: 90svh;
  flex-grow: 1;
`;

export const QuantityText = styled.p`
  display: block;
  color: black;
  text-align: center;
  font-family: Poppins;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
`;

export const AllImagesContainer = styled.main`
  flex-grow: 1;
  padding: 8px 8px;
  gap: 8px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(${({ $imagesperview }) => $imagesperview}, 1fr);
  grid-gap: 8px;
  justify-content: center;
`;

export const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: ${({ $selected }) => ($selected ? '2px solid green' : '1px solid #ddd;')};
  width: 100%;
  border-radius: 5px;
  cursor: pointer;
`;

export const HeaderImage = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 4px 4px;
  border-radius: 5px 5px 0px 0px;
  background: #D5D5D5;
  text-align: center;
  width: 100%;
`;

export const SecundaryText = styled.span`
  color: #323232;
  text-align: center;
  font-family: Roboto;
  font-size: 10px;
  font-style: normal;
  font-weight: 700;
`;

export const HeaderImageText = styled.h1`
  color: #000;
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
`;

export const Image = styled.img`
  cursor: pointer;
  width: 100%;
  height: 100%;
  object-fit: cover;
  background-color: #809CAA;
`;

export const ChangeImagesPerViewButton = styled.button`
  font-size: ${({ $selected }) => ($selected ? '18px' : '16px')};
  padding: 4px 6px;
  font-weight: ${({ $selected }) => ($selected ? 'bold' : 'normal')};
  cursor: pointer;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4px 20px;

`;

export const NumbersContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

export const InputSelect = styled.select`
  padding: 2px 4px;
  justify-content: center;
  align-items: center;
  gap: 4px; 
  border-radius: 2px;
  background: #809CAA;
  color: #FFF;
  text-align: center;
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
`;

export const ClearButton = styled.button`
  display: flex;
  padding: 4px 8px;
  justify-content: center;
  gap: 10px;
  border-radius: 2px;
  background: #809CAA;
  color: #FFF;
  text-align: center;
  font-family: Poppins;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 14px; /* 140% */
  text-transform: uppercase;
  cursor: pointer;
`;

export const Option = styled.option`
  font-size: 18px;
  font-weight: 500;
`;

export const ShowSelectedButton = styled.button`
  cursor: pointer;
`;
