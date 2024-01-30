import Modal from '../Modal';
import { ActionButton, Buttons, NeutralButton, QuestionText } from './styles';

export default function ConfirmActionModal({ question, actionText, action, disable }) {
  return (
    <Modal title="CONFIRMAR AÇÃO" disable={ disable }>
      <QuestionText>
        {question}
      </QuestionText>
      <Buttons>
        <NeutralButton onClick={ disable }>
          CANCELAR
        </NeutralButton>
        <ActionButton onClick={ action }>
          {actionText}
        </ActionButton>
      </Buttons>
    </Modal>
  );
}
