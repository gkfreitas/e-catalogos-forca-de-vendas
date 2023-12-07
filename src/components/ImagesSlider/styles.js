import { styled } from 'styled-components';

export const ContainerImage = styled.div`
  flex: 0 0 100%; /* Garante que cada SlideItem ocupe 100% da largura do Slider */
  box-sizing: border-box;
`;

export const ImageStyle = styled.img`
  object-fit: contain;
  width: 100%;
  height: 100%;
`;

export const ArrowLeft = styled.img`
  position: absolute;
  bottom: 40px;
  left: 20px;
  cursor: pointer;
`;

export const ArrowRight = styled.img`
  position: absolute;
  bottom: 40px;
  right: 20px;
  cursor: pointer;
`;

export const Separator = styled.div`
  width: calc(100% - 40px);
  margin: 0 auto;
  height: 1px;
  background: #CCD0CF;
`;

export const Slider = styled.div`
  position: relative;
  display: flex;
  overflow: hidden;
  width: 100%;
`;

export const SliderContainer = styled.div`
  display: flex;
  transition: transform 0.5s ease; 
  flex-grow: 1;
  position: relative;
  border-bottom: 3px solid #809CAA;
  height: 1%;
`;
