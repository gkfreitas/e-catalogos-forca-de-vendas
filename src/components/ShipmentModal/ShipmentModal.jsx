import { useContext, useEffect, useState } from 'react';
import { ProductOrderContext } from '../../context/ProductOrderContext';
import InputRadio from '../InputRadio/InputRadio';
import InputSearch from '../InputSearch';
import Modal from '../Modal';
import Separator from '../Separator';
import { ContainerInputSearch, ShipmentContainer } from './styles';

export default function ShipmentModal({ disable }) {
  const { setCurrentOrder, currentOrder } = useContext(ProductOrderContext);
  const [searchShipment, setSearchShipment] = useState('');
  const [filteredShipments, setFilteredShipments] = useState([]);

  const { shipment } = currentOrder;

  useEffect(() => {
    const transportadoras = ['TRANSFACIL', 'LOGEASY', 'NOVA TRANSPORTADORA',
      'TRANSPORTADORA NOVA', 'CORREIOS', 'ROCKTRANSPORTE', 'TRANSPORTADORA ROCK'];
    const filtered = transportadoras.filter((transportadora) => transportadora
      .toLowerCase().includes(searchShipment.toLowerCase()));
    setFilteredShipments(filtered);
  }, [searchShipment]);

  const handleChange = (shipmentName) => {
    setCurrentOrder((prevState) => ({
      ...prevState,
      shipment: shipmentName,
    }));
  };

  return (
    <Modal
      title="TRANSPORTADORA"
      disable={ disable }
    >
      <ContainerInputSearch>
        <InputSearch
          value={ searchShipment }
          onChange={ (e) => setSearchShipment(e.target.value) }
        />
      </ContainerInputSearch>
      <Separator
        height={ 1 }
        color="#D9D9D9"
        margin={ 60 }
      />
      <ShipmentContainer>
        {filteredShipments.map((shipmentName) => (
          <InputRadio
            onChange={ () => handleChange(shipmentName) }
            value={ shipment }
            checked={ shipment === shipmentName }
            gap={ 6 }
            key={ shipmentName }
            label={ <span>{shipmentName}</span> }
            name="shipment"
          />
        ))}
      </ShipmentContainer>
    </Modal>
  );
}
