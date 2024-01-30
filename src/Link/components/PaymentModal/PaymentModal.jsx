import { useContext, useState } from 'react';
import { LinkOrderContext } from '../../context/LinkOrderContext';
import InputRadio from '../InputRadio/InputRadio';
import Modal from '../Modal/Modal';
import { ConfirmButton, Container, InputsContainer, PaymentTitle } from './styles';

export default function PaymentModal({ disable }) {
  const { setCurrentOrder, currentOrder } = useContext(LinkOrderContext);
  const [paymentMethod, setPaymentMethod] = useState({});
  const { paymentCondition } = currentOrder;

  const inputsRadio = [
    {
      name: '30/60/90',
      value: '30/60/90',
      instalments: 3,
    },
    {
      name: '15/30/45',
      value: '15/30/45',
      instalments: 3,
    },
    {
      name: '30/60',
      value: '30/60',
      instalments: 2,
    },
    {
      name: '60/90/120',
      value: '60/90/120',
      instalments: 3,
    },
    {
      name: '30/45/60',
      value: '30/45/60',
      instalments: 3,
    },
    {
      name: '60/75/90',
      value: '60/75/90',
      instalments: 3,
    },
  ];

  const handleConfirm = () => {
    disable();
    setCurrentOrder((prevState) => ({
      ...prevState,
      paymentCondition: {
        method: paymentMethod.name,
        installments: paymentMethod.instalments,
        discount: 0,
      },
    }));
  };

  return (
    <Modal
      disable={ disable }
      closeIcon
      style={ { width: '70%',
      } }
    >
      <Container>
        <PaymentTitle>
          Metodos de pagamento
        </PaymentTitle>
        <InputsContainer>
          {
            inputsRadio.map(({ name, value, instalments }) => (
              <InputRadio
                key={ value }
                name={ name }
                value={ value }
                onChange={ () => setPaymentMethod({ name, value, instalments }) }
                selectedValue={ paymentMethod.value || paymentCondition.method }
              />
            ))
          }
        </InputsContainer>
        <ConfirmButton
          onClick={ handleConfirm }
        >
          Confirmar
        </ConfirmButton>
      </Container>
    </Modal>
  );
}
