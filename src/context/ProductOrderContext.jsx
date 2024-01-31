import { createContext, useEffect, useMemo, useState } from 'react';

const ProductOrderContext = createContext();

const emptyOrder = {
  clientName: '',
  clientCNPJ: '',
  clientFantasyName: '',
  orderNumber: '',
  orderDate: '',
  deadline: '',
  shippment: '',
  hour: '',
  productsCart: [],
  paymentCondition: {
    method: '',
    installments: 0,
    discount: 0,
  },
  installmentsValue: 0,
  totalValue: 0,
};

function ProductOrderProvider({ children }) {
  const [currentOrder, setCurrentOrder] = useState(JSON.parse(localStorage
    .getItem('currentOrder')) || emptyOrder);

  const [currentProductOrder, setCurrentProductOrder] = useState(
    JSON.parse(localStorage.getItem('currentProductOrder')) || {},
  );

  const [orders, setOrders] = useState(JSON.parse(localStorage
    .getItem('orders')) || []);
  const [selectedOrders, setSelectedOrders] = useState([]);

  useEffect(() => {
    try {
      localStorage.setItem('orders', JSON.stringify(orders));
    } catch (error) {
      console.error('Erro ao salvar no localStorage', error);
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('currentOrder', JSON.stringify(currentOrder));
    } catch (error) {
      console.error('Erro ao salvar no localStorage', error);
    }
  }, [currentOrder]);

  useEffect(() => {
    try {
      localStorage.setItem('currentProductOrder', JSON.stringify(currentProductOrder));
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

  useEffect(() => {
    try {
      localStorage.setItem('selectedOrders', JSON.stringify(selectedOrders));
    } catch (error) {
      console.error('Erro ao salvar no localStorage', error);
    }
  }, [selectedOrders]);

  const contextValue = useMemo(() => ({
    currentProductOrder,
    setCurrentProductOrder,
    currentOrder,
    setCurrentOrder,
    emptyOrder,
    orders,
    setOrders,
    selectedOrders,
    setSelectedOrders,
  }), [currentProductOrder, currentOrder, orders, selectedOrders]);

  return (
    <ProductOrderContext.Provider
      value={ contextValue }
    >
      {children}
    </ProductOrderContext.Provider>
  );
}

export { ProductOrderContext, ProductOrderProvider };
