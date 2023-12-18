import styled from 'styled-components';

export const CoverPage = styled.div`
  height: 100svh;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const InputsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  margin-bottom: 8px;
`;

export const OrderProductsOverflow = styled.div`
  overflow: auto;
  height: 1%;
  flex-grow: 1;
`;

export const OrderTools = styled.div`
  display: flex;
  gap: 20px;
`;

export const Icon = styled.img`
  
`;

export const Footer = styled.footer`
  height: 48px;
  width:  100%;
  background-color: #809CAA;
  padding: 5px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NextButton = styled.button`
  padding: 5px 10px;
  color: #809CAA;
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  background: #fff;
  border-radius: 5px;
  cursor: pointer;
`;

export const IconContainer = styled.button`
  border-radius: 5px;
  background-color: #fff;
  padding: 2px 4px;
  cursor: pointer;
`;
