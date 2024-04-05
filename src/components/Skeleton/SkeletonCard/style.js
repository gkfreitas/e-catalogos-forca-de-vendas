import styled, { keyframes } from 'styled-components';

const blink = keyframes`
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
  100% { 
    opacity: 1;
  }
`;

export const SkeletonContainer = styled.div`
  width: ${({ $width }) => $width};
  height: ${({ $height }) => $height};
  border-radius: 8px;
  background: #dcebf2;
  opacity: 0.7;
  box-shadow: 0px 6px 8px -4px #809CAA;
  animation: ${blink} 1.3s ease-in-out infinite;
`;
