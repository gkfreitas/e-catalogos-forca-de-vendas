import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { ProductOrderContext } from '../../context/ProductOrderContext';
import mockProducts from '../../mocks/mockProducts';
import ConfirmModal from '../ConfirmModal/ConfirmModal';
import EmailModal from '../EmailModal/EmailModal';
import {
  DeleteButton,
  DuplicateButton,
  EditButton,
  ExportButton,
  Footer,
} from './styles';

export default function FooterOrderDetails({ currentOrder }) {
  const { orderNumber } = currentOrder;
  const navigate = useNavigate();
  const { setCurrentOrder, setCurrentProductOrder } = useContext(ProductOrderContext);
  const [modalDelete, setModalDelete] = useState(false);
  const [modalDuplicate, setModalDuplicate] = useState(false);
  const [modalExport, setModalExport] = useState(false);

  const handleEdit = () => {
    setCurrentOrder(currentOrder);
    const { productsCart } = currentOrder;
    const productsCartIds = productsCart.map((product) => product.id);
    const productsSelected = mockProducts
      .filter((product) => productsCartIds.includes((product.id).toString()));
    const currentProductOrder = {};

    productsCart.forEach(({ id, ...rest }) => { currentProductOrder[id] = rest; });
    setCurrentProductOrder(currentProductOrder);
    localStorage.setItem('editMode', true);
    localStorage.setItem('selectedProducts', JSON.stringify(productsSelected));
    navigate('/avaliableProducts');
  };
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

  const handleSuccess = (message) => {
    toast.success(message);
  };

  return (
    <>
      <Footer>
        <DeleteButton onClick={ () => setModalDelete(true) }>
          Deletar
        </DeleteButton>
        <EditButton onClick={ handleEdit }>
          Editar
        </EditButton>
        <DuplicateButton onClick={ () => setModalDuplicate(true) }>
          Duplicar
        </DuplicateButton>
        <ExportButton onClick={ () => setModalExport(true) }>
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
      {
        modalExport && (
          <EmailModal
            handleSuccess={ handleSuccess }
            disable={ () => setModalExport(false) }
          />
        )
      }
      <ToastContainer />
    </>
  );
}
