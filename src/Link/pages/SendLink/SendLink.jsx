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
import { SkeletonList } from '../../../components/Skeleton/SkeletonList';

export default function SendLink() {
  const [filteredClients, setFilteredClients] = useState(companiesMock);
  const [searchValue, setSearchValue] = useState('');
  const [link, setLink] = useState({
    id: '',
    name: '',
    products: [],
    representativeName: '',
  });
  const [options, setOptions] = useState([]);
  const [mix, setMix] = useState(false);
  const [modalRemove, setModalRemove] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    const filtered = companiesMock
      .filter((client) => client.nome.toLowerCase()
        .includes(searchValue.toLowerCase()));
    setFilteredClients(filtered);

    setLoading(false);
  }, [searchValue]);

  useEffect(() => {
    const optionsNames = JSON.parse(localStorage.getItem('links')) || [];
    const optionsState = optionsNames
      .map((objectLink) => (
        { value: JSON.stringify(objectLink), label: objectLink.name }
      ));
    setOptions([{ value: [],
      label: 'Selecione um LINK' }, ...optionsState]);
  }, []);

  const toastWarn = () => {
    toast.warn('Selecione um link', {
      position: 'top-center',
    });
  };

  const showMix = () => {
    if (!link.products || link.products.length <= 0) {
      return toastWarn();
    }
    setMix(true);
  };

  const showRemove = () => {
    if (!link.products || link.products.length <= 0) {
      return toastWarn();
    }
    setModalRemove(true);
  };

  const handleRemoveLink = () => {
    const links = JSON.parse(localStorage.getItem('links')) || [];
    const newLinks = links.filter(({ id }) => id !== link.id);
    localStorage.setItem('links', JSON.stringify(newLinks));
    const newLinksState = newLinks.map((objectLink) => (
      { value: JSON.stringify(objectLink), label: objectLink.name }
    ));
    setOptions([{ value: [],
      label: 'Selecione um LINK' }, ...newLinksState]);
    setLink({ name: '', products: [], representativeName: '' });
    setModalRemove(false);
  };

  const handleSendLink = (whatsapp) => {
    if (link.length <= 0) {
      return toastWarn();
    }

    const whatsappPath = `https://api.whatsapp.com/send?phone=${whatsapp
      .split('-').join('').split(' ')
      .join('')}&text=http://192.168.15.20:5173/link/${link.id}-${whatsapp
      .split('-').join('').split(' ').join('')}`;

    window.open(whatsappPath, '_blank');
  };

  return (
    <>
      <Container>
        <Header title="ENVIAR LINK" routeBack="/link/create" routeFunction />
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
              style={ { width: '70%' } }
              updateLink={ setLink }
              options={ options }
            />
            <MixButton onClick={ showMix }>MIX</MixButton>
            <DeleteButton onClick={ showRemove }>X</DeleteButton>
          </LinkContainer>
        </InputsContainer>
        <Separator />
        <ClientsCardContainer>
          {loading
            ? (
              <SkeletonList width="280px" height="120px">
                <ExportContainer>
                  <ExportIcon src={ exportIcon } alt="Icone de exportar" />
                  <ExportText>
                    Exportar
                  </ExportText>
                </ExportContainer>
              </SkeletonList>
            )
            : (
              filteredClients.map(({ nome, cnpj, uf, nomeFantasia, email, whatsapp }) => (
                <ContainerExportClients key={ cnpj }>
                  <ClientCard
                    clientName={ nome }
                    cnpj={ cnpj }
                    uf={ uf }
                    fantasyName={ nomeFantasia }
                    email={ email }
                    whatsapp={ whatsapp }
                  />
                  <ExportContainer onClick={ () => handleSendLink(whatsapp) }>
                    <ExportIcon src={ exportIcon } alt="Icone de exportar" />
                    <ExportText>
                      Exportar
                    </ExportText>
                  </ExportContainer>
                </ContainerExportClients>
              ))

            )}
        </ClientsCardContainer>
      </Container>
      {mix && <ModalMix
        closeIcon
        products={ link.products }
        disable={ () => setMix(false) }
      />}
      {modalRemove && <ModalRemove
        disable={ () => setModalRemove(false) }
        remove={ handleRemoveLink }
      />}
    </>
  );
}
