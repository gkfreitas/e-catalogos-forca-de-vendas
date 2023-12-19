import styled from 'styled-components';

export const BackgroundFocus = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(0,0,0,.5);
`;

export const ContainerModal = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
`;

export const Modal = styled.div`
  margin-top: 100px;
  height: 200px;
  width: 300px;
  background: #F9F8F8;
  z-index: 999;
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  width: 100%;
  margin-top: 20px;
`;

export const ButtonConfirm = styled.button`
  display: flex;
  border: 1px solid green;
  border-radius: 3px;
  cursor: pointer;
`;

export const ButtonRecuse = styled.button`
  display: flex;
  border: 1px solid red;
  border-radius: 3px;
  cursor: pointer;
`;
