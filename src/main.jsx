import React from 'react';
import ReactDOM from 'react-dom/client';
import 'react-toastify/dist/ReactToastify.css';
import { ProductProvider } from './context/ProductContext';
import { ProductOrderProvider } from './context/ProductOrderContext';
import { ProductToolsProvider } from './context/ProductToolsContenxt';
import Routes from './routes/routes';
import GlobalStyle from './styles/global.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ProductProvider>
      <ProductOrderProvider>
        <ProductToolsProvider>
          <GlobalStyle />
          <Routes />
        </ProductToolsProvider>
      </ProductOrderProvider>
    </ProductProvider>
  </React.StrictMode>,
);
