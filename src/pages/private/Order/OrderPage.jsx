import { useEffect, useState } from 'react';
import Header from '../../../components/Header';
import InputOrder from '../../../components/InputOrder/InputOrder';
import ProductCartCard from '../../../components/ProductCartCard/ProductCartCard';
import Separator from '../../../components/Separator';
import { InputsContainer } from './styles';

export default function OrderPage() {
  const [clientInfos, setClientInfos] = useState({});
  const [inputTags, setInputTags] = useState([]);
  const [inputContents, setInputContents] = useState([]);

  useEffect(() => {
    const max = 200000;
    const min = 100000;
    const orderInfos = {
      clientName: clientInfos.nome,
      clientCNPJ: clientInfos.cnpj,
      orderNumber: Math.floor(Math.random() * max, min),
      orderDate: new Date().toLocaleDateString(),
      delivery: '10 dias',
      shipment: 'Correios',
      paymentCondition: {
        type: 'Cartão de crédito',
        installments: 4,
        installmentsValue: 'R$ 1.000,00',
        totalValue: 'R$ 4.000,00',
      },
    };
    const { clientName, clientCNPJ, orderNumber, orderDate, delivery, shipment,
      paymentCondition: { type, installments, installmentsValue, totalValue,
      } } = orderInfos;

    const tags = ['Razão Social', 'CNPJ', 'Número do pedido', 'Data',
      'Entrega', 'Transportadora', 'Condição de pagamento',
      'Parcelas', 'Total'];
    const contents = [clientName, clientCNPJ, orderNumber, orderDate, delivery, shipment,
      type, `${installments}x de ${installmentsValue}`, totalValue];
    setInputTags(tags);
    setInputContents(contents);
  }, [clientInfos]);

  useEffect(() => {
    const clientData = JSON.parse(localStorage.getItem('currentClient')) || {};
    const { nome, cnpj } = clientData;
    setClientInfos({ nome, cnpj });
  }, []);

  const halfWidthValues = ['Data', 'Entrega', 'Parcelas', 'Total'];

  return (
    <>
      <Header title="PEDIDO" routeBack="/purchase" />
      <InputsContainer>
        {inputTags.map((tag, index) => (
          <InputOrder
            key={ tag }
            tag={ tag }
            width={ halfWidthValues.includes(tag) ? '40%' : '90%' }
            content={ inputContents[index] }
          />
        ))}
      </InputsContainer>
      <Separator height={ 2 } margin={ 60 } color="#E9E9E9" />
      <ProductCartCard imageSrc="https://marquente.painel.e-catalogos.net/storage/2463/2463_1607614087zzgkinoaq9pj8dtjuybuea.png" />
    </>
  );
}
