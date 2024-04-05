import Modal from '../Modal/Modal';
import ProductCartCard from '../ProductCartCard/ProductCartCard';
import { ContainerOverflow, InfosContainer, PrimaryText, SecondaryText } from './styles';

export default function ModalMix({ products,
  disable, closeIcon, purchase, paymentMethod }) {
  const totalValue = products.reduce((acc, product) => acc + product.total, 0);
  const totalPacks = products.reduce((acc, product) => acc + product.quantity, 0);

  const BRL = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });
  return (
    <Modal closeIcon={ closeIcon } disable={ disable }>
      <ContainerOverflow>
        {products.map((product, index) => (
          <ProductCartCard
            key={ index }
            imageSrc={ product.images || product.imageUrl }
            reference={ product.reference }
            colors={ product.colors }
            sizes={ Object.entries(product.sizes) }
            quantity={ 0 }
            discount={ product.discount }
            packPrice={ product.box_price || product.price * product.pack }
            price={ product.price }
            brand={ product.brand_name }
          />
        ))}
      </ContainerOverflow>
      {!purchase && (
        <PrimaryText>
          Total de Referências:
          {' '}
          <SecondaryText>
            {products.length}
          </SecondaryText>
        </PrimaryText>
      )}
      {
        purchase && (
          <InfosContainer>
            <PrimaryText>
              Total de Referências:
              {' '}
              <SecondaryText>
                {products.length}
              </SecondaryText>
            </PrimaryText>
            <PrimaryText>
              Total de packs:
              {' '}
              <SecondaryText>
                {totalPacks || 0}
              </SecondaryText>
            </PrimaryText>
            <PrimaryText>
              Valor Total:
              {' '}
              <SecondaryText>
                {BRL.format(totalValue)}
              </SecondaryText>
            </PrimaryText>
            <PrimaryText>
              Metodo de Pagamento:
              {' '}
              <SecondaryText>
                {paymentMethod || ''}
              </SecondaryText>
            </PrimaryText>
          </InfosContainer>
        )
      }
    </Modal>
  );
}
