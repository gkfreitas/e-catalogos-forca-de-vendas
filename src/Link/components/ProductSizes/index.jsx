import { useContext } from 'react';
import { LinkProductContext } from '../../context/LinkProductContext';
import {
  SizeCard,
  SizeName,
  SizeQuantity,
  SizeText,
  SizesContainer,
  TotalText,
} from './styles';

export default function ProductSizes() {
  const { currentProduct } = useContext(LinkProductContext);
  const sizes = currentProduct?.sizes || {};
  const sizesName = Object.keys(sizes);
  const quantity = Object.values(sizes);
  const pack = quantity.reduce((acc, cur) => cur + acc, 0);
  return (
    <>
      <SizesContainer>
        {sizesName.map((size, index) => (
          <SizeCard key={ index }>
            <SizeName>
              <SizeText>
                {size}
              </SizeText>
            </SizeName>
            <SizeQuantity>
              <SizeText>
                {quantity[index]}
              </SizeText>
            </SizeQuantity>
          </SizeCard>
        ))}
      </SizesContainer>
      <TotalText>
        TOTAL =
        {' '}
        {pack}
      </TotalText>
    </>
  );
}
