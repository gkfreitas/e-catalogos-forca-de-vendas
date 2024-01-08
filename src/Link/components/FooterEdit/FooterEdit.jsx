import { useNavigate } from 'react-router-dom';
import { Footer } from './styles';

export default function FooterEdit() {
  const navigate = useNavigate();

  const handleFinish = () => {
    const editedOrder = JSON.parse(localStorage.getItem('currentOrder'));
    const { orderNumber } = editedOrder;
    const orders = JSON.parse(localStorage.getItem('orders'));
    const orderIndex = orders.findIndex((order) => order.orderNumber === orderNumber);
    const negativeIndex = -1;
    if (orderIndex !== negativeIndex) {
      orders.splice(orderIndex, 1, editedOrder); // Isso altera o array 'orders' diretamente
    }
    localStorage.setItem('orders', JSON.stringify(orders)); // Salva o array 'orders' modificado
    localStorage.removeItem('currentOrder');
    localStorage.removeItem('currentProductOrder');
    localStorage.removeItem('selectedProducts');
    localStorage.removeItem('editMode');
    navigate(`/order/${orderNumber}`);
  };

  const handleCancel = () => {
    const editedOrder = JSON.parse(localStorage.getItem('currentOrder'));
    const { orderNumber } = editedOrder;
    localStorage.removeItem('currentOrder');
    localStorage.removeItem('currentProductOrder');
    localStorage.removeItem('selectedProducts');
    localStorage.removeItem('editMode');
    navigate(`/order/${orderNumber}`);
  };

  return (
    <Footer>
      <button onClick={ handleFinish }>Finalizar edição</button>
      <button onClick={ handleCancel }>Cancelar edição</button>
    </Footer>
  );
}
