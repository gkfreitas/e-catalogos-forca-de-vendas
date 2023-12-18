import styled from 'styled-components';

export const BackgroundFocus = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 0;
  background-color: rgba(0,0,0,0.5);
`;

export const ModalContainer = styled.div`
  z-index: 1;
  width: 90%;
  max-width: calc(768px * 0.5);
  margin: 10svh auto;
  position: relative;
`;

export const ModalHeader = styled.div`
  position: relative;
  padding: 8px 20px;
  border-radius: 3px 3px 0px 0px;
  background: #809CAA;

`;

export const ModalHeaderText = styled.h1`
  width: 60%;
  text-align: center;
  color: #FFF;
  margin: auto;
  font-family: Roboto;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  padding: 8px 0px;
`;

export const ModalContent = styled.div`
  z-index: 1;
  background: #fff;
  padding: ${({ $padding }) => ($padding || '30')} 0px;
  display: flex;
  gap: 0px;
  align-items: ${({ $alignItems }) => $alignItems || 'center'};
  flex-direction: column;
  border-radius: 0px 0px 3px 3px;
  height: ${({ $height }) => $height || '60svh'};
`;

export const CloseIcon = styled.div`
  cursor: pointer;
  position: absolute;
  top: 4px;
  right: 4px;
`;

export const RelativeContainer = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 0;
`;
