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
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 2px solid #809caa;
  gap: 10px;
  cursor: pointer;
`;

export const CardIcon = styled.img`
  width: 48px;
  height: 48px;
  object-fit: contain;
`;

export const CardTitle = styled.p`
  font-size: 18px;  
  font-weight: 400;
  color: #809caa;
  text-align: center;
  font-family: 'Roboto', sans-serif;
`;
