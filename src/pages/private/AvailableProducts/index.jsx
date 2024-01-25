/* eslint-disable no-magic-numbers */
import { useContext, useEffect, useState } from 'react';
import { FaEraser } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import Select from 'react-select';
import eyeIcon from '../../../assets/icons/eye-icon.svg';
import AllProductsAvaliable from '../../../components/AllProductsAvaliable';
import FilterAvaliableProducts from '../../../components/FilterAvaliableProducts';
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
  SubCategoriesContainer,
} from './styles';

export default function AvailableProducts() {
  const { setSeeAll } = useContext(ProductToolsContext);
  const { setCurrentProductOrder, currentOrder } = useContext(ProductOrderContext);
  const [imagesPerView, setImagesPerView] = useState(2);
  const [showSelected, setShowSelected] = useState(false);
  const [allProducts, setAllProducts] = useState(mockProcuts);
  const [selectedProducts, setSelectedProducts] = useState(JSON
    .parse(localStorage.getItem('selectedProducts')) || []);
  const [filters, setFilters] = useState({
    Tipo: [],
    Marca: [],
    Gênero: [],
    Categorias: [],
    Entrega: [],
    subCategories: [],
  });
  const [categorySelected, setCategorySelected] = useState('Categorias');
  const [filteredProducts, setFilteredProducts] = useState(mockProcuts);

  const navigate = useNavigate();
  const filteredCategories = allProducts
    .filter((product) => product.category_name === categorySelected);
  const subCategoriesNoRepeated = Array.from(new Set(filteredCategories
    .map((product) => product.sub_category)));

  const subCategories = [
    ...subCategoriesNoRepeated.map((subCategory) => (
      { value: subCategory, label: subCategory })),
  ];

  const categories = Array.from(new Set(allProducts
    .map((product) => product.category_name)));

  const imagesPerViewOptions = [1, 2, 3, 4];

  const {
    Marca: brand,
    Gênero: gender,
    Categorias: category,
    Tipo: type,
    Entrega: delivery,
  } = filters;

  useEffect(() => {
    const filtered = mockProcuts.filter((product) => {
      const verifyImages = product.images.length;
      const verifyBrand = brand.length ? brand
        .includes(product.brand_name) : true;
      const verifyGender = gender.length ? gender
        .includes(product.group_name) : true;
      const verifyCategory = category.length ? category
        .includes(product.category_name) : true;
      const verifyType = type.length ? type
        .includes(product.type) : true;
      const verifyDelivery = delivery.length ? delivery
        .includes(product.delivery) : true;
      const verifySubCategory = filters.subCategories.length ? filters.subCategories
        .includes(product.sub_category) : true;

      return verifyCategory && verifyBrand && verifyGender && verifyImages
      && verifyType && verifyDelivery && verifySubCategory;
    });

    setFilteredProducts(filtered);
  }, [brand, category, delivery, filters.subCategories, gender, type]);

  const handleChangeCategory = (e) => {
    setCategorySelected(e.target.value);
    setFilters((prevState) => ({ ...prevState, subCategories: [] }));
    if (e.target.value === 'Categorias') {
      setFilters((prevState) => ({ ...prevState, Categorias: [] }));
      return;
    }
    setFilters((prevState) => ({ ...prevState, Categorias: [e.target.value] }));
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
      handleChangeCategory({ target: { value: categorySelected } });
    }
  }, [categorySelected, selectedProducts, showSelected]);

  useEffect(() => {
    setSeeAll(false);

    if (mockProcuts.length === 0) {
      setAllProducts(mockProcuts);
    }
  }, [allProducts, setSeeAll]);

  useEffect(() => {
    if (showSelected) {
      setFilteredProducts(selectedProducts);
    }
  }, [filteredProducts, selectedProducts, showSelected]);

  useEffect(() => {
    const { clientName } = currentOrder;
    if (!clientName) {
      navigate('/clients');
    }
  }, [currentOrder, navigate]);
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
          onClick={ handleShowSelected }
        />
        <FaEraser
          cursor="pointer"
          size={ 24 }
          fill="#809CAA"
          onClick={ handleClearSelectedProducts }
        />
      </ButtonsContainer>
      {(categorySelected !== 'Categorias' && subCategories.length > 1) && (
        <SubCategoriesContainer>
          <Select
            options={ subCategories }
            placeholder="Subcategorias"
            isMulti
            theme={ (theme) => ({
              ...theme,
              borderRadius: 0,
              colors: {
                ...theme.colors,
                primary: '#809CAA',
              },
            }) }
            styles={ {

              input: (provided) => ({
                ...provided,
                color: '#fff',
              }),
              placeholder: (provided) => ({
                ...provided,
                color: '#fff',
              }),
              multiValue: (provided) => ({
                ...provided,
                backgroundColor: '#809CAA',
                color: '#fff',
              }),
              multiValueLabel: (provided) => ({
                ...provided,
                color: '#fff',
                fontWeight: 'medium',
              }),
              control: (provided) => ({
                ...provided,
                backgroundColor: '#809CAA',
                color: '#fff',
                borderRadius: '5px',
                padding: '4px',
              }),
            } }
            onChange={ (e) => setFilters((prevState) => ({
              ...prevState,
              subCategories: e.map((subCategory) => subCategory.value),
            })) }
          />
        </SubCategoriesContainer>
      )}
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
    </Container>
  );
}
