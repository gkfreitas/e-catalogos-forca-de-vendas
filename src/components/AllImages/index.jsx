import { useContext, useEffect, useState } from 'react';
import { ProductContext } from '../../context/ProductContext';
import { ProductToolsContext } from '../../context/ProductToolsContenxt';
import { AllImagesContainer, HeaderImage, Image, ImageContainer } from './styles';

export default function AllImages() {
  const {
    orderProducts,
    setCurrentProductIndex,
    currentProduct } = useContext(ProductContext);
  const { setSeeAll } = useContext(ProductToolsContext);
  const { category_name: category } = currentProduct;
  const [filteredProducts, setFilteredProducts] = useState([]);

  const goToProduct = ({ target: { src } }) => {
    const foundedProduct = orderProducts
      .find((product) => product.images[0].image === src);
    const indexFoundedProduct = orderProducts.indexOf(foundedProduct);
    setCurrentProductIndex(indexFoundedProduct);
    setSeeAll(false);
  };

  useEffect(() => {
    const products = orderProducts
      .filter((product) => product.category_name === category);
    setFilteredProducts(products);
  }, [category, orderProducts]);

  const images = filteredProducts.map((product) => product.images[0].image);
  const prices = filteredProducts.map((product) => product.price);

  return (
    <AllImagesContainer>
      {images.map(((image, i) => (
        <ImageContainer key={ image }>
          <HeaderImage>
            R$
            {' '}
            {prices[i].toFixed(2)}
          </HeaderImage>
          <Image src={ image } onClick={ goToProduct } />
        </ImageContainer>
      )))}
    </AllImagesContainer>
  );
}
