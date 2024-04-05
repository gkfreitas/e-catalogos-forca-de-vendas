import { useEffect, useState } from 'react';
import { ImageStyle } from './styles';
import { SkeletonCard } from '../Skeleton/SkeletonCard';

export default function ImageRender({ imageSrc, ...rest }) {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const imageRender = () => {
      const img = new Image();
      img.src = imageSrc?.image;

      img.onerror = () => {
        setImageLoaded(true);
      };

      img.onload = () => {
        setImageLoaded(true);
      };
    };
    imageRender();
  }, [imageSrc, imageLoaded]);

  return (
    !imageLoaded
      ? <SkeletonCard width="100%" />
      : (
        <ImageStyle
          { ...rest }
          src={ imageSrc.image }
          alt="Foto"
        />
      )
  );
}
