import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import exportIcon from '../../../assets/icons/export.png';
import searchIcon from '../../../assets/icons/search-icon-link.svg';
import Header from '../../../components/Header';
import { companiesMock } from '../../../mocks/mockClients';
import ClientCard from '../../components/ClientCard';
import InputSelect from '../../components/InputSelect/InputSelect';
import ModalMix from '../../components/ModalMix/ModalMix';

import ModalRemove from '../../components/ModalRemove/ModalRemove';
import {
  ClientsCardContainer,
  Container,
  ContainerExportClients,
  DeleteButton,
  ExportContainer,
  ExportIcon,
  ExportText,
  InputContainer,
  InputText,
  InputsContainer,
  LinkContainer,
  MixButton,
  Separator,
} from './styles';

export default function SendLink() {
  const [filteredClients, setFilteredClients] = useState(companiesMock);
  const [searchValue, setSearchValue] = useState('');
  const [link, setLink] = useState([]);
  const [linkName, setLinkName] = useState('');
  const [options, setOptions] = useState([]);
  const [mix, setMix] = useState(false);
  const [modalRemove, setModalRemove] = useState(false);

  useEffect(() => {
    const filtered = companiesMock
      .filter((client) => client.nome.toLowerCase()
        .includes(searchValue.toLowerCase()));
    setFilteredClients(filtered);
  }, [searchValue]);

  useEffect(() => {
    const optionsNames = JSON.parse(localStorage.getItem('links')) || [];
    const optionsState = optionsNames
      .map(({ name, products }) => ({ value: JSON
        .stringify({ name, products }),
      label: name }));
    setOptions([{ value: [],
      label: 'Selecione um LINK' }, ...optionsState]);
  }, []);

  const showMix = () => {
    if (!link || link.length <= 0) {
      toast.warn('Selecione um link');
      return;
    }
    setMix(true);
  };

  const showRemove = () => {
    if (!link || link.length <= 0) {
      toast.warn('Selecione um link');
      return;
    }
    setModalRemove(true);
  };

  const handleRemoveLink = () => {
    const links = JSON.parse(localStorage.getItem('links')) || [];
    const newLinks = links.filter(({ name }) => name !== linkName);
    localStorage.setItem('links', JSON.stringify(newLinks));
    const newLinksState = newLinks
      .map(({ name, products }) => ({ value: JSON
        .stringify({ name, products }),
      label: name }));
    setOptions([{ value: [],
      label: 'Selecione um LINK' }, ...newLinksState]);
    setLink([]);
  };

  const handleChangeLink = (value) => {
    setLink(value.products);
    setLinkName(value.name);
  };

  return (
    <>
      <Container>
        <Header title="ENVIAR LINK" />
        <InputsContainer>
          <InputContainer>
            <img src={ searchIcon } alt="Icone de uma lupa" />
            <InputText
              onChange={ ({ target }) => setSearchValue(target.value) }
              value={ searchValue }
              type="text"
              placeholder="Pesquisar"
            />
          </InputContainer>
          <LinkContainer>
            <InputSelect
              name="links"
              onChange={ ({ target }) => handleChangeLink(target.value
                ? JSON.parse(target.value) : []) }
              style={ {
                width: '70%',
              } }
              options={ options }
            />
            <MixButton onClick={ showMix }>MIX</MixButton>
            <DeleteButton onClick={ showRemove }>X</DeleteButton>
          </LinkContainer>
        </InputsContainer>
        <Separator />
        <ClientsCardContainer>
          {filteredClients.map(({ nome, cnpj, uf, nomeFantasia, email, whatsapp }) => (
            <ContainerExportClients key={ cnpj }>
              <ClientCard
                clientName={ nome }
                cnpj={ cnpj }
                uf={ uf }
                fantasyName={ nomeFantasia }
                email={ email }
                whatsapp={ whatsapp }
              />
              <ExportContainer
                href={ `https://api.whatsapp.com/send?phone=${whatsapp.split('-').join('').split(' ').join('')}` }
                target="_blank"
              >
                <ExportIcon src={ exportIcon } alt="Icone de exportar" />
                <ExportText>
                  Exportar
                </ExportText>
              </ExportContainer>
            </ContainerExportClients>
          ))}
        </ClientsCardContainer>
      </Container>
      {mix && <ModalMix closeIcon products={ link } disable={ () => setMix(false) } />}
      {modalRemove && <ModalRemove
        disable={ () => setModalRemove(false) }
        remove={ handleRemoveLink }
      />}
    </>
  );
}
