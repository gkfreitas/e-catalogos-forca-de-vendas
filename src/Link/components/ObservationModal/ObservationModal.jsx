import Modal from '../Modal/Modal';
import {
  ConfirmButton,
  Container,
  ObservationTitle,
  TextArea,
} from './styles';

export default function ObservationModal({ disable }) {
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
          placeholder="Insira sua observação"
        />
        <ConfirmButton
          onClick={ disable }
        >
          Confirmar
        </ConfirmButton>
      </Container>
    </Modal>
  );
}
