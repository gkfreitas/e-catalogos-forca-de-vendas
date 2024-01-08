import { AiOutlineClose } from 'react-icons/ai';
import { BackgroundFocus, CloseIcon, Container, ModalContainer } from './styles';

export default function Modal({ children, disable, closeIcon, ...rest }) {
  return (
    <Container>
      <ModalContainer
        { ...rest }
      >
        {closeIcon && (
          <CloseIcon onClick={ disable }>
            <AiOutlineClose size={ 24 } fill="#809CAA" />
          </CloseIcon>
        )}
        {children}
      </ModalContainer>
      <BackgroundFocus onClick={ disable } />
    </Container>
  );
}
