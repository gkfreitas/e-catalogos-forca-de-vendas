import Modal from '../Modal/index';
import {
  BarProgress,
  BarProgressive,
  Container,
  OrderText,
  PercentageText,
  RestoreButton,
} from './styles';

export default function ModalRestoreOrders({ disable }) {
  return (
    <Modal title="RESTAURAR PEDIDO" disable={ disable }>
      <Container>
        <OrderText>
          0 Pedidos deletados
        </OrderText>
        <PercentageText>
          70% Dos pedidos resturados
        </PercentageText>
        <BarProgress>
          <BarProgressive />
        </BarProgress>
        <RestoreButton onClick={ disable }>
          RESTAURAR
        </RestoreButton>
      </Container>
    </Modal>
  );
}
