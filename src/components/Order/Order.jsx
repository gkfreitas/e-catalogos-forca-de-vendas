import { useContext, useEffect, useState } from 'react';
import { FaRegCalendarAlt, FaShippingFast } from 'react-icons/fa';
import { HiOutlineCurrencyDollar } from 'react-icons/hi2';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { ProductOrderContext } from '../../context/ProductOrderContext';
import DeadlineModal from '../DeadlineModal/DeadlineModal';
import FooterEdit from '../FooterEdit/FooterEdit';
import FooterOrderDetails from '../FooterOrderDetails/FooterOrderDetails';
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
  const {
    productsCart,
    paymentCondition,
    totalValue,
    clientName,
    clientCNPJ,
    shippment,
    deadline,
    orderNumber,
    orderDate,
    installmentsValue } = currentOrder || {};
  const { method, installments, discount } = paymentCondition || {};

  const navigate = useNavigate();

  useEffect(() => {
    if (!detail) {
      if (!clientName) {
        navigate('/clients');
      }

      if (!(JSON.parse(localStorage.getItem('selectedProducts')) || []).length) {
        navigate('/avaliableProducts');
      }

      if (productsCart.length === 0) {
        navigate('/purchase');
      }
    }
  }, [clientName, currentOrder, detail, navigate, productsCart.length]);

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
  }, [clientCNPJ,
    clientName,
    currentOrder,
    deadline,
    installments,
    installmentsValue,
    method,
    orderDate,
    orderNumber,
    productsCart,
    shippment,
    totalValue]);

  const router = useNavigate();

  const mediumWidthValues = ['Parcelas', 'N° do pedido'];

  const halfWidthValues = ['Data', 'Total'];

  const handleNextPage = () => {
    if (!shippment) return toast.error('Selecione uma transportadora');
    if (!method) return toast.error('Selecione uma condição de pagamento');
    if (!deadline) return toast.error('Selecione um prazo de entrega');

    router('/export');
  };

  return (
    <div className="print-container">
      <ToastContainer />
      <CoverPage>
        {localStorage.getItem('editMode') && !detail && (
          <FooterEdit />
        )}
        <Header title="PEDIDO" routeBack={ routeBack } routeFunction={ !detail } />
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
              {!localStorage.getItem('editMode') && (
                <NextButton
                  onClick={ handleNextPage }
                >
                  Avançar
                </NextButton>
              )}

            </Footer>
          )
        }
        {detail && (
          <FooterOrderDetails currentOrder={ currentOrder } />
        )}

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
