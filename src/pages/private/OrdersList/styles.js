import styled from 'styled-components';

export const ContainerPage = styled.div`
  display: flex;
  flex-direction: column;
  height: 100svh;
`;

export const InputsTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
  padding-top: 10px;
`;

export const InputsDateContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 16px 0;
  gap: 40px;
`;

export const OrdersContainer = styled.main`
  flex-grow: 1;
  height: 1%;
  overflow: auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
