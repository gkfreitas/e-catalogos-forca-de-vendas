import styled from 'styled-components';

export const AllImagesContainer = styled.main`
  padding: 8px 8px;
  display: flex;
  gap: 8px;
  width: 100%;
  overflow: auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 8px;
  justify-content: center;
`;

export const ImageContainer = styled.div`

  border: 1px solid #ddd;
  border-radius: 5px;
  cursor: pointer;
`;

export const HeaderImage = styled.div`
  padding: 4px 0px;
  font-size: 16px;
  text-align: center;
  font-weight: 500;
  color: white;
  border-radius: 5px 5px 0px 0px;
  background-color: #12A1B8;
`;

export const Image = styled.img`
  cursor: pointer;
  width: 100%;
  object-fit: cover;
`;
