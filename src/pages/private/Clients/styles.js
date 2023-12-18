import { styled } from 'styled-components';

export const OverflowPage = styled.div`
  width: 100%;
  height: 100vh;
  overflow: auto;
`;

export const ClientsContainer = styled.div`
  margin: 0px auto;
  padding: 0 20px;
  max-width: 1280px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Separator = styled.div`
  width: 100%;
  height: 1px;
  border-radius: 5px;
  background: #EEE;
`;

export const ClientsCardContainer = styled.main`
  display: flex;
  gap: 8px;
  padding: 12px 0px;
  width: 100%;
  overflow: auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, 250px);
  grid-gap: 20px;
  justify-content: center;
`;

export const TablePriceCard = styled.div`
  padding: 10px 5px;
  border-radius: 5px;
  background-color: #6F97AB;
  margin: 4px 0px;
  cursor: pointer;
`;

export const TablePriceCardText = styled.h1`
  color: #F9F8F8;
  text-align: center;
  font-family: Roboto;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
`;

export const TablePriceButton = styled.div`
  margin-top: 6px;
  padding: 5px;
  border-radius: 5px;
  background: #6F97AB;
  width: 60%;
  position: relative;
  
`;

export const TablePriceButtonTitle = styled.h1`
  color: #EEE;
  text-align: center;
  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
`;

export const TablePriceButtonName = styled.p`
  color: #FFF;
  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 12px;
`;

export const EditorIcon = styled.div`
  position: absolute;
  right: 4px;
  top: 6px;
  cursor: pointer;
`;

export const InputSearchContainer = styled.div`
  padding: 12px 0px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TablePriceCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 40px;
  gap: 20px;
`;
