/* eslint-disable camelcase */

import { useContext } from 'react';
import { LinkOrderContext } from '../../context/LinkOrderContext';
import { LinkProductContext } from '../../context/LinkProductContext';
import AddProduct from '../AddProduct/AddProduct';
import ProductSizes from '../ProductSizes';
import {
  ColorContainer,
  ColorTag,
  Column,
  PrimaryText,
  ProductBasicInfosContainer,
  RefenceText,
  SecundaryText,
} from './style';

export default function ProductBasicInfos() {
  const { currentProduct } = useContext(LinkProductContext);
  const { currentProductOrder } = useContext(LinkOrderContext);
  const { colors, box_price } = currentProduct || {};
  const reference = currentProduct?.reference;
  const price = currentProduct?.price;
  const { total } = currentProductOrder[currentProduct?.id] || {};
  const BRL = Intl.NumberFormat(
    'pt-BR',
    { style: 'currency', currency: 'BRL' },
  );

  return (
    <ProductBasicInfosContainer>
      <Column>
        <RefenceText>
          {reference}
        </RefenceText>
        <ProductSizes />
      </Column>
      <Column>
        <PrimaryText>
          V. Unit:
          {' '}
          <SecundaryText>
            {BRL.format(price)}
          </SecundaryText>
        </PrimaryText>
        <PrimaryText>
          V. Pack:
          {' '}
          <SecundaryText>
            {BRL.format(box_price)}
          </SecundaryText>
        </PrimaryText>
        <SecundaryText>
          Total =
          {' '}
          <PrimaryText>
            {total ? BRL.format(total) : BRL.format(0)}
          </PrimaryText>
        </SecundaryText>
        {colors && (
          <ColorContainer>
            {colors.map(({ color_name, cod_hex }) => (
              <ColorTag $color={ cod_hex } key={ cod_hex }>
                {color_name}
              </ColorTag>
            ))}
          </ColorContainer>
        )}
      </Column>
      <Column>
        <AddProduct />
      </Column>
    </ProductBasicInfosContainer>
  );
}
