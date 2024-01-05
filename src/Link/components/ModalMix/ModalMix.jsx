import Modal from '../Modal/Modal';
import ProductCartCard from '../ProductCartCard/ProductCartCard';
import { ContainerOverflow, TotalProducts } from './styles';

export default function ModalMix({ products, disable, closeIcon }) {
  return (
    <Modal closeIcon={ closeIcon } disable={ disable }>
      <ContainerOverflow>
        {products.map((product, index) => (
          <ProductCartCard
            key={ index }
            imageSrc={ product.images }
            reference={ product.reference }
            colors={ product.colors }
            sizes={ Object.entries(product.sizes) }
            quantity={ 0 }
            discount={ product.discount }
            packPrice={ product.box_price }
            price={ product.price }
            brand={ product.brand_name }
          />
        ))}
      </ContainerOverflow>
      <TotalProducts>
        Total:
        {' '}
        {products.length}
      </TotalProducts>

    </Modal>
  );
}
