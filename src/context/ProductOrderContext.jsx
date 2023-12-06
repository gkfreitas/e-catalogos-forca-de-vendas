/* eslint-disable react/jsx-no-constructed-context-values */
import { createContext, useState } from 'react';

const ProductOrderContext = createContext();

function ProductOrderProvider({ children }) {
  const [currentProductOrder, setCurrentProductOrder] = useState(
    localStorage.getItem('currentProductOrder') || {},
  );

  return (
    <ProductOrderContext.Provider
      value={ {
        currentProductOrder,
        setCurrentProductOrder,
      } }
    >
      {children}
    </ProductOrderContext.Provider>
  );
}

export { ProductOrderContext, ProductOrderProvider };
