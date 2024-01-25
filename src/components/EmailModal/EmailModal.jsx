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
  EmailTextLabel,
  PlusIconContainer,
  SendButton,
  SendButtonText,
} from './styles';

export default function EmailModal({ disable, handleSuccess }) {
  const [filteredEmails, setFilteredEmails] = useState([]);
  const [emailText, setEmailText] = useState('');
  const emails = mockEmails;

  useEffect(() => {
    const filtered = emails.filter(({ name }) => name.toLowerCase()
      .includes(emailText.toLowerCase()));
    setFilteredEmails(filtered);
  }, [emailText, emails]);

  const handleClick = () => {
    disable();
    handleSuccess('E-mail enviado com sucesso!');
  };

  return (
    <Modal title="ENVIAR E-MAIL" disable={ disable }>
      <ContentModal>
        <ContainerSearchOrAdd>
          <InputSearch
            placeholder="Buscar / Adicionar"
            onChange={ (e) => setEmailText(e.target.value) }
            value={ emailText }
          />
          <PlusIconContainer>
            <CiCirclePlus fill="#809CAA" size={ 28 } />
          </PlusIconContainer>
        </ContainerSearchOrAdd>

        <ContainerInputsCheckbox>
          {filteredEmails.map(({ email, phone }, i) => (
            <InputCheckbox
              type="checkbox"
              text={ (
                <EmailTextLabel>
                  <p>{email}</p>
                  <p>{phone}</p>
                </EmailTextLabel>) }
              gap={ 12 }
              size={ 18 }
              key={ i }
            />
          ))}
        </ContainerInputsCheckbox>
        <SendButton>
          <SendButtonText onClick={ handleClick }>
            ENVIAR
          </SendButtonText>
        </SendButton>

      </ContentModal>
    </Modal>
  );
}
