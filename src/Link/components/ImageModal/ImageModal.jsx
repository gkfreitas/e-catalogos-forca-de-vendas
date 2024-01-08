import { useState } from 'react';
import { BackgroundFocus, Container, Image, ImageContainer } from './styles';

export default function ImageModal({ src, disable }) {
  const [isZoomed, setIsZoomed] = useState(false);

  const handleImageClick = () => {
    setIsZoomed(!isZoomed);
  };

  const imageStyle = isZoomed ? {
    transform: 'scale(1.4)', // Amplia a imagem em 2 vezes
    cursor: 'zoom-out',
    transition: 'transform 0.3s ease', // Efeito suave de transição
  } : {
    cursor: 'zoom-in',
    transition: 'transform 0.3s ease',
  };

  return (
    <Container>
      <ImageContainer onClick={ handleImageClick }>
        <Image
          src={ src }
          alt="Imagem do produto"
          style={ imageStyle }
        />
      </ImageContainer>
      <BackgroundFocus onClick={ disable } />
    </Container>
  );
}
