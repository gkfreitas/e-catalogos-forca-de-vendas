import { useContext, useState } from 'react';
import { toast } from 'react-toastify';
import cartIcon from '../../../assets/icons/cart-link.svg';
import currencyIcon from '../../../assets/icons/currency.svg';
import editIcon from '../../../assets/icons/edit-link.svg';
import exportIcon from '../../../assets/icons/export-link.svg';
import { LinkOrderContext } from '../../context/LinkOrderContext';
import ModalMix from '../ModalMix/ModalMix';
import ObservationModal from '../ObservationModal/ObservationModal';
import PaymentModal from '../PaymentModal/PaymentModal';
import { FooterContainer, Icon } from './styles';

export default function FooterPurchase() {
  const [paymentModal, setPaymentModal] = useState(false);
  const [cartModal, setCartModal] = useState(false);
  const [observationModal, setObservationModal] = useState(false);
  const {
    currentProductOrder,
    currentOrder,
    setOrders,
    orders,
    setCurrentOrder,
    setCurrentProductOrder,
  } = useContext(LinkOrderContext);

  const exportOrder = () => {
    const {
      paymentCondition,
      productsCart,
      linkId,
      clientWhatsapp } = currentOrder;

    const toastMessage = (action, message) => {
      if (action === 'error') {
        return toast.error(message, {
          position: 'top-center',
        });
      }
      toast.success(message, {
        position: 'top-center',
      });
    };

    if (!paymentCondition.method) {
      return toastMessage('error', 'Selecione uma forma de pagamento');
    }
    if (!productsCart.length) {
      return toastMessage('error', 'Adicione produtos ao carrinho');
    }

    setOrders([...orders, currentOrder]);
    toastMessage('success', 'Pedido exportado com sucesso');
    setCurrentOrder({});
    setCurrentProductOrder({});
    const oneSecond = 1000;
    setTimeout(() => {
      window.location.href = `/link/${linkId}-${clientWhatsapp}`;
    }, [oneSecond]);
  };
  return (
    <>
      <FooterContainer>
        <Icon
          onClick={ () => setPaymentModal(true) }
          src={ currencyIcon }
        />
        <Icon
          onClick={ () => setCartModal(true) }
          src={ cartIcon }
        />
        <Icon
          onClick={ () => setObservationModal(true) }
          src={ editIcon }
        />
        <Icon
          onClick={ exportOrder }
          src={ exportIcon }
        />
      </FooterContainer>
      {paymentModal && <PaymentModal
        disable={ () => setPaymentModal(false) }
      /> }
      {cartModal && <ModalMix
        paymentMethod={ currentOrder.paymentCondition.method }
        products={ Object.values(currentProductOrder) }
        purchase
        disable={ () => setCartModal(false) }
      /> }
      {
        observationModal && <ObservationModal
          disable={ () => setObservationModal(false) }
        />
      }
    </>
  );
}
