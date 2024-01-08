import styled from 'styled-components';

export const ModalContainer = styled.div`
  max-height: 600px;
  position: absolute;
  max-width: 90%;
  top: 17svh;
  background-color: #fff;
  border: 3px solid #809caa;
  border-radius: 5px;
  padding: 10px 4px;
  z-index: 2;
  display: flex;
  flex-direction: column;
`;

export const BackgroundFocus = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
  top: 0;
  left: 0;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 2;
`;

export const CloseIcon = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: flex-end;
`;
