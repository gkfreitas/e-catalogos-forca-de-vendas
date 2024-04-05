/* eslint-disable camelcase */
import { useContext, useEffect, useState } from 'react';
import { FaCircleChevronLeft, FaCircleChevronRight } from 'react-icons/fa6';
import { ProductContext } from '../../context/ProductContext';
import Header from './index';
import { CategoryContainer, ContainerArrows } from './styles';

export default function HeaderCategory({ routeBack, routeNext }) {
  const {
    orderProducts,
    currentProduct,
    setCurrentProductIndex } = useContext(ProductContext);
  const category = currentProduct?.category_name;
  const [productsCategoryQuantity, setProductsCategoryQuantity] = useState(0);

  useEffect(() => {
    const products = orderProducts
      .filter((product) => product.category_name === category);
    setProductsCategoryQuantity(products.length);
  }, [category, orderProducts]);

  const categories = Array.from(new Set(orderProducts
    .map((product) => product.category_name)));

  const findFirstIndexOfCategory = (categoryFind) => {
    const foundedProductIndex = orderProducts.findIndex((product) => (
      product.category_name === categoryFind));
    return foundedProductIndex;
  };

  const handleNextCategory = () => {
    const indexCurrentCategory = categories.indexOf(category);
    if (indexCurrentCategory === categories.length - 1) {
      const previousCategory = categories[0];
      const firstIndex = findFirstIndexOfCategory(previousCategory);
      return setCurrentProductIndex(firstIndex);
    }
    const nextCategory = categories[indexCurrentCategory + 1];
    const firstIndex = findFirstIndexOfCategory(nextCategory);
    setCurrentProductIndex(firstIndex);
  };

  const handlePreviousCategory = () => {
    const indexCurrentCategory = categories.indexOf(category);

    if (indexCurrentCategory === 0) {
      const previousCategory = categories[categories.length - 1];
      const firstIndex = findFirstIndexOfCategory(previousCategory);
      return setCurrentProductIndex(firstIndex);
    }
    const previousCategory = categories[indexCurrentCategory - 1];

    const firstIndex = findFirstIndexOfCategory(previousCategory);

    setCurrentProductIndex(firstIndex);
  };

  return (
    <Header routeBack={ routeBack } routeNext={ routeNext } routeFunction>
      <ContainerArrows>
        <FaCircleChevronLeft
          style={ { marginRight: '4px' } }
          size={ 20 }
          fill="#FFf"
          cursor="pointer"
          onClick={ handlePreviousCategory }
        />
        <CategoryContainer>

          (
          {productsCategoryQuantity}
          )
          {' '}
          {category?.replace(/├â/g, 'Ã')}

        </CategoryContainer>
        <FaCircleChevronRight
          style={ { marginLeft: '4px' } }
          size={ 20 }
          fill="#FFF"
          cursor="pointer"
          onClick={ handleNextCategory }
        />
      </ContainerArrows>
    </Header>
  );
}
