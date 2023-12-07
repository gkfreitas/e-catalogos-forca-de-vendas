import { styled } from 'styled-components';

export const ChoseBrand = styled.h1`
  margin-top: 24px;
  color: #024650;
  text-align: center;
  font-family: Poppins;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  text-transform: uppercase;
  
`;

export const BrandsContainer = styled.main`
  display: flex;
  gap: 8px;
  padding: 12px 0px;
  width: 100%;
  overflow: auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, 250px);
  grid-gap: 20px;
  justify-content: center;
`;

export const OverflowPage = styled.div`
  width: 100%;
  height: 100vh;
  overflow: auto;
`;
