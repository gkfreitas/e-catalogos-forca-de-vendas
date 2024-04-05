import { useContext, useEffect, useState } from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { IoCloudUploadOutline } from 'react-icons/io5';
import { toast } from 'react-toastify';
import EmailModal from '../../../components/EmailModal/EmailModal';
import Header from '../../../components/Header';
import InputDate from '../../../components/InputDate/InputDate';
import InputText from '../../../components/InputText/InputText';
import OrderCard from '../../../components/OrderCard/OrderCard';
import { SkeletonList } from '../../../components/Skeleton/SkeletonList';
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
  const [filteredOrders, setFilteredOrders] = useState([{}]);
  const [emailModal, setEmailModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const { orders, selectedOrders, setSelectedOrders } = useContext(ProductOrderContext);
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

    const exportedOrders = JSON.parse(localStorage.getItem('exportedOrders'));
    let ordersNotExported = [];

    if (!exportedOrders) {
      ordersNotExported = orders;
    } else {
      ordersNotExported = orders?.filter((order) => {
        return !exportedOrders.some((exportedOrder) => {
          return (exportedOrder.orderNumber === order.orderNumber);
        });
      });
    }

    const filteredOrder = ordersNotExported?.filter((order) => {
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
  }, [
    orderNumber,
    socialReasonOrCNPJ,
    login, initialDate,
    finalDate, orders,
    selectedOrders,
  ]);

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

  const errorProductLength = () => {
    toast.error('Selecione pelo menos um pedido', {
      position: 'top-center',
    });
  };

  const handleExportOrder = () => {
    if (selectedOrders.length === 0) return errorProductLength();
    const exportedOrders = JSON.parse(localStorage.getItem('exportedOrders'));
    let newExportedOrdersList = [];

    if (!exportedOrders) {
      newExportedOrdersList = [...selectedOrders];
    } else {
      newExportedOrdersList = [...exportedOrders, ...selectedOrders];
    }

    localStorage.setItem('exportedOrders', JSON.stringify(newExportedOrdersList));
    toast.success('Pedido(s) exportado(s) para a fábrica', { position: 'top-center' });
    setSelectedOrders([]);
  };

  const backPage = () => {
    setSelectedOrders([]);
    return '/functions';
  };

  const showEmailModal = () => {
    if (selectedOrders.length === 0) return errorProductLength();
    setEmailModal(true);
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
        {loading
          ? <SkeletonList width="450px" height="200px" />
          : (
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
          )}
      </OrdersContainer>
      <ExportFooter>
        <SelectedOrdersText>
          {selectedOrders.length}
          {' '}
          Pedidos selecionados
        </SelectedOrdersText>
        <IconWithTextContainer onClick={ showEmailModal }>
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
          onClick={ handleExportOrder }
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
      {emailModal && <EmailModal disable={ () => setEmailModal(false) } />}
    </ContainerPage>
  );
}
