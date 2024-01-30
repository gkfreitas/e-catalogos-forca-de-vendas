import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import { FunctionIcon, HeaderContainer, HeaderTitle } from './styles';

export default function Header({
  title,
  routeBack,
  routeNext,
  children,
  routeFunction,
  logo }) {
  const router = useNavigate();
  const { pathname } = window.location;
  const handleRouteFunction = () => {
    localStorage.setItem('lastPage', pathname);
    router('/functions');
  };
  return (
    <HeaderContainer>
      <AiOutlineLeft
        onClick={ routeBack?.length > 1 ? () => router(routeBack)
          : () => window.history.back() }
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
        style={ {
          visibility: (routeNext) ? 'visible' : 'hidden',
          display: logo || routeFunction ? 'none' : 'block',
        } }
        size={ 20 }
        fill="#ffffff"
        cursor="pointer"
      />
      <FunctionIcon
        style={ {
          visibility: routeFunction ? 'visible' : 'hidden',
          display: !routeFunction || logo ? 'none' : 'flex',
        } }
        onClick={ handleRouteFunction }
      >
        F
      </FunctionIcon>
    </HeaderContainer>
  );
}
