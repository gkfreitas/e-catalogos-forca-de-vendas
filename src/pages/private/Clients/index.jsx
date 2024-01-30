import { useContext, useEffect, useState } from 'react';
import { AiOutlineEdit } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import ClientCard from '../../../components/ClientCard';
import FooterEdit from '../../../components/FooterEdit/FooterEdit';
import Header from '../../../components/Header';
import InputSearch from '../../../components/InputSearch';
import Modal from '../../../components/Modal';
import { ProductOrderContext } from '../../../context/ProductOrderContext';
import { companiesMock } from '../../../mocks/mockClients';
import {
  ClientsCardContainer,
  ClientsContainer,
  EditorIcon,
  InputSearchContainer,
  OverflowPage,
  Separator,
  TablePriceButton,
  TablePriceButtonName,
  TablePriceButtonTitle,
  TablePriceCard,
  TablePriceCardContainer,
  TablePriceCardText,
} from './styles';

export default function ClientsPage() {
  const [filteredClients, setFilteredClients] = useState(companiesMock);
  const [temporaryClient, setTemporaryClient] = useState('');
  const [currentClient, setCurrentClient] = useState('');
  const [searchValue, setSearchValue] = useState('');
  const [tableCard, setTableCard] = useState(false);
  const [priceTable, setPriceTable] = useState('');
  const { setCurrentOrder } = useContext(ProductOrderContext);

  const router = useNavigate();

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
    setTimeout(() => {
      router('/avaliableProducts');
    });
  };

  useEffect(() => {
    const localClient = localStorage.getItem('currentOrder');
    const { clientName, priceTable: localPriceTable } = JSON.parse(localClient) || {};

    setCurrentClient(clientName || '');

    setPriceTable(localPriceTable);
  }, []);

  useEffect(() => {
    const filtered = companiesMock
      .filter((client) => client.nome.toLowerCase()
        .includes(searchValue.toLowerCase()));
    setFilteredClients(filtered);
  }, [searchValue]);

  useEffect(() => {
    const clientData = filteredClients
      .find((client) => client.nome === currentClient);
    if (clientData) {
      const { nome, cnpj, nomeFantasia } = clientData;
      setCurrentOrder((prevState) => ({
        ...prevState,
        clientName: nome,
        clientCNPJ: cnpj,
        clientFantasyName: nomeFantasia,
        priceTable,
      }));
    }
  }, [currentClient, filteredClients, priceTable, setCurrentOrder]);

  return (

    <>
      {localStorage.getItem('editMode') && (
        <FooterEdit />
      )}
      <Header
        title="Clientes"
        routeBack="/functions"
        routeNext={ currentClient && '/avaliableProducts' }

      />
      <InputSearchContainer>
        <InputSearch
          value={ searchValue }
          onChange={ (e) => setSearchValue(e.target.value) }
        />
      </InputSearchContainer>
      <Separator />
      <OverflowPage>
        <ClientsContainer>

          {priceTable && (
            <TablePriceButton>
              <EditorIcon onClick={ () => setTableCard(true) }>
                <AiOutlineEdit size={ 24 } fill="#2f2e2e" />
              </EditorIcon>
              <TablePriceButtonTitle>
                TABELA DE PREÇOS:
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
            <TablePriceCardContainer>
              {typesPriceTableMock.map((type, i) => (
                <TablePriceCard key={ i } onClick={ () => handleChosePriceTable(type) }>
                  <TablePriceCardText>
                    {type}
                  </TablePriceCardText>
                </TablePriceCard>
              ))}
            </TablePriceCardContainer>
          </Modal>) }

      </OverflowPage>
    </>
  );
}
