import { useContext, useState } from 'react';
import { ProductContext } from '../../context/ProductContext';
import { ProductToolsContext } from '../../context/ProductToolsContext';
import Modal from '../Modal';
import {
  ButtonSearch,
  ErrorMessage,
  InputContainer, InputText,
} from './styles';

export default function SearchCard() {
  const [refSearch, setRefSearch] = useState('');
  const { setCurrentProductIndex, orderProducts } = useContext(ProductContext);
  const { errorRef, setErrorRef, setSearchCard,
    searchCard } = useContext(ProductToolsContext);

  const findByRef = () => {
    const foundedProduct = orderProducts.find((product) => (
      product.reference === refSearch));
    const indexFoundedProduct = orderProducts.indexOf(foundedProduct);
    if (!foundedProduct) return setErrorRef(true);

    setCurrentProductIndex(indexFoundedProduct);
    setSearchCard(false);
  };

  return (
    searchCard && (
      <Modal
        title="BUSCAR POR REF"
        disable={ () => setSearchCard(false) }
        height="auto"
      >
        <InputContainer>
          <InputText
            type="text"
            placeholder="00.00.000"
            onChange={ (e) => setRefSearch(e.target.value) }
          />
          {errorRef && <ErrorMessage>Referencia não encontrada</ErrorMessage>}
          <ButtonSearch
            type="submit"
            onClick={ findByRef }
          >
            Buscar
          </ButtonSearch>
        </InputContainer>
      </Modal>
    )
  );
}
