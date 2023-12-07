import { useEffect, useState } from 'react';
import { ImageStyle } from './styles';

export default function ImageRender({ imageSrc }) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const randomImageUrl = 'https://camo.githubusercontent.com/b7b7dca15c743879821e7cfc14e8034ecee3588e221de0a6f436423e304d95f5/68747470733a2f2f7a7562652e696f2f66696c65732f706f722d756d612d626f612d63617573612f33363664616462316461323032353338616531333332396261333464393030362d696d6167652e706e67';

  useEffect(() => {
    const imageRender = () => {
      const img = new Image();
      img.src = imageSrc?.image;

      img.onload = () => {
        setImageLoaded(true);
      };
    };
    imageRender();
  }, [imageSrc, imageLoaded]);
  return (
    <ImageStyle src={ imageLoaded ? imageSrc.image : randomImageUrl } alt="Foto" />
  );
}
