import styled from 'styled-components';

export const CardsContainer = styled.main`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 20px;
`;

export const CardContainer = styled.div`
  width: 40%;
  padding: 12px 8px;
  border-radius: 5px;
  background-color: #fff;
  box-shadow: 0 8px 8px -4px rgba(0, 0, 0, 0.15);
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 2px solid #809caa;
  cursor: pointer;
`;
export const CardPrincipal = styled.div`
  padding: 12px 8px;
  border-radius: 5px;
  background-color: #fff;
  box-shadow: 0 8px 8px -4px rgba(0, 0, 0, 0.15);
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 2px solid #809caa;
  margin: 20px auto 0 auto;
  gap: 20px;
  cursor: pointer;
`;

export const CardIcon = styled.img`
  width: 38px;
  object-fit: contain;
`;

export const CardTitle = styled.p`
  width: 120px;
  font-size: 18px;  
  font-weight: 400;
  color: #809caa;
  text-align: center;
  font-family: 'Roboto', sans-serif;
`;

export const CardTitlePrincipal = styled.p`
  width: 100%;
  font-size: 18px;  
  font-weight: 400;
  color: #809caa;
  text-align: center;
  font-family: 'Roboto', sans-serif;
`;
