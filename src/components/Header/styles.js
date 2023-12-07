import { styled } from 'styled-components';

export const HeaderContainer = styled.header`
  padding: 8px 20px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  background: #809CAA;
`;

export const HeaderTitle = styled.h1`
  color: #F9F8F8;
  text-align: center;
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  text-transform: uppercase;
`;

export const CategoryContainer = styled.div`
  color: #809CAA;
  text-align: center;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  padding: 3px;
  text-transform: uppercase;
  border-radius: 5px;
  background: #FDFFFD;
  margin: auto;
`;

export const ContainerArrows = styled.div`
  display: flex;
  justify-content: center;
  margin: auto;
  align-items: center;
`;
