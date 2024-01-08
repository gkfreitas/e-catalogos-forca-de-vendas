import { useContext, useState } from 'react';
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
  const { currentProductOrder } = useContext(LinkOrderContext);
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
        <Icon src={ exportIcon } />
      </FooterContainer>
      {paymentModal && <PaymentModal
        disable={ () => setPaymentModal(false) }
      /> }
      {cartModal && <ModalMix
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
