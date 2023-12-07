import AvailableProducts from '../pages/private/AvailableProducts';
import Brands from '../pages/private/Brands';
import Clients from '../pages/private/Clients';
import ExportPage from '../pages/private/Export/ExportPage';
import OrderPage from '../pages/private/Order/OrderPage';
import Purchase from '../pages/private/Purchase';
import Login from '../pages/public/Login';

// arquivo dedicado para armazenar as rotas de acordo com o login, para fazer um map no outro arquivo
export const publicRoutes = [
  {
    path: '/',
    component: Login,
  },
  {
    path: '/clients',
    component: Clients,
  },
  {
    path: '/brands',
    component: Brands,
  },
  {
    path: '/purchase',
    component: Purchase,
  },
  {
    path: '/avaliableProducts',
    component: AvailableProducts,
  },
  {
    path: '/order',
    component: OrderPage,
  },
  {
    path: '/export',
    component: ExportPage,
  },
];
