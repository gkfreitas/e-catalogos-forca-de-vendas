import { useContext, useState } from 'react';
import { toast } from 'react-toastify';
import { ProductOrderContext } from '../../context/ProductOrderContext';
import InputRadio from '../InputRadio/InputRadio';
import LabelPayment from '../LabelPayment/LabelPayment';
import Modal from '../Modal';
import { Container } from './styles';

export default function PaymentModal({ disable, totalValue }) {
  const paymentMethods = [
    {
      method: '90/120/150',
      minValue: 10000,
      discount: 7,
    },
    {
      method: '120',
      minValue: 0,
      discount: 0,
    },
    {
      method: '30/60/90/120',
      minValue: 10000,
      discount: 7,
    },
    {
      method: '30/60/90',
      minValue: 20000,
      discount: 14,
    },
    {
      method: '120/150',
      minValue: 30000,
      discount: 21,
    },
  ];

  const { setCurrentOrder } = useContext(ProductOrderContext);

  const [value, setInputValue] = useState('');

  const handleChange = (paymentCondition, minValue) => {
    if (totalValue < minValue) {
      toast.error('Valor mínimo do pedido não atingido', {
        position: 'top-center',
      });
      return;
    }
    setInputValue(paymentCondition.method);
    setCurrentOrder((prevState) => ({
      ...prevState,
      paymentCondition,
    }));
  };

  return (
    <Modal title="PAGAMENTO" disable={ disable }>
      <Container>
        {paymentMethods.map(({ method, minValue, discount }) => (
          <InputRadio
            name="payment"
            key={ method }
            size={ 26 }
            gap={ 16 }
            onChange={ () => handleChange({ method,
              installments: method.split('/').length || 1,
              discount: (discount / 100) }, minValue) }
            value={ value }
            checked={ value === method }
            label={ <LabelPayment
              minValue={ minValue }
              discount={ discount }
              method={ method }
            /> }
          />
        ))}
      </Container>
    </Modal>
  );
}
