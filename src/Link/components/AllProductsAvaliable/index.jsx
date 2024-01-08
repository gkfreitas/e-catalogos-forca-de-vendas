import { FaCheckCircle } from 'react-icons/fa';
import ImageRender from '../ImageRender/index';
import {
  AllImagesContainer,
  HeaderImage,
  HeaderImageText,
  ImageContainer,
  ImageRenderContainer,
  SecundaryText,
} from './style';

export default function AllProductsAvaliable({ imagesPerView, filteredProducts,
  selectedProducts, setSelectedProducts }) {
  const randomImageUrl = 'https://camo.githubusercontent.com/b7b7dca15c743879821e7cfc14e8034ecee3588e221de0a6f436423e304d95f5/68747470733a2f2f7a7562652e696f2f66696c65732f706f722d756d612d626f612d63617573612f33363664616462316461323032353338616531333332396261333464393030362d696d6167652e706e67';

  const localStorageOrderProducts = JSON
    .parse(localStorage.getItem('currentProductLinkOrder')) || [];

  const selectProduct = (image) => {
    if (localStorageOrderProducts[image.id]) return;
    if (selectedProducts.some((productSelected) => productSelected.id === image.id)) {
      const newSelectedProducts = selectedProducts
        .filter((product) => product.id !== image.id);
      setSelectedProducts(newSelectedProducts);
      return;
    }
    const newSelectedProducts = [...selectedProducts, image];
    setSelectedProducts(newSelectedProducts);
  };

  const handleErrorImage = (e, images) => {
    const currentImageIndex = images.findIndex((img) => img.image === e.target.src);
    const nextImageIndex = (currentImageIndex + 1);
    e.target.src = images[nextImageIndex]?.image || randomImageUrl;
  };

  return (
    <AllImagesContainer
      $imagesperview={ imagesPerView }
    >
      {filteredProducts.map(((product, i) => (
        <ImageContainer
          onClick={ () => selectProduct(product) }
          key={ i }
        >
          <HeaderImage
            $selected={ selectedProducts
              .some((productSelected) => productSelected.id === product.id) }
          >

            <HeaderImageText
              $selected={ selectedProducts
                .some((productSelected) => productSelected.id === product.id) }
            >
              <SecundaryText>R$</SecundaryText>
              {' '}
              {filteredProducts[i]?.price.toFixed(2)}
            </HeaderImageText>
            <FaCheckCircle
              size={ 20 }
              fill="white"
              style={ {
                display: localStorageOrderProducts[product?.id]
                  ? 'block' : 'none',
              } }
            />

          </HeaderImage>
          <ImageRenderContainer>
            <ImageRender
              imageSrc={ product.images[0] }
              onError={ (e) => handleErrorImage(e, product.images) }
            />
          </ImageRenderContainer>
          {/* <Image
            src={ product.images[0]?.image || randomImageUrl }
            onError={ (e) => handleErrorImage(e, product.images) }
          /> */}
        </ImageContainer>
      )))}
    </AllImagesContainer>
  );
}
