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
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  overflow: hidden;
  transition: all 0.3s;
  height: ${({ $enabled }) => ($enabled ? '100vh' : '0vh')};
`;

export const Card = styled.section`

  width: 90%;
  height: 80%;
  z-index: 2;
  background: #fff;
  border-radius: 5px;
  position: relative;
`;

export const CardHeader = styled.div`
  padding: 8px 0;
  width: 100%;
  background: #1CBFD8;
  text-align: center;
  color: #FFF;
  text-align: center;
  font-family: Poppins;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
`;

export const InfoTag = styled.p`
  color: #000;
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  padding: 8px 12px;
`;

export const InfoContent = styled.span`
  color: #000;
  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;

`;

export const CloseIcon = styled.div`
  position: absolute;
  right: 2px;
  top: 2px;
  cursor: pointer;
`;
