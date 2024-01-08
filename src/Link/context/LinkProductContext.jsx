import { createContext, useCallback, useEffect, useMemo, useState } from 'react';

const LinkProductContext = createContext();

function LinkProductProvider({ children }) {
  const [orderProducts, setOrderProducts] = useState([]);
  const [currentProduct, setCurrentProduct] = useState({ images: [], sizes: [] });
  const [currentProductIndex, setCurrentProductIndex] = useState(0);

  const changeProduct = useCallback((direction) => {
    let newIndex;
    if (direction === 'next') {
      newIndex = (currentProductIndex + 1) % orderProducts.length;
    } else {
      newIndex = (currentProductIndex - 1 + orderProducts.length) % orderProducts.length;
    }
    setCurrentProductIndex(newIndex);
  }, [currentProductIndex, orderProducts]);

  useEffect(() => {
    const imageElement = document.getElementById(`image-${currentProductIndex}`);
    if (imageElement) {
      imageElement.scrollIntoView({ behavior: 'smooth' });
    }
  }, [currentProductIndex, orderProducts]);

  useEffect(() => {
    setCurrentProduct(orderProducts[currentProductIndex]);
  }, [currentProductIndex, orderProducts]);

  const contextValue = useMemo(() => ({
    currentProduct,
    setCurrentProduct,
    orderProducts,
    currentProductIndex,
    setCurrentProductIndex,
    selectNextProduct: () => changeProduct('next'),
    selectPreviousProduct: () => changeProduct('previous'),
    setOrderProducts,
  }), [currentProduct, orderProducts, currentProductIndex, changeProduct]);

  return (
    <LinkProductContext.Provider value={ contextValue }>
      {children}
    </LinkProductContext.Provider>
  );
}

export { LinkProductContext, LinkProductProvider };
