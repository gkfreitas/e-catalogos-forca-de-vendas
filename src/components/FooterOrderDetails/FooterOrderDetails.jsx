import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import editIcon from '../../assets/icons/edit.svg';
import emailIcon from '../../assets/icons/email.svg';
import exportIcon from '../../assets/icons/export.svg';
import { ProductOrderContext } from '../../context/ProductOrderContext';
import mockProducts from '../../mocks/mockProducts';
import EmailModal from '../EmailModal/EmailModal';
import {
  ButtonFunction,
  Footer,
  Icon,
} from './styles';

export default function FooterOrderDetails({ currentOrder }) {
  const navigate = useNavigate();
  const { setCurrentOrder, setCurrentProductOrder } = useContext(ProductOrderContext);
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
    navigate('/order');
  };

  const handleExport = () => {
    const exportedOrders = JSON.parse(localStorage.getItem('exportedOrders')) || [];
    const orderAlreadyExported = exportedOrders
      .find(({ orderNumber }) => orderNumber === currentOrder.orderNumber);

    if (orderAlreadyExported) {
      return toast.error('Esse pedido já foi exportado!', { position: 'top-center' });
    }
    const newExportedOrders = [...exportedOrders, currentOrder];
    localStorage.setItem('exportedOrders', JSON.stringify(newExportedOrders));

    toast.success('Pedido exportado com sucesso!', {
      position: 'top-center',
      autoClose: 1400,
    });
    setTimeout(() => navigate('/orders/list'), 1600);
  };

  return (
    <>
      <Footer>
        <ButtonFunction onClick={ handleEdit }>
          <Icon
            src={ editIcon }
          />
        </ButtonFunction>
        <Icon src={ emailIcon } onClick={ () => setModalExport(true) } />

        <ButtonFunction onClick={ handleExport }>
          <Icon src={ exportIcon } />
        </ButtonFunction>
      </Footer>
      { modalExport && <EmailModal disable={ () => setModalExport(false) } /> }
    </>
  );
}
