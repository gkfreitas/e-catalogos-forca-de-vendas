import { AiOutlineRight } from 'react-icons/ai';
import {
  Container,
  SaveLinkContainer,
  SaveLinkSeparator,
  SaveLinkText,
  TextContainer,
} from './styles';

export default function Footer({
  children,
  textUp,
  textDown,
  onClick,
}) {
  return (
    <Container $children={ children }>
      {children}
      <SaveLinkContainer onClick={ onClick }>
        <TextContainer>
          <SaveLinkText>
            {textUp}
          </SaveLinkText>
          <SaveLinkSeparator />
          <SaveLinkText>
            {textDown}
          </SaveLinkText>
        </TextContainer>
        <AiOutlineRight size={ 24 } fill="#fff" />
      </SaveLinkContainer>
    </Container>
  );
}
