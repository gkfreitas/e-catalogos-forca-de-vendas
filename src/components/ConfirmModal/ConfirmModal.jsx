import {
  BackgroundFocus,
  ButtonConfirm,
  ButtonRecuse,
  ButtonsContainer,
  ContainerModal,
  Modal,
} from './styles';

export default function ConfirmModal({ actionText, action, disable }) {
  return (
    <>
      <ContainerModal>
        <Modal>
          Voce tem certeza que deseja
          {' '}
          {actionText}
          {' '}
          o pedido
          ?
          <ButtonsContainer>
            <ButtonConfirm onClick={ action }>SIM</ButtonConfirm>
            <ButtonRecuse onClick={ disable }>NÃO</ButtonRecuse>
          </ButtonsContainer>
        </Modal>
      </ContainerModal>
      <BackgroundFocus onClick={ disable } />
    </>
  );
}
