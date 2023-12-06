import { AiOutlineClose } from 'react-icons/ai';
import {
  BackgroundFocus,
  CloseIcon,
  ModalContainer,
  ModalContent,
  ModalHeader,
  ModalHeaderText,
} from './styles';

export default function Modal({ title, children, disable,
  alignItems, padding }) {
  return (
    <BackgroundFocus>
      <ModalContainer>
        <ModalHeader>
          <CloseIcon onClick={ disable }>
            <AiOutlineClose size={ 24 } fill="#fff" />
          </CloseIcon>
          <ModalHeaderText>{title}</ModalHeaderText>
        </ModalHeader>
        <ModalContent $padding={ padding } $alignItems={ alignItems }>
          {children}
        </ModalContent>
      </ModalContainer>
    </BackgroundFocus>
  );
}
