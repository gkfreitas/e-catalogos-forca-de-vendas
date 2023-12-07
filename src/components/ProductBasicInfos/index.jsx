import { useContext } from 'react';
import { ProductContext } from '../../context/ProductContext';
import {
  PriceTextCoin,
  PriceTextNumbers,
  ProductBasicInfosContainer,
  ProductTextStyle,
  RefTextStyle,
  RefTextStyleNumbers,
  TextStyle,
} from './style';

export default function ProductBasicInfos() {
  const { currentProduct } = useContext(ProductContext);

  const reference = currentProduct?.reference;
  const price = currentProduct?.price;
  const name = currentProduct?.name;
  return (
    <ProductBasicInfosContainer>
      <TextStyle>
        <RefTextStyle>
          REF:
          {' '}
          <RefTextStyleNumbers>{reference}</RefTextStyleNumbers>
        </RefTextStyle>
        <PriceTextCoin>
          R$
          {' '}
          <PriceTextNumbers>{price?.toFixed(2)}</PriceTextNumbers>
        </PriceTextCoin>
      </TextStyle>
      <ProductTextStyle>{name?.replace(/├â/g, 'Ã')}</ProductTextStyle>
    </ProductBasicInfosContainer>
  );
}
