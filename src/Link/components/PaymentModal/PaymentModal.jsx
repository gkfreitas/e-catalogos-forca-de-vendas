import { useContext, useState } from 'react';
import { LinkOrderContext } from '../../context/LinkOrderContext';
import InputRadio from '../InputRadio/InputRadio';
import Modal from '../Modal/Modal';
import { ConfirmButton, Container, InputsContainer, PaymentTitle } from './styles';

export default function PaymentModal({ disable }) {
  const { setCurrentOrder } = useContext(LinkOrderContext);
  const [paymentMethod, setPaymentMethod] = useState({
    name: '',
    value: '',
    instalments: 1,
  });

  const inputsRadio = [
    {
      name: 'Pix',
      value: 'pix',
      instalments: 1,
    },
    {
      name: 'Cartão de crédito',
      value: 'creditCard',
      instalments: 6,
    },
    {
      name: 'Outro',
      value: 'other',
      instalments: 1,
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
          Formas de pagamento
        </PaymentTitle>
        <InputsContainer>
          {
            inputsRadio.map(({ name, value, instalments }) => (
              <InputRadio
                key={ value }
                name={ name }
                value={ value }
                onChange={ () => setPaymentMethod({ name, value, instalments }) }
                selectedValue={ paymentMethod.value }
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
