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

  const saveLink = () => {
    if (selectedProducts.length === 0) {
      toast.warn('Selecione ao menos um produto', {
        position: 'top-center',
      });
      return;
    }
    if (!linkName) {
      toast.warn('Digite o nome do link', {
        position: 'top-center',
      });
      return;
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
        {selectedQuantity}
        {' '}
        Produtos
        {' '}
        <br />
        Selecionados
      </SelectedQuantity>

    </Footer>
  );
}
