import { useContext, useEffect, useState } from 'react';
import { FaRegCalendarAlt, FaShippingFast } from 'react-icons/fa';
import { HiOutlineCurrencyDollar } from 'react-icons/hi2';
import { useNavigate } from 'react-router-dom';
import DeadlineModal from '../../../components/DeadlineModal/DeadlineModal';
import Header from '../../../components/Header';
import InputOrder from '../../../components/InputOrder/InputOrder';
import PaymentModal from '../../../components/PaymentModal/PaymentModal';
import ProductCartCard from '../../../components/ProductCartCard/ProductCartCard';
import Separator from '../../../components/Separator';
import ShippmentModal from '../../../components/ShippmentModal/ShippmentModal';
import { ProductOrderContext } from '../../../context/ProductOrderContext';
import {
  CoverPage,
  Footer,
  IconContainer,
  InputsContainer,
  NextButton,
  OrderProductsOverflow,
  OrderTools,
} from './styles';

export default function OrderPage() {
  const [inputTags, setInputTags] = useState([]);
  const [inputContents, setInputContents] = useState([]);
  const [showShippment, setShowShippment] = useState(false);
  const [showPayment, setShowPayment] = useState(false);
  const [showDeadline, setShowDeadline] = useState(false);
  const {
    currentProductOrder,
    setCurrentOrder,
    currentOrder,
  } = useContext(ProductOrderContext);
  const { productsCart, paymentCondition } = currentOrder;
  const { method, installments } = paymentCondition;

  useEffect(() => {
    const max = 2000000;
    const min = 1000000;

    const products = Object.values(currentProductOrder);
    const productsIds = Object.keys(currentProductOrder);

    const newProducts = products.map((product, index) => ({
      ...product,
      id: productsIds[index],
    }));

    setCurrentOrder((prevState) => ({
      ...prevState,
      orderDate: prevState.orderDate || new Date().toLocaleDateString(),
      orderNumber: prevState.orderNumber || Math.floor(Math.random() * max, min),
      productsCart: newProducts,
      installmentsValue: newProducts
        .reduce((acc, { total }) => acc + total, 0) / installments,
      totalValue: newProducts.reduce((acc, { total }) => acc + total, 0),
    }));
  }, [installments, currentProductOrder, setCurrentOrder]);

  useEffect(() => {
    const {
      clientName,
      clientCNPJ,
      shippment,
      deadline,
      orderNumber,
      orderDate,
      installmentsValue,
      totalValue,
    } = currentOrder;

    const BRL = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });

    const tags = ['Razão Social', 'CNPJ', 'N° do pedido', 'Data',
      'Entrega', 'Transportadora', 'Condição de pagamento',
      'Parcelas', 'Total'];

    const contents = [
      clientName,
      clientCNPJ,
      orderNumber,
      orderDate,
      deadline,
      shippment,
      method,
      `${installments}x de ${BRL.format(installmentsValue)}`,
      BRL.format(totalValue),
    ];

    setInputTags(tags);
    setInputContents(contents);
  }, [currentOrder, installments, method, productsCart]);

  const router = useNavigate();

  const mediumWidthValues = ['Parcelas', 'N° do pedido'];

  const halfWidthValues = ['Data', 'Total'];

  return (
    <CoverPage>
      <Header title="PEDIDO" routeBack="/purchase" />
      <InputsContainer>
        {inputTags.map((tag, index) => (
          <InputOrder
            key={ tag }
            tag={ tag }
            width={ (halfWidthValues.includes(tag) && '40%')
            || (mediumWidthValues.includes(tag) && '56%') }
            content={ inputContents[index] }
          />
        ))}
      </InputsContainer>
      <Separator height={ 2 } margin={ 60 } color="#E9E9E9" />
      <OrderProductsOverflow>
        {productsCart.map(({ imageUrl,
          reference, name, colors, sizes, total, pack, quantity }) => (
          (
            <ProductCartCard
              key={ reference }
              imageSrc={ imageUrl }
              reference={ reference }
              name={ name }
              colors={ colors }
              sizes={ Object.entries(sizes) }
              totalPrice={ total }
              pack={ pack }
              quantity={ quantity }
            />
          )
        ))}
      </OrderProductsOverflow>
      <Footer>
        <OrderTools>
          <IconContainer onClick={ () => setShowShippment(true) }>
            <FaShippingFast
              size={ 26 }
              fill="#809CAA"
            />
          </IconContainer>
          <IconContainer onClick={ () => setShowPayment(true) }>
            <HiOutlineCurrencyDollar size={ 26 } stroke="#809CAA" />
          </IconContainer>
          <IconContainer onClick={ () => setShowDeadline(true) }>
            <FaRegCalendarAlt size={ 26 } fill="#809CAA" />
          </IconContainer>
        </OrderTools>
        <NextButton
          onClick={ () => router('/export') }
        >
          Avançar
        </NextButton>
      </Footer>

      {showShippment && <ShippmentModal disable={ () => setShowShippment(false) } />}
      {showPayment && <PaymentModal disable={ () => setShowPayment(false) } />}
      {showDeadline && <DeadlineModal disable={ () => setShowDeadline(false) } />}
    </CoverPage>
  );
}
