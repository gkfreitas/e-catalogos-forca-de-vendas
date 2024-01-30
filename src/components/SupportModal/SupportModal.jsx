import emailIcon from '../../assets/icons/email-support.svg';
import phoneIcon from '../../assets/icons/phone.svg';
import skypeIcon from '../../assets/icons/skype.svg';
import whatsappIcon from '../../assets/icons/whatsapp.svg';
import Modal from '../Modal';
import { Container, Icon, IconWithText, Text } from './styles';

export default function SupportModal({ disable }) {
  return (
    <Modal title="SUPORTE" disable={ disable }>
      <Container>
        <IconWithText>
          <Icon src={ skypeIcon } />
          <Text>
            E-catalogos
          </Text>
        </IconWithText>
        <IconWithText>
          <Icon src={ emailIcon } />
          <Text>
            suporte@e-catalogos.net
          </Text>
        </IconWithText>
        <IconWithText>
          <Icon src={ phoneIcon } />
          <Text>
            (11) 4618-2550
          </Text>
        </IconWithText>
        <IconWithText>
          <Icon src={ whatsappIcon } />
          <Text>
            (11) 94961-9313
          </Text>
        </IconWithText>
      </Container>
    </Modal>
  );
}
