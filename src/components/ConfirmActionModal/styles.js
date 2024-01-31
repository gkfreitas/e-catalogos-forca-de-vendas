import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const QuestionText = styled.p`
  color: #000;
  text-align: center;
  font-family: Roboto;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  max-width: 190px;
  padding: 20px 0;
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: center;
  gap: 60px;
  width: 100%;
  align-items: center;
`;

export const ActionButton = styled.button`
  cursor: pointer;
  border-radius: 3px;
  background: #EC2B2B;
  padding: 5px 10px;
  color: #FFF;
  text-align: center;
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
`;

export const NeutralButton = styled.button`
  cursor: pointer;
  border-radius: 3px;
  background: #809CAA;
  padding: 5px 10px;
  color: #FFF;
  text-align: center;
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
`;
