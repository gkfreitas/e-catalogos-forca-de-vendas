import { useContext } from 'react';
import equalIcon from '../../assets/icons/equal-icon.svg';
import { ProductContext } from '../../context/ProductContext';
import SizeCard from '../SizeCard';
import { EqualIcon, SizesContainer } from './styles';

export default function ProductSizes() {
  const { currentProduct } = useContext(ProductContext);
  const sizes = currentProduct?.sizes || {};
  const sizesName = Object.keys(sizes);
  const quantity = Object.values(sizes);
  const pack = quantity.reduce((acc, cur) => cur + acc, 0);

  return (
    <SizesContainer>
      {currentProduct?.grid && (
        <>
          {sizesName.map((size, i) => (
            <SizeCard
              key={ i }
              quantity={ quantity[i] }
              size={ size }
            />
          ))}
          <EqualIcon src={ equalIcon } alt="Icone de igual;" />
          <SizeCard isPack quantity={ pack } />
        </>
      )}

    </SizesContainer>
  );
}
