import { styled } from 'styled-components';

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 350px;
  @media (min-width: 730px) {
  max-width: 400px;
}
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding-top: 24px;
  width: 100%;
`;

export const ErrorMessage = styled.p`
  color: red;
  font-weight: 300;
  font-size: 12px;
  margin-top: 4px;
`;

export const ForgotPassword = styled.p`
  margin-top: 6px;
  color: #000;
  text-align: center;
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  text-decoration-line: underline;
  cursor: pointer;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;
