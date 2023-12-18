/* eslint-disable camelcase */
import {
  CardContainer,
  CardImage,
  CardImageWithInfosContainer,
  CardInfosContainer,
  ColorContainer,
  ColorText,
  ContainerImage,
  KeyValueContainer,
  PricesWithSizesContainer,
  PrimaryText,
  SecundaryText,
  SizeContent,
  SizesContainer,
  TotalQuantitySize,
  TotalSizeTag,
} from './styles';

export default function ProductCartCard({
  imageSrc, reference, name, colors, sizes, totalPrice,
  quantity, discount,
}) {
  const BRL = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' });

  const totalQuantity = sizes.reduce((acc, cur) => acc + cur[1] * quantity, 0);

  return (
    <CardContainer>
      <CardImageWithInfosContainer>
        <ContainerImage>
          <CardImage src={ imageSrc[0].image } />
        </ContainerImage>
        <CardInfosContainer>
          <PrimaryText>
            REF:
            {' '}
            <SecundaryText>
              {reference}
            </SecundaryText>
          </PrimaryText>
          <PrimaryText>
            {name}
          </PrimaryText>
          {colors.map(({ cod_hex, color_name }) => (
            <ColorContainer
              key={ cod_hex }
              color={ `#${cod_hex}` }
            >
              <ColorText>{color_name}</ColorText>
            </ColorContainer>
          ))}
        </CardInfosContainer>
      </CardImageWithInfosContainer>
      <PricesWithSizesContainer>
        <SizesContainer>
          {sizes.map((size) => (
            <KeyValueContainer key={ size }>
              <SizeContent>
                {size[0]}
              </SizeContent>
              <SizeContent>
                {size[1] * quantity}
              </SizeContent>
            </KeyValueContainer>
          ))}

          <KeyValueContainer>
            <TotalSizeTag>TOTAL</TotalSizeTag>
            <TotalQuantitySize>{totalQuantity}</TotalQuantitySize>
          </KeyValueContainer>
        </SizesContainer>
        <PrimaryText>
          Descontos:
          {' '}
          {BRL.format(discount)}
        </PrimaryText>
        <PrimaryText>
          Impostos: R$
          {' '}
          {0}
        </PrimaryText>
        <PrimaryText>
          Total
          {' '}
          {BRL.format(totalPrice)}
        </PrimaryText>
      </PricesWithSizesContainer>
    </CardContainer>
  );
}
