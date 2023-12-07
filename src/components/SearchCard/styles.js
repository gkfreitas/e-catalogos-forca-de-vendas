import { styled } from 'styled-components';

export const BackgroundFocus = styled.div`
  position: absolute;
  z-index: 1;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.3);
  top: 0;
  left: 0;
`;

export const ContainerCard = styled.div`
  display: ${({ $enabled }) => ($enabled ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
`;

export const InputContainer = styled.div`
  padding: 12px 16px;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  background: #fff;
  width: 90%;
  text-align: center;
  z-index: 2;
  font-family: Roboto;
  font-size: 18px;
  align-items: center;
`;

export const InputText = styled.input`
  padding: 8px 12px;
  font-family: Roboto;
  font-size: 18px;
  background-color: #f0f0f0dc;
  width: 100%;
  margin: 12px 0;
`;

export const ButtonSearch = styled.button`
  padding: 5px 10px;
  color: #FFF;
  text-align: center;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  border-radius: 5px;
  background: #6F97AB;
  cursor: pointer;
`;

export const ErrorMessage = styled.p`
  color: red;
  font-weight: 300;
  font-size: 12px;
  margin: 4px 0px;
`;
