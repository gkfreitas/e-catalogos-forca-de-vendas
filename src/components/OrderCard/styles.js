import styled from 'styled-components';

export const Container = styled.div`
  padding: 10px 20px;
  background-color: ${({ $bgColor }) => ($bgColor ? '#bdd2dd' : '#fff')};
`;

export const EmailText = styled.p`
  font-size: 14px;
  font-weight: 500;
  font-family: 'Roboto' sans-serif;
  color: ${({ $color }) => $color};
  text-align: center;
  padding: 8px 0;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
`;

export const ButtonDetails = styled.button`
  padding: 8px 16px;
  color: #FFF;
  font-family: Roboto;
  font-size: 14px;
  font-weight: 400;
  border-radius: 5px;
  background: #809CAA;
  text-transform: uppercase;
  cursor: pointer;
`;

export const Icon = styled.img`
  cursor: pointer;
`;
