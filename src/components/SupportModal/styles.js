import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: start;
  padding: 20px;
`;

export const IconWithText = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const Text = styled.p`
  color: #000;
  text-align: center;
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
`;

export const Icon = styled.img`
  width: 28px;
  height: 28px;
  cursor: pointer;
`;
