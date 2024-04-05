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
  ReferenceText,
  SecondaryText,
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
        <ReferenceText>
          {reference}
        </ReferenceText>
        <ProductSizes />
      </Column>
      <Column>
        <PrimaryText>
          V. Unit:
          {' '}
          <SecondaryText>
            {BRL.format(price)}
          </SecondaryText>
        </PrimaryText>
        <PrimaryText>
          V. Pack:
          {' '}
          <SecondaryText>
            {BRL.format(box_price)}
          </SecondaryText>
        </PrimaryText>
        <SecondaryText>
          Total =
          {' '}
          <PrimaryText>
            {total ? BRL.format(total) : BRL.format(0)}
          </PrimaryText>
        </SecondaryText>
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
