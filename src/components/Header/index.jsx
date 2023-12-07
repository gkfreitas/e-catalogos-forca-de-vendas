import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import { HeaderContainer, HeaderTitle } from './styles';

export default function Header({ title, routeBack, routeNext, children }) {
  const router = useNavigate();
  return (
    <HeaderContainer>
      <AiOutlineLeft
        onClick={ () => router(routeBack) }
        size={ 20 }
        fill="#ffffff"
        cursor="pointer"
        style={ { visibility: routeBack ? 'visible' : 'hidden' } }
      />
      <HeaderTitle>
        {title }
      </HeaderTitle>
      {children}
      <AiOutlineRight
        onClick={ () => router(routeNext) }
        style={ { visibility: routeNext ? 'visible' : 'hidden' } }
        size={ 20 }
        fill="#ffffff"
        cursor="pointer"
      />
    </HeaderContainer>
  );
}
