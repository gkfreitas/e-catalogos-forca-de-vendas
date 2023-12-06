import { useContext } from 'react';
import arrowLeft from '../../assets/icons/arrowLeft.svg';
import arrowRight from '../../assets/icons/arrowRight.svg';
import { ProductContext } from '../../context/ProductContext';
import {
  ArrowLeft,
  ArrowRight,
  ContainerImage,
  ImageStyle,
  Slider,
  SliderContainer,
} from './styles';

export default function ImagesSlider({ previewImage }) {
  const {
    selectNextProduct,
    selectPreviousProduct,
    orderProducts,
  } = useContext(ProductContext);
  const randomImageUrl = 'https://camo.githubusercontent.com/b7b7dca15c743879821e7cfc14e8034ecee3588e221de0a6f436423e304d95f5/68747470733a2f2f7a7562652e696f2f66696c65732f706f722d756d612d626f612d63617573612f33363664616462316461323032353338616531333332396261333464393030362d696d6167652e706e67';
  const handleErrorImage = (e, images) => {
    const currentImageIndex = images.findIndex((img) => img.image === e.target.src);
    const nextImageIndex = (currentImageIndex + 1) % images.length;
    e.target.src = images[nextImageIndex]?.image || randomImageUrl;
  };

  const allImages = orderProducts.map((product) => product.images);

  return (
    <SliderContainer>
      <Slider>
        {allImages.map((images, i) => (
          <ContainerImage key={ `${images}${i}` } id={ `image-${i}` }>
            <ImageStyle
              src={ previewImage || images[0].image }
              onError={ (e) => handleErrorImage(e, images) }

            />
          </ContainerImage>
        ))}

      </Slider>
      <ArrowLeft src={ arrowLeft } onClick={ selectPreviousProduct } />
      <ArrowRight src={ arrowRight } onClick={ selectNextProduct } />
    </SliderContainer>
  );
}
