/* eslint-disable no-magic-numbers */
import { useContext, useEffect, useState } from 'react';
import { AiOutlineClear } from 'react-icons/ai';
import FilterAvaliableProducts from '../../../components/FilterAvaliableProducts';
import Header from '../../../components/Header';
import mockProcuts from '../../../mocks/mockProducts';

import AllProductsAvaliable from '../../../components/AllProductsAvaliable';
import { ProductOrderContext } from '../../../context/ProductOrderContext';
import { ProductToolsContext } from '../../../context/ProductToolsContenxt';
import {
  AvailableProductsContainer,
  ButtonsContainer,
  ChangeImagesPerViewButton,
  ClearButton,
  InputSelect,
  NumbersContainer,
} from './styles';

export default function AvailableProducts() {
  const { setSeeAll } = useContext(ProductToolsContext);
  const { setCurrentProductOrder } = useContext(ProductOrderContext);

  const [imagesPerView, setImagesPerView] = useState(2);
  const [allProducts, setAllProducts] = useState([]);
  const [selectedProducts, setSelectedProducts] = useState(JSON
    .parse(localStorage.getItem('selectedProducts')) || []);
  const [filters, setFilters] = useState({
    Tipo: [],
    Marca: [],
    Gênero: [],
    Categorias: [],
  });
  const [categorySelected, setCategorySelected] = useState('Todos');

  const [filteredProducts, setFilteredProducts] = useState([]);
  const categories = Array.from(new Set(allProducts
    .map((product) => product.category_name)));

  const imagesPerViewOptions = [1, 2, 3, 4];

  const { Marca: brand, Gênero: gender, Categorias: category } = filters;

  useEffect(() => {
    const filtered = allProducts.filter((product) => {
      const verifyImages = product.images.length;
      const verifyBrand = brand.length ? brand
        .includes(product.brand_name) : true;
      const verifyGender = gender.length ? gender
        .includes(product.group_name) : true;
      const verifyCategory = category.length ? category
        .includes(product.category_name) : true;
      return verifyCategory && verifyBrand && verifyGender && verifyImages;
    });
    setFilteredProducts(filtered);
  }, [allProducts, brand, gender, category]);

  const handleChangeCategory = (e) => {
    setCategorySelected(e.target.value);
    if (e.target.value === 'Todos') {
      setFilters((prevState) => ({ ...prevState, Categorias: [] }));
      return;
    }
    setFilters((prevState) => ({ ...prevState, Categorias: [e.target.value] }));
  };

  const handleClearSelectedProducts = () => {
    setSelectedProducts([]);
    setCurrentProductOrder({});
    localStorage.setItem('selectedProducts', JSON.stringify([]));
    localStorage.setItem('currentProductOrder', JSON.stringify({}));
  };

  useEffect(() => {
    setSeeAll(false);
    setAllProducts(mockProcuts);
  }, [allProducts, setSeeAll]);

  return (
    <>
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
          <option>Todos</option>
          {categories.map((categoryOption) => (
            <option key={ categoryOption }>{categoryOption}</option>
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
        <ClearButton onClick={ handleClearSelectedProducts }>
          Limpar
          <AiOutlineClear
            size={ 12 }
            fill="#fff"
          />
        </ClearButton>
      </ButtonsContainer>
      <AvailableProductsContainer>
        <AllProductsAvaliable
          imagesPerView={ imagesPerView }
          filteredProducts={ filteredProducts }
          selectedProducts={ selectedProducts }
          setSelectedProducts={ setSelectedProducts }
        />
        <FilterAvaliableProducts
          setFilters={ setFilters }

        />
      </AvailableProductsContainer>
    </>
  );
}
