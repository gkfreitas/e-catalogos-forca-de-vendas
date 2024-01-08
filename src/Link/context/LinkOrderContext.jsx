import { createContext, useEffect, useMemo, useState } from 'react';

const LinkOrderContext = createContext();

const emptyOrder = {
  clientName: '',
  clientCNPJ: '',
  orderNumber: '',
  orderDate: '',
  productsCart: [],
  paymentCondition: {
    method: '',
    installments: 0,
  },
  installmentsValue: 0,
  totalValue: 0,
};

function LinkOrderProvider({ children }) {
  const [currentOrder, setCurrentOrder] = useState(JSON.parse(localStorage
    .getItem('currentLinkOrder')) || emptyOrder);

  const [currentProductOrder, setCurrentProductOrder] = useState(
    JSON.parse(localStorage.getItem('currentProductLinkOrder')) || {},
  );

  useEffect(() => {
    try {
      localStorage.setItem('currentLinkOrder', JSON.stringify(currentOrder));
    } catch (error) {
      console.error('Erro ao salvar no localStorage', error);
    }
  }, [currentOrder]);

  useEffect(() => {
    try {
      localStorage.setItem(
        'currentProductLinkOrder',
        JSON.stringify(currentProductOrder),
      );
    } catch (error) {
      console.error('Erro ao salvar no localStorage', error);
    }
    const productsCardIds = Object.keys(currentProductOrder);
    setCurrentOrder((prevState) => ({
      ...prevState,
      productsCart: productsCardIds.map((id) => {
        return { id, ...currentProductOrder[id] };
      }),
      totalValue: Object.values(currentProductOrder)
        .reduce((acc, { total }) => acc + total, 0),
    }));
  }, [currentProductOrder]);

  const contextValue = useMemo(() => ({
    currentProductOrder,
    setCurrentProductOrder,
    currentOrder,
    setCurrentOrder,
    emptyOrder,
  }), [currentProductOrder, currentOrder]);

  return (
    <LinkOrderContext.Provider
      value={ contextValue }
    >
      {children}
    </LinkOrderContext.Provider>
  );
}

export { LinkOrderContext, LinkOrderProvider };
