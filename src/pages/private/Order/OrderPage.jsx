import { useContext } from 'react';
import Order from '../../../components/Order/Order';
import { ProductOrderContext } from '../../../context/ProductOrderContext';

export default function OrderPage() {
  const {
    currentOrder,
  } = useContext(ProductOrderContext);

  return (
    <Order currentOrder={ currentOrder } />
  );
}
