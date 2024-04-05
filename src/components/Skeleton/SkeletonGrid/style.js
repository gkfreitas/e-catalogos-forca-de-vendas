import styled from 'styled-components';

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(${({ $imagesPerView }) => $imagesPerView}, 1fr);
  grid-gap: 15px 10px;
  justify-items: center;
  padding: 8px;
  width: 100%;
`;
