import { useEffect, useState } from 'react';
import { CiCirclePlus } from 'react-icons/ci';
import mockEmails from '../../mocks/mockEmails';
import InputCheckbox from '../InputCheckbox';
import InputSearch from '../InputSearch';
import Modal from '../Modal';
import {
  ContainerInputsCheckbox,
  ContainerSearchOrAdd,
  ContentModal,
  PlusIconContainer,
  SendButton,
  SendButtonText,
} from './styles';

export default function EmailModal({ disable }) {
  const [filteredEmails, setFilteredEmails] = useState([]);
  const [emailText, setEmailText] = useState('');
  const emails = mockEmails;
  console.log(emails);
  useEffect(() => {
    const filtered = emails.filter(({ name }) => name.toLowerCase()
      .includes(emailText.toLowerCase()));
    setFilteredEmails(filtered);
  }, [emailText]);

  return (
    <Modal title="ENVIAR E-MAIL" disable={ disable }>
      <ContentModal>
        <ContainerSearchOrAdd>
          <InputSearch
            placeholder="Buscar / Adicionar"
            onChange={ (e) => setEmailText(e.target.value) }
            value={ emailText }
          />

        </ContainerSearchOrAdd>
        <PlusIconContainer>
          <CiCirclePlus fill="#809CAA" size={ 28 } />
        </PlusIconContainer>
        <ContainerInputsCheckbox>
          {filteredEmails.map(({ name }, i) => (
            <InputCheckbox
              text={ name }
              gap={ 6 }
              size={ 18 }
              key={ i }
            />
          ))}
        </ContainerInputsCheckbox>
        <SendButton>
          <SendButtonText onClick={ disable }>
            ENVIAR
          </SendButtonText>
        </SendButton>
      </ContentModal>
    </Modal>
  );
}
