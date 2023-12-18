import { useContext, useEffect, useState } from 'react';
import { FaRegCalendarAlt, FaShippingFast } from 'react-icons/fa';
import { HiOutlineCurrencyDollar } from 'react-icons/hi2';
import { useNavigate } from 'react-router-dom';
import { ProductOrderContext } from '../../context/ProductOrderContext';
import DeadlineModal from '../DeadlineModal/DeadlineModal';
import Header from '../Header';
import InputOrder from '../InputOrder/InputOrder';
import PaymentModal from '../PaymentModal/PaymentModal';
import ProductCartCard from '../ProductCartCard/ProductCartCard';
import Separator from '../Separator';
import ShippmentModal from '../ShippmentModal/ShippmentModal';
import './print.css';
import {
  CoverPage,
  Footer,
  IconContainer,
  InputsContainer,
  NextButton,
  OrderProductsOverflow,
  OrderTools,
} from './styles';

export default function Order({ currentOrder, routeBack = '/purchase', detail }) {
  const [inputTags, setInputTags] = useState([]);
  const [inputContents, setInputContents] = useState([]);
  const [showShippment, setShowShippment] = useState(false);
  const [showPayment, setShowPayment] = useState(false);
  const [showDeadline, setShowDeadline] = useState(false);
  const {
    currentProductOrder,
    setCurrentOrder,
  } = useContext(ProductOrderContext);
  const { productsCart, paymentCondition, totalValue } = currentOrder;
  const { method, installments, discount } = paymentCondition;

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
      hour: prevState.hour || new Date().toLocaleTimeString(),
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
  }, [currentOrder, installments, method, productsCart, totalValue]);

  const router = useNavigate();

  const mediumWidthValues = ['Parcelas', 'N° do pedido'];

  const halfWidthValues = ['Data', 'Total'];

  return (
    <div className="print-container">
      <CoverPage>
        <Header title="PEDIDO" routeBack={ routeBack } />
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
                discount={ total * discount }
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
        {
          !detail && (
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
          )
        }

        {showShippment && <ShippmentModal disable={ () => setShowShippment(false) } />}
        {showPayment && <PaymentModal
          disable={ () => setShowPayment(false) }
          totalValue={ totalValue }
        />}
        {showDeadline && <DeadlineModal disable={ () => setShowDeadline(false) } />}
      </CoverPage>
    </div>
  );
}
