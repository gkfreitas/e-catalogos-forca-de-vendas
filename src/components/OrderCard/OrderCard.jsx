import { pdf } from '@react-pdf/renderer';
import { saveAs } from 'file-saver';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import cloudGreenIcon from '../../assets/icons/cloud-green.svg';
import moneyIcon from '../../assets/icons/money.svg';
import pdfIcon from '../../assets/icons/pdf.svg';
import InputOrder from '../InputOrder/InputOrder';
import { MyPdfDocument } from '../OrderPDF/MyPdfDocument';
import { ButtonDetails, ButtonsContainer, Container, EmailText, Icon } from './styles';

export default function OrderCard({ tags, email, bgColor, orderInfo }) {
  const [contents, setContents] = useState([]);

  useEffect(() => {
    const orderNumber = orderInfo?.orderNumber || 'N/A';
    const clientCNPJ = orderInfo?.clientCNPJ || 'N/A';
    const clientName = orderInfo?.clientName || 'N/A';
    const orderDate = orderInfo?.orderDate || 'N/A';
    const hour = orderInfo?.hour || 'N/A';
    const dateAndHour = `${orderDate} ${hour}`;
    setContents([orderNumber, clientCNPJ, clientName, dateAndHour]);
  }, [orderInfo]);

  const downloadPdfDocument = async () => {
    const blob = await pdf(<MyPdfDocument order={ orderInfo } />).toBlob();
    saveAs(blob, 'pedido.pdf');
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
    </Container>
  );
}
