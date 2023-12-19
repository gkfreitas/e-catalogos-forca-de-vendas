import { useNavigate } from 'react-router-dom';
import orderListIcons from '../../assets/icons/order-list.svg';
import { CardContainer, CardIcon, CardTitle, CardsContainer } from './styles';

export default function CardFunction() {
  const functions = [
    {
      name: 'Lista de pedidos',
      iconSrc: orderListIcons,
      route: '/orders/list',
    },
    {
      name: 'Clientes',
      iconSrc: orderListIcons,
      route: '/clients',
    },
  ];

  const navigate = useNavigate();

  return (
    <CardsContainer>
      {
        functions.map((func) => (
          <CardContainer
            key={ func.name }
            to={ func.route }
            onClick={ () => navigate(func.route) }
          >
            <CardIcon src={ func.iconSrc } />
            <CardTitle>
              { func.name }
            </CardTitle>
          </CardContainer>
        ))

      }
    </CardsContainer>
  );
}
