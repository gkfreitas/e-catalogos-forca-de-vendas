import { useContext, useRef } from 'react';
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
  // const [imageModal, setImageModal] = useState(false);
  // const [modalSrc, setModalSrc] = useState('');

  // const handleImageModal = (src) => {
  //   setImageModal(true);
  //   setModalSrc(src);
  // };
  const {
    selectNextProduct,
    selectPreviousProduct,
    orderProducts,
    currentProductIndex,
    setCurrentProductIndex,
  } = useContext(ProductContext);
  const sliderRef = useRef(null);

  const randomImageUrl = 'https://camo.githubusercontent.com/b7b7dca15c743879821e7cfc14e8034ecee3588e221de0a6f436423e304d95f5/68747470733a2f2f7a7562652e696f2f66696c65732f706f722d756d612d626f612d63617573612f33363664616462316461323032353338616531333332396261333464393030362d696d6167652e706e67';
  const allImages = orderProducts.map(({ images }) => images);
  const imagesOfSlider = document.querySelectorAll('.image');
  let startMouseX = 0;
  let startTouchX = 0;

  imagesOfSlider.forEach((image) => {
    image.addEventListener('dragstart', (e) => e.preventDefault());
  });

  const handleErrorImage = (e, images) => {
    const currentImageIndex = images.findIndex((img) => img.image === e.target.src);
    const nextImageIndex = (currentImageIndex + 1) % images.length;
    e.target.src = images[nextImageIndex]?.image || randomImageUrl;
  };

  const handleChangeSlider = (currentX, actionType) => {
    const slipSize = 60;
    const startX = actionType === 'Mouse' ? startMouseX : startTouchX;
    let newIndex = 0;

    if (currentX < startX - slipSize) {
      newIndex = (currentProductIndex + 1) % orderProducts.length;
      setCurrentProductIndex(newIndex);
      if (actionType === 'Mouse') {
        startMouseX = null;
        return;
      }
      startTouchX = null;
      return;
    }

    if (currentX > startX + slipSize) {
      newIndex = (currentProductIndex - 1 + orderProducts.length) % orderProducts.length;
      setCurrentProductIndex(newIndex);
      if (actionType === 'Mouse') {
        startMouseX = null;
        return;
      }
      startTouchX = null;
    }
  };

  const handleMoveTouch = (e) => {
    if (!startTouchX) return;
    const currentX = e.touches[0].clientX;

    handleChangeSlider(currentX, 'Touch');
  };

  const handleMouseMove = (e) => {
    if (!startMouseX) return;
    const currentX = e.clientX;

    handleChangeSlider(currentX, 'Mouse');
  };

  const handleTouchEnd = () => {
    startTouchX = null;
    sliderRef.current.removeEventListener('touchmove', handleMoveTouch);
  };

  const handleMouseUp = () => {
    startMouseX = null;
    sliderRef.current.removeEventListener('mousemove', handleMouseMove);
  };

  const handleTouchStart = (e) => {
    startTouchX = e.touches[0].clientX;

    sliderRef.current.addEventListener('touchmove', handleMoveTouch);
    sliderRef.current.addEventListener('touchend', handleTouchEnd);
  };

  const handleMouseDown = (e) => {
    startMouseX = e.clientX;

    sliderRef.current.addEventListener('mousemove', handleMouseMove);
    sliderRef.current.addEventListener('mouseup', handleMouseUp);
  };

  return (
    <>
      <SliderContainer
        ref={ sliderRef }
        onTouchStart={ handleTouchStart }
        onMouseDown={ handleMouseDown }
      >
        <Slider>
          {allImages.map((images, i) => (
            <ContainerImage key={ `${images}${i}` } id={ `image-${i}` }>
              <ImageStyle
                className="image"
                src={ previewImage || images[0].image }
                onError={ (e) => handleErrorImage(e, images) }
              />
            </ContainerImage>
          ))}

        </Slider>
        <ArrowLeft src={ arrowLeft } onClick={ selectPreviousProduct } />
        <ArrowRight src={ arrowRight } onClick={ selectNextProduct } />
      </SliderContainer>
      {/* <ImageModal src={ modalSrc } disable={ () => setImageModal(false) } /> */}
    </>
  );
}
