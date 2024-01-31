import { useParams } from 'react-router-dom';
import Order from '../../../components/Order/Order';

export default function OrderDetails() {
  const { id } = useParams();
  const orders = JSON.parse(localStorage.getItem('orders')) || [];
  const currentOrder = orders.find((order) => order.orderNumber === Number(id));

  return (
    <Order
      currentOrder={ currentOrder }
      detail
    />
  );
}
