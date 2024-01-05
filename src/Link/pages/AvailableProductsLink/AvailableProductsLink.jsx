/* eslint-disable no-magic-numbers */
import { useContext, useEffect, useState } from 'react';
import { FaEraser } from 'react-icons/fa';
import eyeIcon from '../../../assets/icons/eye-icon.svg';
import AllProductsAvaliable from '../../../components/AllProductsAvaliable';
import FooterEdit from '../../../components/FooterEdit/FooterEdit';
import Header from '../../../components/Header';
import { ProductOrderContext } from '../../../context/ProductOrderContext';
import { ProductToolsContext } from '../../../context/ProductToolsContenxt';
import mockProcuts from '../../../mocks/mockProducts';
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
  const { setSeeAll } = useContext(ProductToolsContext);
  const { setCurrentProductOrder } = useContext(ProductOrderContext);
  const [imagesPerView, setImagesPerView] = useState(2);
  const [showSelected, setShowSelected] = useState(false);
  const [allProducts, setAllProducts] = useState(mockProcuts);
  const [selectedProducts, setSelectedProducts] = useState(JSON
    .parse(localStorage.getItem('selectedProducts')) || []);
  const [categorySelected, setCategorySelected] = useState('Todos');
  const [filteredProducts, setFilteredProducts] = useState(mockProcuts);
  const categories = Array.from(new Set(allProducts
    .map((product) => product.category_name)));

  const imagesPerViewOptions = [1, 2, 3, 4];

  useEffect(() => {
    const filtered = mockProcuts.filter((product) => {
      const verifyCategory = categorySelected.length ? categorySelected
        .includes(product.category_name) : true;
      return verifyCategory;
    });
    setFilteredProducts(filtered);
  }, [categorySelected]);

  const handleChangeCategory = (e) => {
    if (e.target.value === 'Todos') {
      setCategorySelected('');
      return;
    }
    setCategorySelected(e.target.value);
  };

  const handleShowSelected = () => {
    setShowSelected(!showSelected);
  };

  const handleClearSelectedProducts = () => {
    setSelectedProducts([]);
    setCurrentProductOrder({});
    localStorage.setItem('selectedProducts', JSON.stringify([]));
    localStorage.setItem('currentProductOrder', JSON.stringify({}));
  };

  useEffect(() => {
    if (showSelected) {
      setFilteredProducts(selectedProducts);
    }
    if (!showSelected) {
      setCategorySelected('');
    }
  }, [categorySelected, selectedProducts, showSelected]);

  useEffect(() => {
    setSeeAll(false);

    if (mockProcuts.length === 0) {
      setAllProducts(mockProcuts);
    }
  }, [allProducts, setSeeAll]);

  return (
    <Container>
      {localStorage.getItem('editMode') && (
        <FooterEdit />
      )}
      <Header
        title={ `Produtos Disponíveis (${filteredProducts.length})` }
        routeBack="/clients"
        routeNext={ selectedProducts.length && '/purchase' }
      />
      <ButtonsContainer>
        <InputSelect
          name="Categorias"
          value={ categorySelected }
          onChange={ handleChangeCategory }
        >
          <Option>Todos</Option>
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
          onClick={ handleShowSelected }
        />
        <FaEraser
          cursor="pointer"
          size={ 24 }
          fill="#809CAA"
          onClick={ handleClearSelectedProducts }
        />
      </ButtonsContainer>
      <AvailableProductsContainer>
        <AllProductsAvaliable
          imagesPerView={ imagesPerView }
          filteredProducts={ filteredProducts }
          selectedProducts={ selectedProducts }
          setSelectedProducts={ setSelectedProducts }
        />
      </AvailableProductsContainer>
    </Container>
  );
}
