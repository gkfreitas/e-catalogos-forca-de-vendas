import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 20px;
  align-items: center;
`;

export const OrderText = styled.p`
  color: #000;
  text-align: center;
  font-family: Poppins;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
`;

export const PercentageText = styled.p`
  padding-top: 60px;
  color: #3C3C3C;
  text-align: center;
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
`;

export const BarProgress = styled.div`
  margin-top: 20px;
  border-radius: 10px;
  width: 95%;
  height: 5px;
  position: relative;
  background: #D9D9D9;
`;

export const BarProgressive = styled.div`
  width: 60%;
  height: 5px;
  border-radius: 10px;
  position: absolute;
  left: 0;
  top: 0;
  background: #27D50A;
`;

export const RestoreButton = styled.button`
  cursor: pointer;
  margin-top: 25px;
  padding: 5px 10px;
  border-radius: 3px;
  background: #809CAA;
  color: #FFF;
  text-align: center;
  font-family: Roboto;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
`;
