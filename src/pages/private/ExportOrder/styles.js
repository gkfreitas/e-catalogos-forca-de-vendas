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

export const OrderContainer = styled.div`
  cursor: pointer;
  outline: ${({ $selected }) => ($selected ? '3px solid #6aca4f' : 'none')};
  margin: 2px 0;
`;

export const IconWithTextContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  gap: 6px;
`;

export const IconContainer = styled.div`
  width: 30px;
  height: 30px;
  background-color: #fff;
  border-radius: 3px;
  display: flex;
  justify-content: center;
  align-items: center;

`;

export const IconText = styled.p`
  color: #FFF;
  font-family: Poppins;
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
`;

export const ExportFooter = styled.footer`
  background: #809CAA;
  width: 100%;
  padding: 4px 30px;
  display: flex;
  gap: 30px;
  justify-content: center;
  align-items: center;
  margin-top: auto;
`;

export const SelectedOrdersText = styled.p`
  width: 100px;
  color: #FFF;
  text-align: center;
  font-family: Poppins;
  font-size: 14px;
  line-height: 14px;
  font-style: normal;
  font-weight: 400;
`;
