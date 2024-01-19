import { pdf } from '@react-pdf/renderer';
import { saveAs } from 'file-saver';
import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import cloudGreenIcon from '../../assets/icons/cloud-green.svg';
import deleteIcon from '../../assets/icons/delete.svg';
import duplicateIcon from '../../assets/icons/duplicate.svg';
import moneyIcon from '../../assets/icons/money.svg';
import pdfIcon from '../../assets/icons/pdf.svg';
import { ProductOrderContext } from '../../context/ProductOrderContext';
import ConfirmModal from '../ConfirmModal/ConfirmModal';
import InputOrder from '../InputOrder/InputOrder';

import { MyPdfDocument } from '../OrderPDF/MyPdfDocument';
import {
  AllButtons,
  ButtonDetails,
  ButtonFunction,
  ButtonsContainer,
  ButtonsFunctions,
  Container,
  EmailText,
  Icon,
} from './styles';

export default function OrderCard({ tags, email, bgColor, orderInfo }) {
  const [contents, setContents] = useState([]);
  const [modalDelete, setModalDelete] = useState(false);
  const [modalDuplicate, setModalDuplicate] = useState(false);

  const { orderNumber } = orderInfo;
  const { setOrders } = useContext(ProductOrderContext);
  useEffect(() => {
    const clientCNPJ = orderInfo?.clientCNPJ || 'N/A';
    const clientName = orderInfo?.clientName || 'N/A';
    const orderDate = orderInfo?.orderDate || 'N/A';
    const hour = orderInfo?.hour || 'N/A';
    const dateAndHour = `${orderDate} ${hour}`;
    setContents([orderNumber, clientCNPJ, clientName, dateAndHour]);
  }, [orderInfo, orderNumber]);

  const downloadPdfDocument = async () => {
    const blob = await pdf(<MyPdfDocument order={ orderInfo } />).toBlob();
    saveAs(blob, 'pedido.pdf');
  };

  const handleDelete = () => {
    const orders = JSON.parse(localStorage.getItem('orders'));
    const newOrders = orders.filter((order) => order.orderNumber !== orderNumber);
    setOrders(newOrders);
    setModalDelete(false);
  };

  const handleDuplicate = () => {
    const bigNumber = 1000000;
    const orders = JSON.parse(localStorage.getItem('orders'));
    const order = orders.find((item) => item.orderNumber === orderNumber);
    const newOrder = {
      ...order,
      orderNumber: Math.floor(Math.random() * bigNumber),
      orderDate: new Date().toLocaleDateString(),
      hour: new Date().toLocaleTimeString(),
    };
    setOrders([...orders, newOrder]);
    setModalDuplicate(false);
  };

  return (
    <Container $bgColor={ bgColor }>
      {tags.map((tag, index) => (
        <InputOrder
          bgColor={ bgColor ? '#FFF' : '#BDD2DD' }
          key={ tag }
          tag={ tag }
          content={ contents[index] }
        />
      ))}
      <EmailText $color={ bgColor ? '#fff' : '#000' }>
        {email}
      </EmailText>
      <AllButtons>
        <ButtonsContainer>
          <Link to={ `/order/${orderInfo.orderNumber}` }>
            <ButtonDetails>
              Detalhes
            </ButtonDetails>
          </Link>
          <button onClick={ downloadPdfDocument }>
            <Icon
              src={ pdfIcon }
              alt="icone de um pdf"
            />
          </button>
          <Icon src={ cloudGreenIcon } alt="icone de uma nuvem verde" />
          <Icon src={ moneyIcon } alt="icone de dinheiro" />
        </ButtonsContainer>
        <ButtonsFunctions>
          <ButtonFunction onClick={ () => setModalDuplicate(true) }>
            <Icon src={ duplicateIcon } />
          </ButtonFunction>
          <ButtonFunction
            onClick={ () => setModalDelete(true) }
          >
            <Icon
              src={ deleteIcon }
            />
          </ButtonFunction>
        </ButtonsFunctions>
      </AllButtons>
      {modalDelete && (
        <ConfirmModal
          title="Deletar"
          actionText="deletar"
          action={ handleDelete }
          disable={ () => setModalDelete(false) }
        />
      )}
      {
        modalDuplicate && (
          <ConfirmModal
            title="Duplicar"
            actionText="duplicar"
            action={ handleDuplicate }
            disable={ () => setModalDuplicate(false) }
          />
        )
      }
    </Container>
  );
}
