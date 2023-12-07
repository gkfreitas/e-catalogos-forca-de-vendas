import { useContext, useEffect, useState } from 'react';
import { ProductOrderContext } from '../../context/ProductOrderContext';
import InputRadio from '../InputRadio/InputRadio';
import InputSearch from '../InputSearch';
import Modal from '../Modal';
import Separator from '../Separator';
import { ContainerInputSearch, ShippmentContainer } from './styles';

export default function ShippmentModal({ disable }) {
  const { setCurrentOrder, currentOrder } = useContext(ProductOrderContext);
  const [searchShippment, setSearchShippment] = useState('');
  const [filteredShippments, setFilteredShippments] = useState([]);

  const { shippment } = currentOrder;

  useEffect(() => {
    const transportadoras = ['TRANSFACIL', 'LOGEASY', 'NOVA TRANSPORTADORA',
      'TRANSPORTADORA NOVA', 'CORREIOS', 'ROCKTRANSPORTE', 'TRANSPORTADORA ROCK'];
    const filtered = transportadoras.filter((transportadora) => transportadora
      .toLowerCase().includes(searchShippment.toLowerCase()));
    setFilteredShippments(filtered);
  }, [searchShippment]);

  const handleChange = (shippmentName) => {
    setCurrentOrder((prevState) => ({
      ...prevState,
      shippment: shippmentName,
    }));
  };

  return (
    <Modal
      title="TRANSPORTADORA"
      disable={ disable }
    >
      <ContainerInputSearch>
        <InputSearch
          value={ searchShippment }
          onChange={ (e) => setSearchShippment(e.target.value) }
        />
      </ContainerInputSearch>
      <Separator
        height={ 1 }
        color="#D9D9D9"
        margin={ 60 }
      />
      <ShippmentContainer>
        {filteredShippments.map((shippmentName) => (
          <InputRadio
            onChange={ () => handleChange(shippmentName) }
            value={ shippment }
            checked={ shippment === shippmentName }
            gap={ 6 }
            key={ shippmentName }
            label={ <span>{shippmentName}</span> }
            name="shippment"
          />
        ))}
      </ShippmentContainer>
    </Modal>
  );
}
