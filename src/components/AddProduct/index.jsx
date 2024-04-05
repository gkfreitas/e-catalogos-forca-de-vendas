/* eslint-disable camelcase */
import { useContext, useEffect, useState } from 'react';
import minusIcon from '../../assets/icons/minus-icon.svg';
import plusIcon from '../../assets/icons/plus-icon.svg';
import { ProductContext } from '../../context/ProductContext';
import { ProductOrderContext } from '../../context/ProductOrderContext';
import {
  AddProductsBox, AddProductsContainer,
  BoxText,
  CurrentAndAccumulatedBox,
  CurrentPriceStyle,
  CurrentTextStyle,
  FooterContainer, IconStyle,
} from './styles';

export default function AddProduct() {
  const { currentProduct } = useContext(ProductContext);
  const {
    currentProductOrder,
    setCurrentProductOrder,
  } = useContext(ProductOrderContext);

  const { id, name, reference, price, images,
    fixed_qtd, sizes, colors } = currentProduct || {};

  const [quantity, setQuantity] = useState(0);
  const [priceProduct, setPriceProduct] = useState(0);
  const [accumulatedPrice, setAccumulatedPrice] = useState(0);
  // const [accumulatedQuantity, setAccumulatedQuantity] = useState(0);

  const BRL = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });

  const imageUrlVerify = (imagesVerify) => {
    const img = new Image();
    img.src = imagesVerify[0]?.image;
    img.onerror = () => {
      imagesVerify.shift();
      imageUrlVerify(imagesVerify);
    };
    return imagesVerify;
  };

  const addProduct = () => {
    if (!currentProductOrder[id]) {
      return setCurrentProductOrder((prevState) => ({
        ...prevState,
        [id]: {
          name,
          reference,
          imageUrl: imageUrlVerify(images),
          sizes,
          quantity: 1,
          pack: fixed_qtd,
          price,
          colors,
          total: price * fixed_qtd,
        },
      }));
    }

    setCurrentProductOrder((prevState) => ({
      ...prevState,
      [id]: {
        ...prevState[id],
        quantity: prevState[id].quantity + 1,
        total: ((prevState[id].quantity + 1) * prevState[id].price) * prevState[id].pack,
      },
    }));
  };

  const removeProduct = () => {
    const product = currentProductOrder[id];

    if (!product || product.quantity === 0) return;

    setCurrentProductOrder((prevState) => ({
      ...prevState,
      [id]: {
        ...prevState[id],
        quantity: prevState[id].quantity - 1,
        total: ((prevState[id].quantity - 1) * prevState[id].price) * prevState[id].pack,
      },
    }));

    if (currentProductOrder[id].quantity === 1) {
      const { [id]: _, ...rest } = currentProductOrder;
      setCurrentProductOrder(rest);
    }
  };

  useEffect(() => {
    setQuantity(0);
    setPriceProduct(0);
    if (currentProductOrder[id]) {
      setQuantity(currentProductOrder[id].quantity);
      setPriceProduct((currentProductOrder[id].quantity * price) * (fixed_qtd || 1));
    }
    // const accumulatedRef = Object.values(currentProductOrder)
    //   .reduce((acc, cur) => acc + cur.quantity, 0);
    const accumulatedPrices = Object.values(currentProductOrder)
      .reduce((acc, cur) => acc + cur.total, 0);
    // setAccumulatedQuantity(accumulatedRef);
    setAccumulatedPrice(accumulatedPrices);
  }, [currentProductOrder, price, id, fixed_qtd]);

  useEffect(() => {
    localStorage.setItem('currentProductOrder', JSON.stringify(currentProductOrder));
  }, [currentProductOrder]);

  return (
    <FooterContainer>
      <CurrentAndAccumulatedBox>
        <CurrentTextStyle>Atual</CurrentTextStyle>
        <CurrentPriceStyle>
          {BRL.format(priceProduct)}
        </CurrentPriceStyle>
      </CurrentAndAccumulatedBox>
      <AddProductsBox>
        <AddProductsContainer>
          <IconStyle src={ minusIcon } onClick={ removeProduct } />
          <BoxText>{quantity || 0}</BoxText>
          <IconStyle src={ plusIcon } onClick={ addProduct } />
        </AddProductsContainer>
      </AddProductsBox>
      <CurrentAndAccumulatedBox>
        <CurrentTextStyle>Acumulado</CurrentTextStyle>
        <CurrentPriceStyle>
          {BRL.format(accumulatedPrice)}
        </CurrentPriceStyle>
      </CurrentAndAccumulatedBox>
    </FooterContainer>
  );
}
