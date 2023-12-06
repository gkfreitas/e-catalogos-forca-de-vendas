import {
  CardContainer,
  CardImage,
  CardImageWithInfosContainer,
  CardInfosContainer,
  ColorContainer,
  ColorText,
  ContainerImage,
  PricesWithSizesContainer,
  PrimaryText,
  SecundaryText,
} from './styles';

export default function ProductCartCard({ imageSrc }) {
  return (
    <CardContainer>
      <CardImageWithInfosContainer>
        <ContainerImage>
          <CardImage src={ imageSrc } />
        </ContainerImage>
        <CardInfosContainer>
          <PrimaryText>
            REF:
            {' '}
            <SecundaryText>
              RE03
            </SecundaryText>
          </PrimaryText>
          <PrimaryText>
            Blusa Preta e Azul
          </PrimaryText>
          <ColorContainer
            color="#000"
          >
            <ColorText>Preto</ColorText>
          </ColorContainer>

        </CardInfosContainer>
      </CardImageWithInfosContainer>
      <PricesWithSizesContainer>
        <PrimaryText>Desconto: R$ 20,00</PrimaryText>
        <PrimaryText>Total: R$ 69,70</PrimaryText>
      </PricesWithSizesContainer>

    </CardContainer>
  );
}
