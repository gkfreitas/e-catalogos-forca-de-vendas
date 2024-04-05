import styled from 'styled-components';

export const AvailableProductsContainer = styled.div`
  overflow: auto;
  height: 90vh;
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
  padding: 8px 8px;
  gap: 8px;
  width: 100%;
  grid-gap: 8px;
  display: grid;
  grid-template-columns: repeat(${({ $imagesPerview }) => $imagesPerview}, 1fr);
  justify-content: center;
  align-items: center;
`;

export const ContainerSkeleton = styled.main`
  padding: 8px 8px;
  gap: 8px;
  width: 100%;
  grid-gap: 8px;
  justify-content: center;
  align-items: center;
`;

export const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 240px;
  border-radius: 5px;
  border: 1px solid #ddd;
  cursor: pointer;
`;

export const ImageRenderContainer = styled.div`

  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  
`;

export const HeaderImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2px 1px;
  border-radius: 5px 5px 0px 0px;
  background:  ${({ $selected }) => ($selected ? 'green' : '#b6c8d1')};
  text-align: center;
  padding: 2px;
  gap: 2px;
  width: 100%;
`;

export const SecondaryText = styled.span`
  
  text-align: center;
  font-family: Roboto;
  font-size: 10px;
  font-style: normal;
  font-weight: 700;
`;

export const HeaderImageText = styled.div`
  display: flex;
  justify-content: center;
  gap: 4px;
  color:  ${({ $selected }) => ($selected ? '#FFF' : '#000')};
  font-family: Roboto;
  font-size: 13px;
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

export const ImageStyle = styled.img`
  cursor: pointer;
  width: 100%;
  max-height: 215px;
  object-fit: contain;
`;
