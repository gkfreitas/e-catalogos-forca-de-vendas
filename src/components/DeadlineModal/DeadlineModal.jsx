import { useContext } from 'react';
import { ProductOrderContext } from '../../context/ProductOrderContext';
import InputRadio from '../InputRadio/InputRadio';
import LabelDate from '../LabelDate/LabelDate';
import Modal from '../Modal';
import { Container, InputsContainer, TitleDeadline } from './styles';

export default function DeadlineModal({ disable }) {
  const { setCurrentOrder } = useContext(ProductOrderContext);

  const dates = [
    {
      month: 'Novembro',
      date: '30 a 30/23',
    },
    {
      month: 'Dezembro',
      date: '1 a 31/23',
    },
    {
      month: 'Janeiro',
      date: '1 a 31/24',
    },
    {
      month: 'Fevereiro',
      date: '1 a 29/24',
    },
    {
      month: 'Março',
      date: '1 a 31/24',
    },
    {
      month: 'Abril',
      date: '1 a 30/24',
    },
  ];

  const handleChange = (deadline) => {
    setCurrentOrder((prevState) => ({
      ...prevState,
      deadline,
    }));
  };
  return (
    <Modal title="PRAZOS DE ENTREGA" disable={ disable }>
      <Container>
        <TitleDeadline>MENSAL</TitleDeadline>
        <InputsContainer>
          {
            dates.map(({ month, date }, i) => (
              <InputRadio
                onChange={ () => handleChange(`${month} (${date})`) }
                gap={ 10 }
                size={ 20 }
                key={ i }
                label={ <LabelDate month={ month } date={ date } /> }
              />
            ))
          }
        </InputsContainer>
      </Container>
    </Modal>
  );
}
