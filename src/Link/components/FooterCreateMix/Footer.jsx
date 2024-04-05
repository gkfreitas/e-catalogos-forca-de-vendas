import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Footer from '../Footer/Footer';
import {
  InputText,
  SelectedQuantity,
} from './styles';

export default function FooterCreateMix({
  selectedQuantity,
  selectedProducts,
  setSelectedProducts,
}) {
  const [linkName, setLinkName] = useState('');

  const navigate = useNavigate();

  const toastWarn = (message) => {
    toast.warn(message, {
      position: 'top-center',
    });
  };

  const saveLink = () => {
    if (selectedProducts.length === 0) {
      return toastWarn('Selecione ao menos um produto');
    }
    if (!linkName) {
      return toastWarn('Digite o nome do link');
    }

    const link = {
      // eslint-disable-next-line no-magic-numbers
      id: Math.floor(Math.random() * 100000),
      name: linkName,
      representativeName: 'Michele',
      products: selectedProducts,
    };
    const links = JSON.parse(localStorage.getItem('links')) || [];
    const newLinks = [...links, link];
    localStorage.setItem('links', JSON.stringify(newLinks));
    setSelectedProducts([]);
    setLinkName('');
    navigate('/link/send');
  };

  return (
    <Footer
      textUp="SALVAR"
      textDown="LINK"
      onClick={ saveLink }
    >
      <InputText
        value={ linkName }
        onChange={ (e) => setLinkName(e.target.value) }
        placeholder="Digite o nome do link"
      />
      <SelectedQuantity>
        {`${selectedQuantity} Produtos`}
        <br />
        Selecionados
      </SelectedQuantity>

    </Footer>
  );
}
