import styled from 'styled-components';

export const Container = styled.div`
  padding: 0 6px;
`;

export const Title = styled.h1`
  color: #000;
  text-align: center;
  font-family: Roboto;
  font-size: 14px;
  font-weight: 400;
`;

export const ButtonsContainer = styled.div`
  padding-top: 30px;
  display: flex;
  justify-content: center;
  gap: 18px;
`;

export const CancelButton = styled.button`
  cursor: pointer;
  padding: 4px 8px;
  border-radius: 4px;
  background: #c6c6c6;
`;

export const RemoveButton = styled.button`
  cursor: pointer;
  padding: 4px 8px;
  border-radius: 4px;
  background: #FF4747;
`;

export const ButtonText = styled.p`
  color: #FFF;
  text-align: center;
  font-family: Roboto;
  font-size: 14px;
  font-weight: 500;
`;
