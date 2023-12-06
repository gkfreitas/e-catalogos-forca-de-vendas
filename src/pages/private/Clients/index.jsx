import { useEffect, useState } from 'react';
import { AiOutlineEdit } from 'react-icons/ai';
import ClientCard from '../../../components/ClientCard';
import Header from '../../../components/Header';
import InputSearch from '../../../components/InputSearch';
import Modal from '../../../components/Modal';
import { companiesMock } from '../../../mocks/mockClients';
import {
  ClientsCardContainer,
  ClientsContainer,
  EditorIcon,
  OverflowPage,
  Separator,
  TablePriceButton,
  TablePriceButtonName,
  TablePriceButtonTitle,
  TablePriceCard,
  TablePriceCardText,
} from './styles';

export default function ClientsPage() {
  const [filteredClients, setFilteredClients] = useState(companiesMock);
  const [temporaryClient, setTemporaryClient] = useState('');
  const [currentClient, setCurrentClient] = useState('');
  const [searchValue, setSearchValue] = useState('');
  const [tableCard, setTableCard] = useState(false);
  const [priceTable, setPriceTable] = useState('');

  const typesPriceTableMock = ['REPRESENTACAO',
    'CENTRO OESTE', 'NORDESTE', 'SUL / SUDOESTE'];

  const choseClient = (client) => {
    setTemporaryClient(client);
    setTableCard(true);
  };

  const handleChosePriceTable = (type) => {
    setCurrentClient(temporaryClient);
    setPriceTable(type);
    setTableCard(false);
  };

  useEffect(() => {
    const filtered = companiesMock
      .filter((client) => client.nome.toLowerCase()
        .includes(searchValue.toLowerCase()));
    setFilteredClients(filtered);
  }, [searchValue]);

  useEffect(() => {
    const clientData = filteredClients
      .find((client) => client.nome === currentClient);
    localStorage.setItem('currentClient', JSON.stringify({ ...clientData, priceTable }));
  }, [currentClient, filteredClients, priceTable]);

  return (

    <>
      <Header
        title="Clientes"
        routeBack="/"
        routeNext={ currentClient && '/avaliableProducts' }
      />
      <InputSearch
        value={ searchValue }
        onChange={ (e) => setSearchValue(e.target.value) }
      />
      <Separator />
      <OverflowPage>
        <ClientsContainer>

          {priceTable && (
            <TablePriceButton>
              <EditorIcon onClick={ () => setTableCard(true) }>
                <AiOutlineEdit size={ 24 } fill="#2f2e2e" />
              </EditorIcon>
              <TablePriceButtonTitle>
                TABLA DE PREÇOS:
                {' '}
                <TablePriceButtonName>
                  {priceTable}
                </TablePriceButtonName>
              </TablePriceButtonTitle>
            </TablePriceButton>)}
          <ClientsCardContainer>
            {filteredClients.map(({ nome, cnpj, uf, nomeFantasia, email, whatsapp }) => (
              <ClientCard
                currentClient={ currentClient }
                onClick={ () => choseClient(nome) }
                key={ cnpj }
                clientName={ nome }
                cnpj={ cnpj }
                uf={ uf }
                fantasyName={ nomeFantasia }
                email={ email }
                whatsapp={ whatsapp }
              />
            ))}
          </ClientsCardContainer>
        </ClientsContainer>
        {tableCard && (
          <Modal
            title="Escolha uma Tabela de Preços"
            disable={ () => setTableCard(false) }
          >
            {typesPriceTableMock.map((type, i) => (
              <TablePriceCard key={ i } onClick={ () => handleChosePriceTable(type) }>
                <TablePriceCardText>
                  {type}
                </TablePriceCardText>
              </TablePriceCard>
            ))}
          </Modal>) }
      </OverflowPage>
    </>
  );
}
