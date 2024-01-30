import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import backIcon from '../../assets/icons/back.svg';
import changePasswordIcon from '../../assets/icons/changePassword.svg';
import clientsIcon from '../../assets/icons/clients.svg';
import cloudIcon from '../../assets/icons/cloud.svg';
import createIcon from '../../assets/icons/create.svg';
import eraserIcon from '../../assets/icons/eraser.svg';
import leaveIcon from '../../assets/icons/leave.svg';
import orderListIcons from '../../assets/icons/order-list.svg';
import questionIcon from '../../assets/icons/question.svg';
import restoreIcon from '../../assets/icons/restore.svg';
import sendIcon from '../../assets/icons/send.svg';
import supportIcon from '../../assets/icons/support.svg';
import tableIcon from '../../assets/icons/table.svg';
import youtubeIcon from '../../assets/icons/youtube.svg';
import SupportModal from '../SupportModal/SupportModal';
import {
  CardContainer,
  CardIcon,
  CardPrincipal,
  CardTitle,
  CardTitlePrincipal,
  CardsContainer,
} from './styles';

export default function CardFunction() {
  const [supportModal, setSupportModal] = useState(false);

  const navigate = useNavigate();
  const backToOrder = () => {
    const lastPage = localStorage.getItem('lastPage') || '';
    navigate(lastPage);
  };

  const redirectYoutube = () => {
    window.open('https://www.youtube.com/watch?v=1IMnONVpimw', '_blank');
  };

  const clearData = () => {
    localStorage.clear();
    window.location.reload();
  };

  const functions = [
    {
      name: 'Lista de pedidos',
      iconSrc: orderListIcons,
      route: '/orders/list',
    },
    {
      name: 'Clientes',
      iconSrc: clientsIcon,
      route: '/clients',
    },
    {
      name: 'Tutorial APP',
      iconSrc: youtubeIcon,
      onClick: redirectYoutube,
    },
    {
      name: 'Suporte',
      iconSrc: supportIcon,
      onClick: () => setSupportModal(true),
    },
    {
      name: 'Enviar Link B2B',
      iconSrc: sendIcon,
      route: '/link/send',
    },
    {
      name: 'Criar Link B2B',
      iconSrc: createIcon,
      route: '/link/create',
    },
    {
      name: 'Limpar Dados',
      iconSrc: eraserIcon,
      onClick: clearData,
    },
    {
      name: 'Dúvidas',
      iconSrc: questionIcon,
      route: '/functions',
    },
    {
      name: 'Exportar Pedidos',
      iconSrc: cloudIcon,
      route: '/functions',
    },
    {
      name: 'Tabela de Preços',
      iconSrc: tableIcon,
      route: '/functions',
    },
    {
      name: 'Alterar Senha',
      iconSrc: changePasswordIcon,
      route: '/functions',
    },
    {
      name: 'Sair',
      iconSrc: leaveIcon,
      route: '/',
    },
    {
      name: 'Restaurar Pedidos',
      iconSrc: restoreIcon,
      route: '/functions',
    },
  ];

  const handleClick = (func) => {
    if (func.route) {
      navigate(func.route);
    } else {
      func.onClick();
    }
  };

  return (
    <>
      <CardPrincipal onClick={ backToOrder }>
        <CardIcon src={ backIcon } />
        <CardTitlePrincipal>
          Voltar ao Pedido
        </CardTitlePrincipal>
      </CardPrincipal>
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
    </>
  );
}
