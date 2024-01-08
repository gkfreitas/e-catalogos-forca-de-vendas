import { createContext, useEffect, useMemo, useState } from 'react';
import mockProducts from '../../mocks/mockProducts';

const LinkContext = createContext();

function LinkProvider({ children }) {
  const [filteredProducts, setFilteredProducts] = useState(mockProducts
    .filter((product) => product.images.length > 0));

  const [selectedProducts, setSelectedProducts] = useState(
    JSON.parse(localStorage.getItem('selectedProductsLink')) || [],
  );

  useEffect(() => {
    localStorage.setItem('selectedProductsLink', JSON
      .stringify(selectedProducts));
  }, [selectedProducts]);

  const contextValue = useMemo(() => ({
    filteredProducts,
    setFilteredProducts,
    selectedProducts,
    setSelectedProducts,
  }), [filteredProducts, selectedProducts]);

  return (
    <LinkContext.Provider value={ contextValue }>
      {children}
    </LinkContext.Provider>
  );
}

export { LinkContext, LinkProvider };
