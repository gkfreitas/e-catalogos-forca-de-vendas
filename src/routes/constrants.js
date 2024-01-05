// eslint-disable-next-line max-len
import AvailableProductsLink from '../Link/pages/AvailableProductsLink/AvailableProductsLink';
import CreateLink from '../Link/pages/CreateLink/CreateLink';
import SendLink from '../Link/pages/SendLink/SendLink';
import Welcome from '../Link/pages/Welcome/Welcome';
import PdfPreview from '../components/OrderPDF/PDFViewer';
import AvailableProducts from '../pages/private/AvailableProducts';
import Brands from '../pages/private/Brands';
import Clients from '../pages/private/Clients';
import ExportPage from '../pages/private/Export/ExportPage';
import Functions from '../pages/private/Functions/Functions';
import OrderPage from '../pages/private/Order/OrderPage';
import OrderDetails from '../pages/private/OrderDetails/OrderDetails';
import OrdersList from '../pages/private/OrdersList/OrdersList';
import Purchase from '../pages/private/Purchase';
import Login from '../pages/public/Login';

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
  {
    path: '/functions',
    component: Functions,
  },
  {
    path: '/orders/list',
    component: OrdersList,
  },
  {
    path: '/order/:id',
    component: OrderDetails,
  },
  {
    path: '/order/pdf',
    component: PdfPreview,
  },
  {
    path: '/link/create',
    component: CreateLink,
  },
  {
    path: '/link/send',
    component: SendLink,
  },
  {
    path: '/link/:id',
    component: Welcome,
  },
  {
    path: '/link/:id',
    component: Welcome,
  },
  {
    path: '/link/availableProducts/:id',
    component: AvailableProductsLink,
  },
];
