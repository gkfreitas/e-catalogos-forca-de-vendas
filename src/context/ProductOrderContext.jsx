/* eslint-disable react/jsx-no-constructed-context-values */
import { createContext, useEffect, useState } from 'react';

const ProductOrderContext = createContext();

function ProductOrderProvider({ children }) {
  const emptyOrder = {
    clientName: '',
    clientCNPJ: '',
    clientFantasyName: '',
    orderNumber: '',
    orderDate: '',
    deadline: '',
    shippment: '',
    productsCart: [],
    paymentCondition: {
      method: '',
      installments: '',
    },
    installmentsValue: '',
    totalValue: '',
  };

  const [currentOrder, setCurrentOrder] = useState(JSON.parse(localStorage
    .getItem('currentOrder')) || emptyOrder);

  const [currentProductOrder, setCurrentProductOrder] = useState(
    JSON.parse(localStorage.getItem('currentProductOrder')) || {},
  );

  useEffect(() => {
    localStorage.setItem('currentOrder', JSON.stringify(currentOrder));
  }, [currentOrder]);

  return (
    <ProductOrderContext.Provider
      value={ {
        currentProductOrder,
        setCurrentProductOrder,
        currentOrder,
        setCurrentOrder,
      } }
    >
      {children}
    </ProductOrderContext.Provider>
  );
}

export { ProductOrderContext, ProductOrderProvider };
