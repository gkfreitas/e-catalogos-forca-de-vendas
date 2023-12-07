import { styled } from 'styled-components';

export const BrandContainer = styled.div`
  margin: 0px auto;
  max-width: 280px;
  width: 100%;
  border-radius: 8px;
  cursor: pointer;
  background: #F7F7F7;
   box-shadow: 0px 4px 4px -2px rgba(0, 0, 0, 0.10);
  &:hover {
    box-shadow: 0px 8px 8px -2px rgba(0, 0, 0, 0.25);
}
`;

export const BrandImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 20px;
`;
