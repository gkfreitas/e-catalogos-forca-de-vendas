/* eslint-disable camelcase */
import {
  CardContainer,
  CardImage,
  CardImageWithInfosContainer,
  CardInfosContainer,
  ColorContainer,
  ColorText,
  ContainerImage,
  CurrencyContainer,
  KeyValueContainer,
  PriceTitle,
  PriceValue,
  PriceValueContainer,
  PricesContainer,
  PricesWithSizesContainer,
  PrimaryText,
  SecundaryText,
  SizeContent,
  SizesContainer,
  TotalQuantitySize,
  TotalSizeTag,
  UnitContainer,
} from './styles';

export default function ProductCartCard({
  imageSrc, reference, colors, sizes, brand,
  packPrice, price, onClick, selected,
}) {
  const randomImageUrl = 'https://camo.githubusercontent.com/b7b7dca15c743879821e7cfc14e8034ecee3588e221de0a6f436423e304d95f5/68747470733a2f2f7a7562652e696f2f66696c65732f706f722d756d612d626f612d63617573612f33363664616462316461323032353338616531333332396261333464393030362d696d6167652e706e67';

  const totalQuantity = sizes.reduce((acc, cur) => acc + cur[1], 0);
  const handleErrorImage = (e, images) => {
    const currentImageIndex = images.findIndex((img) => img.image === e.target.src);
    const nextImageIndex = (currentImageIndex + 1);
    e.target.src = images[nextImageIndex]?.image || randomImageUrl;
  };

  return (
    <CardContainer onClick={ onClick } $selected={ selected }>
      <CardImageWithInfosContainer>
        <ContainerImage>
          <CardImage
            src={ imageSrc[0]?.image || '' }
            onError={ (e) => handleErrorImage(e, imageSrc) }
          />
        </ContainerImage>
        <CardInfosContainer>
          <SecundaryText>
            {reference}
          </SecundaryText>
          <PrimaryText>
            {brand}
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
                {size[1]}
              </SizeContent>
            </KeyValueContainer>
          ))}

          <KeyValueContainer>
            <TotalSizeTag>TOTAL</TotalSizeTag>
            <TotalQuantitySize>{totalQuantity}</TotalQuantitySize>
          </KeyValueContainer>
        </SizesContainer>
        <PricesContainer>
          <UnitContainer>
            <PriceTitle>
              UNID.
            </PriceTitle>
            <PriceTitle>
              PACK
            </PriceTitle>
          </UnitContainer>
          <CurrencyContainer>
            <PriceValue>R$</PriceValue>
            <PriceValue>R$</PriceValue>
          </CurrencyContainer>
          <PriceValueContainer>
            <PriceValue>
              {price?.toLocaleString('pt-br', { minimumFractionDigits: 2 })}

            </PriceValue>
            <PriceValue>
              {packPrice?.toLocaleString('pt-br', { minimumFractionDigits: 2 })}

            </PriceValue>
          </PriceValueContainer>
        </PricesContainer>
      </PricesWithSizesContainer>
    </CardContainer>
  );
}
