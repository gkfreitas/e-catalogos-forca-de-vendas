/* eslint-disable camelcase */
import { useContext, useEffect, useState } from 'react';
import minusIcon from '../../../assets/icons/minus-icon.svg';
import plusIcon from '../../../assets/icons/plus-icon.svg';
import { LinkOrderContext } from '../../context/LinkOrderContext';
import { LinkProductContext } from '../../context/LinkProductContext';
import {
  AddProductsContainer,
  BoxText,
  IconStyle,
} from './styles';

export default function AddProduct() {
  const { currentProduct } = useContext(LinkProductContext);
  const {
    currentProductOrder,
    setCurrentProductOrder,
  } = useContext(LinkOrderContext);

  const { id, name, reference, price, images,
    fixed_qtd, sizes, colors } = currentProduct || {};

  const [quantity, setQuantity] = useState(0);

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
    if (!currentProductOrder[id]) return;

    if (currentProductOrder[id].quantity === 0) return;

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
    if (currentProductOrder[id]) {
      setQuantity(currentProductOrder[id].quantity);
    }
  }, [currentProductOrder, price, id, fixed_qtd]);

  return (
    <AddProductsContainer>
      <IconStyle src={ minusIcon } onClick={ removeProduct } />
      <BoxText>{quantity || 0}</BoxText>
      <IconStyle src={ plusIcon } onClick={ addProduct } />
    </AddProductsContainer>
  );
}
