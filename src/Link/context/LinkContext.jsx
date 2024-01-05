import { createContext, useMemo, useState } from 'react';
import mockProducts from '../../mocks/mockProducts';

const LinkContext = createContext();

function LinkProvider({ children }) {
  const [filteredProducts, setFilteredProducts] = useState(mockProducts
    .filter((product) => product.images.length > 0));

  const contextValue = useMemo(() => ({
    filteredProducts,
    setFilteredProducts,
  }), [filteredProducts, setFilteredProducts]);

  return (
    <LinkContext.Provider value={ contextValue }>
      {children}
    </LinkContext.Provider>
  );
}

export { LinkContext, LinkProvider };
