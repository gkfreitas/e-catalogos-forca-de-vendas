import { useContext, useEffect, useState } from 'react';
import logo from '../../../assets/images/logo-white.png';
import Header from '../../../components/Header';
import mockProducts from '../../../mocks/mockProducts';
import FooterCreateMix from '../../components/FooterCreateMix/Footer';
import InputSelect from '../../components/InputSelect/InputSelect';
import ProductCartCard from '../../components/ProductCartCard/ProductCartCard';
import { LinkContext } from '../../context/LinkContext';
import {
  brandOptions,
  brandSelectedOptions,
  categoryOptions,
  deliveryOptions,
  genderOptions,
  subcategoryOptions,
  typeOptions,
} from './options';
import {
  AllInputsContainer,
  Container,
  LogoHeader,
  ProductsContainer,
  RefAndBrandBox,
  RefQuantity,
  TwoInputsContainer,
} from './styles';

export default function CreateLink() {
  const { filteredProducts, setFilteredProducts } = useContext(LinkContext);
  const [refQuantity, setRefQuantity] = useState(0);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [brand, setBrand] = useState('');
  const [type, setType] = useState('');
  const [delivery, setDelivery] = useState('');
  const [gender, setGender] = useState('');
  const [category, setCategory] = useState('');
  const [subcategory, setSubcategory] = useState('');

  useEffect(() => {
    setRefQuantity(filteredProducts.length);
  }, [filteredProducts]);

  // eslint-disable-next-line sonarjs/cognitive-complexity
  useEffect(() => {
    // eslint-disable-next-line complexity
    const filterProducts = mockProducts.filter((product) => {
      const verifyBrand = brand && brand !== 'brand'
        ? product.brand_name === brand : true;
      const verifyType = type && type !== 'tipo'
        ? product.type === type : true;
      const verifyDelivery = delivery && delivery !== 'entrega'
        ? product.delivery === delivery : true;
      const verifyGender = gender && gender !== 'genero'
        ? product.group_name === gender : true;
      const verifyCategory = category && category !== 'categoria'
        ? product.category_name === category : true;
      const verifySubcategory = subcategory && subcategory !== 'subcategoria'
        ? product.sub_category === subcategory : true;
      return verifyBrand && verifyType && verifyDelivery && verifyGender
      && verifyCategory && verifySubcategory;
    });
    setFilteredProducts(filterProducts.filter((product) => product.images.length > 0));
  }, [brand, type, delivery, gender, category, subcategory, setFilteredProducts]);

  useEffect(() => {
    localStorage.setItem('linkSelected', JSON.stringify(selectedProducts));
  }, [selectedProducts]);

  const selectProduct = (product) => {
    setSelectedProducts((prev) => [...prev, product]);
    if (selectedProducts.includes(product)) {
      setSelectedProducts((prev) => prev
        .filter((prevProduct) => prevProduct !== product));
    }
  };

  return (
    <Container>
      <Header
        logo
        title={ (
          <span
            style={ {
              textTransform: 'none',
            } }
          >
            <span
              style={ {
                fontWeight: 'medium',
                fontSize: '18px',
                color: '#ffffff',
              } }
            >
              CRIAR LINK&apos;s

            </span>
            <br />
            (MIX de PRODUTOS ou
            {' '}
            <br />
            {' '}
            ECOMMERCE TRADICIONAL)
          </span>
        ) }
        routeBack="/functions"
      >
        <LogoHeader src={ logo } />
      </Header>
      <AllInputsContainer>
        <TwoInputsContainer>
          <InputSelect
            name="brand"
            onChange={ (e) => setBrand(e.target.value) }
            options={ brandOptions }
          />
          <InputSelect
            name="gender"
            onChange={ (e) => setGender(e.target.value) }
            options={ genderOptions }
          />
        </TwoInputsContainer>
        <TwoInputsContainer>
          <InputSelect
            name="type"
            onChange={ (e) => setType(e.target.value) }
            options={ typeOptions }
          />
          <InputSelect
            name="category"
            onChange={ (e) => setCategory(e.target.value) }
            options={ categoryOptions }
          />
        </TwoInputsContainer>
        <TwoInputsContainer>
          <InputSelect
            name="delivery"
            onChange={ (e) => setDelivery(e.target.value) }
            options={ deliveryOptions }
          />

          <InputSelect
            name="subcategory"
            onChange={ (e) => setSubcategory(e.target.value) }
            options={ subcategoryOptions }
          />
        </TwoInputsContainer>

      </AllInputsContainer>
      <RefAndBrandBox>
        <div style={ { display: 'flex', gap: '6px' } }>
          <RefQuantity
            style={ {
              fontWeight: 'normal',
            } }
          >
            Total de referências:
          </RefQuantity>
          <RefQuantity>
            9778
          </RefQuantity>
        </div>
        <InputSelect
          style={ {
            backgroundColor: '#000',
            color: '#fff',
          } }
          name="brandSelected"
          onChange={ (e) => setBrand(e.target.value) }
          options={ brandSelectedOptions }
        />
      </RefAndBrandBox>
      <ProductsContainer>
        {filteredProducts.map((product, index) => (
          <ProductCartCard
            selected={ selectedProducts.includes(product) }
            onClick={ () => selectProduct(product) }
            key={ index }
            imageSrc={ product.images }
            reference={ product.reference }
            colors={ product.colors }
            sizes={ Object.entries(product.sizes) }
            quantity={ 0 }
            discount={ product.discount }
            packPrice={ product.box_price }
            price={ product.price }
            brand={ product.brand_name }
          />
        ))}
      </ProductsContainer>
      <FooterCreateMix
        setSelectedProducts={ setSelectedProducts }
        selectedProducts={ selectedProducts }
        selectedQuantity={ selectedProducts.length }
      />
    </Container>
  );
}
