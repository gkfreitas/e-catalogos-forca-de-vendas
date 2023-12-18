import { useContext, useState } from 'react';
import { AiFillSave, AiOutlineMail } from 'react-icons/ai';
import { IoCloudUploadOutline } from 'react-icons/io5';
import { ToastContainer, toast } from 'react-toastify';
import EmailModal from '../../../components/EmailModal/EmailModal';
import ExportFields from '../../../components/ExportFields/ExportFields';
import Header from '../../../components/Header';
import InputRadio from '../../../components/InputRadio/InputRadio';
import { ProductOrderContext } from '../../../context/ProductOrderContext';
import {
  ContainerFields,
  ExportFooter,
  IconContainer,
  IconText,
  IconWithTextContainer,
  InputsRadioContainer, LabelText,
  PageContainer,
  PageTitle, TextArea, TextAreaContainer, TextAreaTitle,
} from './styles';

export default function ExportPage() {
  const {
    currentOrder,
    setCurrentOrder,
    setCurrentProductOrder,
    emptyOrder,
  } = useContext(ProductOrderContext);

  const {
    orderNumber,
    clientName,
    clientCNPJ,
    totalValue,
    paymentCondition,
    installmentsValue,
  } = currentOrder;

  const [exported, setExported] = useState(false);

  const BRL = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });

  const tags = ['N° do Pedido', 'Data e hora', 'Razão Social', 'CNPJ', 'Valor Bruto',
    'Desconto', 'Impostos', 'Parcelas + Valor total', 'Endereço de entrega'];

  const tagsValue = [
    orderNumber,
    new Date().toLocaleString(),
    clientName,
    clientCNPJ,
    BRL.format(totalValue),
    BRL.format(totalValue * (paymentCondition?.discount || 0)),
    'R$ 0,00',
    <span key="Total Value">
      {`${paymentCondition?.installments}x ${BRL.format(installmentsValue)}`}
      {' '}
      =
      {' '}
      <strong>{BRL.format(totalValue)}</strong>
    </span>,
    'Rua Teste, 123, Bairro Teste, Cidade Teste, Estado Teste, CEP Teste'];

  const [sendEmail, setSendEmail] = useState(false);

  const handleSuccess = (message) => {
    const localCurrentOrder = JSON.parse(localStorage.getItem('currentOrder'));
    if (!Object.values(localCurrentOrder).length) return;
    toast.success(message);
    const currentOrders = JSON.parse(localStorage.getItem('orders')) || [];
    setCurrentOrder(emptyOrder);
    setCurrentProductOrder({});
    setExported(true);
    localStorage.setItem('orders', JSON.stringify([...currentOrders, localCurrentOrder]));
    localStorage.removeItem('currentOrder');
    localStorage.removeItem('currentProductOrder');
    localStorage.removeItem('selectedProducts');
    localStorage.removeItem('currentOrder');
  };

  return (
    <PageContainer>
      <ToastContainer />
      <Header
        title="Exportar"
        routeBack={ exported ? '/clients' : '/order' }
        routeNext="/functions"
      />
      <PageTitle>Resumo do pedido</PageTitle>
      <ContainerFields>
        {tags.map((tag, i) => (
          <ExportFields
            title={ tag }
            content={ tagsValue[i] }
            key={ tag }
          />
        ))}
      </ContainerFields>
      <InputsRadioContainer>
        <InputRadio
          label={ <LabelText>Pedido</LabelText> }
          gap={ 6 }
          size={ 18 }
          name="orderType"
        />
        <InputRadio
          label={ <LabelText>Orçamento</LabelText> }
          gap={ 6 }
          size={ 18 }
          name="orderType"
        />
      </InputsRadioContainer>
      <TextAreaContainer>
        <TextAreaTitle>Observações</TextAreaTitle>
        <TextArea placeholder="Digite sua observação aqui" />
      </TextAreaContainer>
      <ExportFooter>
        <IconWithTextContainer
          onClick={ () => handleSuccess('Pedido salvo com sucesso!') }
        >
          <IconContainer>
            <AiFillSave size={ 24 } color="#809CAA" />
          </IconContainer>
          <IconText>Salvar Pedido</IconText>
        </IconWithTextContainer>
        <IconWithTextContainer
          onClick={ () => setSendEmail(true) }
        >
          <IconContainer>
            <AiOutlineMail size={ 24 } color="#809CAA" />
          </IconContainer>
          <IconText>Enviar para o E-Mail</IconText>
        </IconWithTextContainer>
        <IconWithTextContainer
          onClick={ () => handleSuccess('Pedido enviado para a fábrica com sucesso!') }
        >
          <IconContainer>
            <IoCloudUploadOutline size={ 24 } color="#809CAA" />
          </IconContainer>
          <IconText>Enviar para fábrica</IconText>
        </IconWithTextContainer>
      </ExportFooter>
      {sendEmail && <EmailModal
        handleSuccess={ handleSuccess }
        disable={ () => setSendEmail(false) }
      />}
    </PageContainer>
  );
}
