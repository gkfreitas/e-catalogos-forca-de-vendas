import React from 'react';
import ReactDOM from 'react-dom/client';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { LinkProvider } from './Link/context/LinkContext';
import { ProductProvider } from './context/ProductContext';
import { ProductOrderProvider } from './context/ProductOrderContext';
import { ProductToolsProvider } from './context/ProductToolsContenxt';
import { ContainerMobile } from './layout';
import Routes from './routes/routes';
import GlobalStyle from './styles/global.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ToastContainer />
    <LinkProvider>
      <ProductProvider>
        <ProductOrderProvider>
          <ProductToolsProvider>
            <ContainerMobile>
              <GlobalStyle />
              <Routes />
            </ContainerMobile>
          </ProductToolsProvider>
        </ProductOrderProvider>
      </ProductProvider>
    </LinkProvider>
  </React.StrictMode>,
);
