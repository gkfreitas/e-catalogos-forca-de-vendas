import { styled } from 'styled-components';

export const FooterContainer = styled.footer`
  padding: 10px 6px;
  display: flex;
  justify-content: center;
  gap: 12px;
  align-items: center;
`;

export const IconStyle = styled.img`
  cursor: pointer;
  width: 36px;
  height: 36px;
`;

export const AddProductsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;

export const AddProductsBox = styled.div`
  border-radius: 5px;
  padding: 2px 8px;
`;

export const BoxText = styled.p`
  color: #6F97AB;
  text-align: center;
  font-family: Roboto;
  font-size: 24px;
  font-weight: 400;
  line-height: 24px; /* 100% */
  font-style: normal;
  padding: 2px;
  border: 1px solid #6F97AB;
`;

export const CurrentAndAccumulatedBox = styled.div`
  border-radius: 5px;
  padding: 2px;
  color: #EEE;
  text-align: center;
  font-family: Poppins;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
`;

export const CurrentTextStyle = styled.p`
  color: #000;
  text-align: center;
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const CurrentPriceStyle = styled.p`
  color: #323131;
  text-align: center;
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
