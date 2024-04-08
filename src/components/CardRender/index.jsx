// Componente de carregamento provisório do Skeleton até integrar com API
// Antes de excluir passar modificações desse arquivo para o AllProductsAvailable

import { useEffect, useState } from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import { SkeletonGrid } from '../Skeleton/SkeletonGrid';
import {
  AllImagesContainer,
  ContainerSkeleton,
  HeaderImage,
  HeaderImageText,
  ImageContainer,
  ImageRenderContainer,
  SecondaryText,
  ImageStyle,
} from './style';

export function CardRender({
  filteredProducts,
  selectedProducts,
  setSelectedProducts,
  imagesPerview }) {
  const [loadingImage, setLoadingImage] = useState(true);

  const randomImageUrl = 'https://camo.githubusercontent.com/b7b7dca15c743879821e7cfc14e8034ecee3588e221de0a6f436423e304d95f5/68747470733a2f2f7a7562652e696f2f66696c65732f706f722d756d612d626f612d63617573612f33363664616462316461323032353338616531333332396261333464393030362d696d6167652e706e67';

  const localStorageOrderProducts = JSON
    .parse(localStorage.getItem('currentProductOrder')) || [];

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

  useEffect(() => {
    localStorage.setItem('selectedProducts', JSON.stringify(selectedProducts));
  }, [selectedProducts]);

  useEffect(() => {
    const imageRender = () => {
      filteredProducts.forEach((product) => {
        const img = new Image();
        img.src = product.images[0].image;

        img.onerror = () => {
          setLoadingImage(false);
        };

        img.onload = () => {
          setLoadingImage(false);
        };
      });
    };
    imageRender();
  }, [filteredProducts, loadingImage]);

  return (
    loadingImage
      ? (
        <ContainerSkeleton>
          <SkeletonGrid
            height="240px"
            width="100%"
            quantityCard={ 12 }
            imagesPerview={ imagesPerview }
          />
        </ContainerSkeleton>
      )
      : (
        <AllImagesContainer
          $imagesPerview={ imagesPerview }
        >
          {filteredProducts.map(((product, i) => (
            <ImageContainer
              imagesPerview={ imagesPerview }
              onClick={ () => selectProduct(product) }
              key={ i }
            >
              <HeaderImage
                $imagesPerview={ imagesPerview }
                $selected={ selectedProducts
                  .some((productSelected) => productSelected.id === product.id) }
              >
                <HeaderImageText
                  $imagesPerview={ imagesPerview }
                  $selected={ selectedProducts
                    .some((productSelected) => productSelected.id === product.id) }
                >
                  <span>
                    <SecondaryText $imagesPerview={ imagesPerview }>
                      R$
                    </SecondaryText>
                    {' '}
                    {filteredProducts[i]?.price.toFixed(2)}
                  </span>
                  <span>
                    <SecondaryText $imagesPerview={ imagesPerview }>
                      REF:
                    </SecondaryText>
                    {' '}
                    {product.reference}
                  </span>
                </HeaderImageText>
                <FaCheckCircle
                  size={ 15 }
                  fill="white"
                  style={ {
                    display: localStorageOrderProducts[product?.id]
                      ? 'block' : 'none',
                  } }
                />

              </HeaderImage>
              <ImageRenderContainer>
                <ImageStyle
                  imagesPerview={ imagesPerview }
                  src={ product.images[0].image }
                  alt="Foto"
                  onError={ (e) => handleErrorImage(e, product.images) }
                />
              </ImageRenderContainer>
            </ImageContainer>
          )))}
        </AllImagesContainer>
      )
  );
}
