import Modal from '../Modal/Modal';
import {
  ButtonText,
  ButtonsContainer,
  CancelButton,
  Container,
  RemoveButton,
  Title,
} from './styles';

export default function ModalRemove({ disable, remove }) {
  return (
    <Modal>
      <Container>
        <Title>
          Você tem certeza que deseja
          <br />
          remover o LINK?
        </Title>
        <ButtonsContainer>
          <CancelButton onClick={ disable }>
            <ButtonText>
              Cancelar
            </ButtonText>
          </CancelButton>
          <RemoveButton onClick={ remove }>
            <ButtonText>
              Remover
            </ButtonText>
          </RemoveButton>
        </ButtonsContainer>
      </Container>
    </Modal>
  );
}
