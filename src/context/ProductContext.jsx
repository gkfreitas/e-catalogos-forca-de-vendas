/* eslint-disable react/jsx-no-constructed-context-values */
import { createContext, useEffect, useState } from 'react';

const ProductContext = createContext();

function ProductProvider({ children }) {
  const [orderProducts, setOrderProducts] = useState([]);
  const [currentProduct, setCurrentProduct] = useState({ images: [], sizes: [] });
  const [currentProductIndex, setCurrentProductIndex] = useState(0);

  const selectNextProduct = () => {
    const nextIndex = currentProductIndex + 1;
    if (nextIndex < orderProducts.length) {
      setCurrentProduct(orderProducts[nextIndex]);
      setCurrentProductIndex(nextIndex);
      return;
    }
    setCurrentProduct(orderProducts[0]);
    setCurrentProductIndex(0);
  };

  const selectPreviousProduct = () => {
    const previousIndex = currentProductIndex - 1;
    if (previousIndex >= 0) {
      setCurrentProduct(orderProducts[previousIndex]);
      setCurrentProductIndex(previousIndex);
      return;
    }
    setCurrentProduct(orderProducts[orderProducts.length - 1]);
    setCurrentProductIndex(orderProducts.length - 1);
  };

  useEffect(() => {
    const imageElement = document.getElementById(`image-${currentProductIndex}`);
    if (imageElement) {
      imageElement.scrollIntoView({ behavior: 'smooth' });
      setCurrentProduct(orderProducts[currentProductIndex]);
    }
  }, [currentProductIndex, orderProducts]);

  return (
    <ProductContext.Provider
      value={ {
        currentProduct,
        setCurrentProduct,
        orderProducts,
        currentProductIndex,
        setCurrentProductIndex,
        selectNextProduct,
        selectPreviousProduct,
        setOrderProducts,
      } }
    >
      {children}
    </ProductContext.Provider>
  );
}
export { ProductContext, ProductProvider };
