import { styled } from 'styled-components';

export const InputBox = styled.div`
  padding: 12px 0;
  padding: 8px 12px;
  border-radius: 5px;
  background: #F5F5F5;
  max-width: 480px;
  width: 70%;
  display: flex;
  align-items: center;
  @media (min-width: 744px) {
    padding: 12px 16px;
  }
`;

export const InputText = styled.input`
  width: 100%;
  background: #F5F5F5;
  color: #646464;
  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  margin-left: 8px;
  @media (min-width: 744px) {
    font-size: 14px;
  }
`;
