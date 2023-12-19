import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  z-index: 1;
  top: 0;
  inset: 0;
  width: 100%;
  height: 100svh;
`;

export const ImageContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99999;
  margin: 5svh auto;
  height: 90%;
  max-width: 98%;
`;

export const Image = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

export const BackgroundFocus = styled.div`
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100svh;
  background-color: rgba(0, 0, 0, 0.5);
`;
