/* eslint-disable react/jsx-no-constructed-context-values */
import { createContext, useState } from 'react';

const ProductToolsContext = createContext();

function ProductToolsProvider({ children }) {
  const [infoCard, setInfoCard] = useState(false);
  const [searchCard, setSearchCard] = useState(false);
  const [errorRef, setErrorRef] = useState(false);
  const [seeAll, setSeeAll] = useState(false);

  return (
    <ProductToolsContext.Provider
      value={ {
        infoCard,
        setInfoCard,
        searchCard,
        setSearchCard,
        errorRef,
        setErrorRef,
        seeAll,
        setSeeAll,
      } }
    >
      {children}
    </ProductToolsContext.Provider>
  );
}

export { ProductToolsContext, ProductToolsProvider };
