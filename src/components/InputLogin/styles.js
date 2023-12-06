import { styled } from 'styled-components';

export const InputWithIcon = styled.div`
  border: 1px solid;
  border-color: ${({ $error }) => ($error ? 'red;' : 'black;')};
  padding: 4px 12px;
  background-color: #F9F8F8;
  border-radius: 10px;
  display: flex;
  align-items: center;
`;

export const InputText = styled.input`
  color: #4B4B4B;
  font-family: Roboto;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  vertical-align: center;
  background-color: #F9F8F8;
  width: 100%;
`;

export const IconContainer = styled.div`
  margin-right: 20px;
  vertical-align: center;
  display: flex;
`;

export const LabelInputLogin = styled.label`
  margin: 0px 6px;
`;

export const LabelText = styled.p`
  color: #000;
  font-family: Roboto;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  margin-bottom: 4px;
  margin-left: 12px;
`;

export const InputIcon = styled.div`
  padding-right: 4px;
`;

export const LabelError = styled.span`
  margin-left: 12px;
  color: red;
  font-weight: 300;
  font-size: 12px;
  margin-top: 4px;
`;
