import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import orderListIcons from '../../assets/icons/order-list.svg';
import SupportModal from '../SupportModal/SupportModal';
import { CardContainer, CardIcon, CardTitle, CardsContainer } from './styles';

export default function CardFunction() {
  const [supportModal, setSupportModal] = useState(false);

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
    {
      name: (
        <span>
          Ir para login
          {' '}
          <br />
          {' '}
          Sair
        </span>
      ),
      iconSrc: orderListIcons,
      route: '/',
    },
    {
      name: 'Suporte',
      iconSrc: orderListIcons,
      onClick: () => setSupportModal(true),
    },
    {
      name: 'Link B2B',
      iconSrc: orderListIcons,
      route: '/clients',
    },
    {
      name: 'Link B2B',
      iconSrc: orderListIcons,
      route: '/clients',
    },
    {
      name: 'Agenda',
      iconSrc: orderListIcons,
      route: '/clients',
    },
    {
      name: 'Alterar Senha',
      iconSrc: orderListIcons,
      route: '/clients',
    },
  ];

  const navigate = useNavigate();

  const handleClick = (func) => {
    if (func.route) {
      navigate(func.route);
    } else {
      func.onClick();
    }
  };

  return (
    <CardsContainer>
      {
        functions.map((func) => (
          <CardContainer
            key={ func.name }
            onClick={ () => handleClick(func) }
          >
            <CardIcon src={ func.iconSrc } />
            <CardTitle>
              { func.name }
            </CardTitle>
          </CardContainer>
        ))

      }
      {supportModal && <SupportModal disable={ () => setSupportModal(false) } />}
    </CardsContainer>
  );
}
