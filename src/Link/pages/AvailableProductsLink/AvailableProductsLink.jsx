/* eslint-disable no-magic-numbers */
import { useContext, useEffect, useState } from 'react';
import { FaEraser } from 'react-icons/fa';
import eyeIcon from '../../../assets/icons/eye-icon.svg';
import AllProductsAvailable from '../../components/AllProductsAvailable';
import FooterEdit from '../../components/FooterEdit/FooterEdit';
import Header from '../../components/Header';
import { LinkContext } from '../../context/LinkContext';
import { LinkOrderContext } from '../../context/LinkOrderContext';
import {
  AvailableProductsContainer,
  ButtonsContainer,
  ChangeImagesPerViewButton,
  Container,
  EyeIconImage,
  InputSelect,
  NumbersContainer,
  Option,
} from './styles';

export default function AvailableProductsLink() {
  const { pathname } = window.location;
  const linkId = pathname.split('/').pop();
  const { setSelectedProducts, selectedProducts } = useContext(LinkContext);
  const { setCurrentProductOrder } = useContext(LinkOrderContext);
  const [imagesPerView, setImagesPerView] = useState(2);
  const [showSelected, setShowSelected] = useState(false);
  const [categorySelected, setCategorySelected] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);
  const categories = Array.from(new Set(filteredProducts
    .map((product) => product.category_name)));
  const { clientWhatsapp } = JSON.parse(localStorage.getItem('currentLinkOrder')) || {};

  const imagesPerViewOptions = [1, 2, 3, 4];

  const handleChangeCategory = (e) => {
    if (e.target.value === 'Categorias') {
      setCategorySelected('');
      return;
    }
    setCategorySelected(e.target.value);
  };

  const hadleClearSelectedProducts = () => {
    setSelectedProducts([]);
    localStorage.removeItem('currentProductOrder');
    setCurrentProductOrder({});
  };

  useEffect(() => {
    const links = JSON.parse(localStorage.getItem('links')) || [];
    const { products } = links.find((link) => link.id === Number(linkId)) || {};

    if (showSelected) {
      setFilteredProducts(selectedProducts);
      return;
    }

    const filtered = products.filter((product) => {
      const verifyCategory = categorySelected.length ? categorySelected
        .includes(product.category_name) : true;
      return verifyCategory;
    });

    setFilteredProducts(filtered);
  }, [categorySelected, linkId, selectedProducts, showSelected]);

  return (
    <Container>
      {localStorage.getItem('editMode') && (
        <FooterEdit />
      )}
      <Header
        title={ `Produtos Disponíveis (${filteredProducts.length})` }
        routeBack={ `/link/${linkId}-${clientWhatsapp}` }
        routeNext={ selectedProducts.length && `/link/purchase/${linkId}` }
      />
      <ButtonsContainer>
        <InputSelect
          name="Categorias"
          value={ categorySelected }
          onChange={ handleChangeCategory }
        >
          <Option>Categorias</Option>
          {categories.map((categoryOption) => (
            <Option key={ categoryOption }>{categoryOption}</Option>
          ))}
        </InputSelect>
        <NumbersContainer>
          {imagesPerViewOptions.map((option) => (
            <ChangeImagesPerViewButton
              key={ option }
              $selected={ option === imagesPerView }
              type="button"
              onClick={ () => setImagesPerView(option) }
            >
              {option}
            </ChangeImagesPerViewButton>
          ))}
        </NumbersContainer>

        <EyeIconImage
          cursor="pointer"
          src={ eyeIcon }
          onClick={ () => setShowSelected(!showSelected) }
        />
        <FaEraser
          cursor="pointer"
          size={ 24 }
          fill="#809CAA"
          onClick={ hadleClearSelectedProducts }
        />
      </ButtonsContainer>
      <AvailableProductsContainer>
        <AllProductsAvailable
          imagesPerView={ imagesPerView }
          filteredProducts={ filteredProducts }
          selectedProducts={ selectedProducts }
          setSelectedProducts={ setSelectedProducts }
        />
      </AvailableProductsContainer>
    </Container>
  );
}
