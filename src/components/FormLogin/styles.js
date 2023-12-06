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
  padding-top: 24px;
  width: 100%;
`;

export const ErrorMessage = styled.p`
  color: red;
  font-weight: 300;
  font-size: 12px;
  margin-top: 4px;
`;
