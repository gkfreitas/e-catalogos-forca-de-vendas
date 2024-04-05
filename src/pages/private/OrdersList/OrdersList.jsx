import { useContext, useEffect, useState } from 'react';
import Header from '../../../components/Header';
import InputDate from '../../../components/InputDate/InputDate';
import InputText from '../../../components/InputText/InputText';
import OrderCard from '../../../components/OrderCard/OrderCard';
import { SkeletonList } from '../../../components/Skeleton/SkeletonList';
import { ProductOrderContext } from '../../../context/ProductOrderContext';
import {
  ContainerPage,
  InputsDateContainer,
  InputsTextContainer,
  OrdersContainer,
} from './styles';

export default function OrdersList() {
  const [orderNumber, setOrderNumber] = useState('');
  const [socialReasonOrCNPJ, setSocialReasonOrCNPJ] = useState('');
  const [login, setLogin] = useState('');
  const [initialDate, setInitialDate] = useState('');
  const [finalDate, setFinalDate] = useState('');
  const [filteredOrders, setFilteredOrders] = useState([{}]);
  const [loading, setLoading] = useState(false);
  const { orders } = useContext(ProductOrderContext);
  const tags = ['N do pedido', 'CNPJ', 'Razão Social', 'Data e Hora'];

  useEffect(() => {
    setLoading(true);

    const verifyDate = (order) => {
      const orderDate = order.orderDate.split(' ')[0];
      const orderTime = new Date(orderDate.split('/').reverse().join('-')).getTime();
      const initialTime = new Date(initialDate).getTime();
      const finalTime = new Date(finalDate).getTime();
      return orderTime >= initialTime && orderTime <= finalTime;
    };

    const filteredOrder = orders?.filter((order) => {
      if (Object.keys(order).length === 0) return false;
      const { orderNumber: orderNumberLocal } = order;
      const verifyOrderNumber = orderNumber ? String(orderNumberLocal)
        .includes(orderNumber) : true;
      const verifySocialReasonOrCNPJ = socialReasonOrCNPJ ? order.clientCNPJ
        .includes(socialReasonOrCNPJ) : true;
      const verifyDateLocal = initialDate && finalDate ? verifyDate(order) : true;
      return verifyOrderNumber && verifySocialReasonOrCNPJ && verifyDateLocal;
    });

    const sortedOrders = filteredOrder.sort((a, b) => {
      const dateA = a?.orderDate?.split('/').reverse().join('-');
      const dateB = b?.orderDate?.split('/').reverse().join('-');
      const timeA = new Date(`${dateA}T${a?.hour}`).getTime();
      const timeB = new Date(`${dateB}T${b?.hour}`).getTime();
      return timeB - timeA;
    });

    setFilteredOrders(sortedOrders);
    setLoading(false);
  }, [orderNumber, socialReasonOrCNPJ, login, initialDate, finalDate, orders]);

  return (
    <ContainerPage>
      <Header title="Pedidos" routeBack="/functions" />
      <InputsTextContainer>
        <InputText
          labelText="Número do pedido"
          value={ orderNumber }
          setValue={ (e) => setOrderNumber(e.target.value) }
        />
        <InputText
          labelText="Razão Social ou CNPJ"
          value={ socialReasonOrCNPJ }
          setValue={ (e) => setSocialReasonOrCNPJ(e.target.value) }
        />
        <InputText
          labelText="Login (preposto)"
          value={ login }
          setValue={ (e) => setLogin(e.target.value) }
        />
      </InputsTextContainer>
      <InputsDateContainer>
        <InputDate
          labelText="Data inicial"
          value={ initialDate }
          setValue={ (e) => setInitialDate(e.target.value) }
        />
        <InputDate
          labelText="Data final"
          value={ finalDate }
          setValue={ (e) => setFinalDate(e.target.value) }
        />
      </InputsDateContainer>
      <OrdersContainer>
        {loading
          ? <SkeletonList width="450px" height="200px" />
          : (
            filteredOrders.map((order, i) => (
              <OrderCard
                key={ i }
                tags={ tags }
                orderInfo={ order }
                email="suporte@e-catalogos.net"
                bgColor
              />
            ))
          )}
      </OrdersContainer>
    </ContainerPage>
  );
}
