import { useContext, useEffect, useState } from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { IoCloudUploadOutline } from 'react-icons/io5';
import { toast } from 'react-toastify';
import EmailModal from '../../../components/EmailModal/EmailModal';
import Header from '../../../components/Header';
import InputDate from '../../../components/InputDate/InputDate';
import InputText from '../../../components/InputText/InputText';
import OrderCard from '../../../components/OrderCard/OrderCard';

import { ProductOrderContext } from '../../../context/ProductOrderContext';
import {
  ContainerPage,
  ExportFooter,
  IconContainer,
  IconText,
  IconWithTextContainer,
  InputsDateContainer,
  InputsTextContainer,
  OrderContainer,
  OrdersContainer,
  SelectedOrdersText,
} from './styles';

export default function ExportOrders() {
  const [orderNumber, setOrderNumber] = useState('');
  const [socialReasonOrCNPJ, setSocialReasonOrCNPJ] = useState('');
  const [login, setLogin] = useState('');
  const [initialDate, setInitialDate] = useState('');
  const [finalDate, setFinalDate] = useState('');
  const { orders, selectedOrders, setSelectedOrders } = useContext(ProductOrderContext);
  const [filteredOrders, setFilteredOrders] = useState([{}]);
  const tags = ['N do pedido', 'CNPJ', 'Razão Social', 'Data e Hora'];
  const [sendEmail, setSendEmail] = useState(false);

  useEffect(() => {
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
  }, [orderNumber, socialReasonOrCNPJ, login, initialDate, finalDate, orders]);

  const handleSelectOrder = (order) => {
    setSelectedOrders((prevState) => {
      const verifyOrder = prevState.find((prevOrder) => prevOrder.orderNumber
      === order.orderNumber);
      if (verifyOrder) {
        return prevState.filter((prevOrder) => prevOrder.orderNumber
        !== order.orderNumber);
      }
      return [...prevState, order];
    });
  };

  const handleSuccess = (message) => {
    if (selectedOrders.length === 0) {
      toast.error('Selecione pelo menos um pedido', {
        position: 'top-center',
      });
      return;
    }
    toast.success(message, {
      position: 'top-center',
    });
    setSelectedOrders([]);
  };

  const backPage = () => {
    setSelectedOrders([]);
    return '/functions';
  };

  return (
    <ContainerPage>
      <Header title="Exportar pedidos" routeBack={ () => backPage() } />
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
        {
          filteredOrders.map((order, i) => (
            <OrderContainer
              $selected={ selectedOrders
                .find((selectedOrder) => selectedOrder.orderNumber
                === order.orderNumber) }
              onClick={ () => handleSelectOrder(order) }
              key={ i }
            >
              <OrderCard
                tags={ tags }
                orderInfo={ order }
                email="suporte@e-catalogos.net"
                bgColor
                exportOrder
              />
            </OrderContainer>
          ))
        }
      </OrdersContainer>
      <ExportFooter>
        <SelectedOrdersText>
          {selectedOrders.length}
          {' '}
          Pedidos selecionados
        </SelectedOrdersText>
        <IconWithTextContainer onClick={ () => setSendEmail(true) }>
          <IconContainer>
            <AiOutlineMail size={ 24 } color="#809CAA" />
          </IconContainer>
          <IconText>
            Enviar p/
            {' '}
            <br />
            E-Mail
          </IconText>
        </IconWithTextContainer>
        <IconWithTextContainer
          onClick={ () => handleSuccess('Pedido(s) exportado(s) para a fábrica') }
        >
          <IconContainer>
            <IoCloudUploadOutline size={ 24 } color="#809CAA" />
          </IconContainer>
          <IconText>
            Enviar p/
            {' '}
            <br />
            {' '}
            fábrica
          </IconText>
        </IconWithTextContainer>
      </ExportFooter>
      {sendEmail && <EmailModal
        handleSuccess={ handleSuccess }
        disable={ () => setSendEmail(false) }
      />}
    </ContainerPage>

  );
}
