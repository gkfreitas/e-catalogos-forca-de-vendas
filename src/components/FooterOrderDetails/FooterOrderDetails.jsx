import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ConfirmModal from '../ConfirmModal/ConfirmModal';
import {
  DeleteButton,
  DuplicateButton,
  EditButton,
  ExportButton,
  Footer,
} from './styles';

export default function FooterOrderDetails({ orderNumber }) {
  const navigate = useNavigate();

  const [modalDelete, setModalDelete] = useState(false);
  const [modalDuplicate, setModalDuplicate] = useState(false);
  const handleDelete = () => {
    const orders = JSON.parse(localStorage.getItem('orders'));
    const newOrders = orders.filter((order) => order.orderNumber !== orderNumber);
    localStorage.setItem('orders', JSON.stringify(newOrders));
    navigate('/orders/list');
  };

  const handleDuplicate = () => {
    const bigNumber = 1000000;
    const orders = JSON.parse(localStorage.getItem('orders'));
    const order = orders.find((item) => item.orderNumber === orderNumber);
    const newOrder = {
      ...order,
      orderNumber: Math.floor(Math.random() * bigNumber),
    };
    localStorage.setItem('orders', JSON.stringify([...orders, newOrder]));
    navigate('/orders/list');
  };

  return (
    <>
      <Footer>
        <DeleteButton onClick={ () => setModalDelete(true) }>
          Deletar
        </DeleteButton>
        <EditButton>
          Editar
        </EditButton>
        <DuplicateButton onClick={ () => setModalDuplicate(true) }>
          Duplicar
        </DuplicateButton>
        <ExportButton>
          Exportar
        </ExportButton>
      </Footer>
      {
        modalDuplicate && (
          <ConfirmModal
            title="Duplicar"
            actionText="duplicar"
            action={ handleDuplicate }
            disable={ () => setModalDuplicate(false) }
          />
        )
      }
      {modalDelete && (
        <ConfirmModal
          title="Deletar"
          actionText="deletar"
          action={ handleDelete }
          disable={ () => setModalDelete(false) }
        />
      )}
    </>
  );
}
