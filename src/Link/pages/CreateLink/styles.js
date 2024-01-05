import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100svh;
`;

export const AllInputsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 12px 0 4px 0;
  flex-wrap: wrap;
`;

export const TwoInputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

export const RefBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  border-radius: 2px;
  align-items: center;
  justify-content: center;
  border: 0.5px solid #000;
  box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.15);
  padding: 0px 2px 0px 2px;
  flex-grow: 1;
  height: 100%;
`;

export const RefTitle = styled.p`
  text-align: center;
  font-family: Roboto;
  font-size: 12px;
  font-weight: 500;
  text-decoration-line: underline;
`;

export const RefQuantity = styled.p`
  text-align: center;
  font-family: Roboto;
  font-size: 14px;
  font-weight: 500;
`;

export const ProductsContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow: auto;
  width: 100%;
  flex-grow: 1;
`;

export const RefAndBrandBox = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const LogoHeader = styled.img`
  width: 95px;
`;
