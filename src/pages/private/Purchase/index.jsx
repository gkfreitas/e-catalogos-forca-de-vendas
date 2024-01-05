import { useContext, useEffect, useState } from 'react';
import Div100vh from 'react-div-100vh';
import { useNavigate } from 'react-router-dom';
import AddProduct from '../../../components/AddProduct';
import FooterEdit from '../../../components/FooterEdit/FooterEdit';
import HeaderCategory from '../../../components/Header/HeaderCategory';
import HiddenCards from '../../../components/HiddenCards';
import ImagesSlider from '../../../components/ImagesSlider';
import ProductBasicInfos from '../../../components/ProductBasicInfos';
import ProductSizes from '../../../components/ProductSizes';
import ProductTools from '../../../components/ProductTools';
import { ProductContext } from '../../../context/ProductContext';
import { ProductOrderContext } from '../../../context/ProductOrderContext';
import { PurchaseContainer } from './styles';

export default function PurchasePage() {
  const {
    currentProductIndex,
    setOrderProducts,
    setCurrentProduct,
  } = useContext(ProductContext);

  const { currentOrder } = useContext(ProductOrderContext);
  const navigate = useNavigate();

  const [previewImage, setPreviewImage] = useState(false);

  useEffect(() => {
    const products = JSON.parse(localStorage.getItem('selectedProducts')) || [];
    const sortedProducts = products.sort((a, b) => a.category_name - b.category_name);
    setOrderProducts(sortedProducts);
    setCurrentProduct(sortedProducts[0]);
  }, [setCurrentProduct, setOrderProducts]);

  useEffect(() => {
    const { clientName } = currentOrder;
    if (!clientName) {
      navigate('/clients');
    }

    if (!JSON.parse(localStorage.getItem('selectedProducts')).length) {
      navigate('/avaliableProducts');
    }
  }, [currentOrder, navigate]);

  useEffect(() => {
    setPreviewImage(false);
  }, [currentProductIndex]);

  return (
    <Div100vh>
      <PurchaseContainer>
        {localStorage.getItem('editMode') && (
          <FooterEdit />
        )}
        <HeaderCategory
          routeBack="/avaliableProducts"
          routeFunction
        />
        <ImagesSlider previewImage={ previewImage } />
        <ProductTools setPreviewImage={ setPreviewImage } />
        <ProductBasicInfos />
        <AddProduct />
        <ProductSizes />
      </PurchaseContainer>
      <HiddenCards />
    </Div100vh>
  );
}
