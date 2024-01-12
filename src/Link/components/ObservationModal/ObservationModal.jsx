import { useContext, useState } from 'react';
import { LinkOrderContext } from '../../context/LinkOrderContext';
import Modal from '../Modal/Modal';
import {
  ConfirmButton,
  Container,
  ObservationTitle,
  TextArea,
} from './styles';

export default function ObservationModal({ disable }) {
  const [observation, setObservation] = useState('');
  const { setCurrentOrder } = useContext(LinkOrderContext);
  const handleConfirm = () => {
    disable();
    setCurrentOrder((prevState) => ({
      ...prevState,
      observation,
    }));
  };
  return (
    <Modal
      disable={ disable }
      style={ { width: '90%' } }
    >
      <Container>
        <ObservationTitle>
          Adicionar Observação
        </ObservationTitle>
        <TextArea
          value={ observation }
          onChange={ ({ target }) => setObservation(target.value) }
          placeholder="Insira sua observação"
        />
        <ConfirmButton
          onClick={ handleConfirm }
        >
          Confirmar
        </ConfirmButton>
      </Container>
    </Modal>
  );
}
