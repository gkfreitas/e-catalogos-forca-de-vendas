import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FooterPurchase from '../../components/FooterPurchase/FooterPurchase';
import Header from '../../components/Header';
import HiddenCards from '../../components/HiddenCards';
import ImagesSlider from '../../components/ImagesSlider';
import ProductBasicInfos from '../../components/ProductBasicInfos/ProductBasicInfos';
import ProductTools from '../../components/ProductTools';
import { LinkOrderContext } from '../../context/LinkOrderContext';
import { LinkProductContext } from '../../context/LinkProductContext';
import { PurchaseContainer } from './styles';

export default function PurchaseLink() {
  const {
    currentProductIndex,
    setOrderProducts,
    setCurrentProduct,
  } = useContext(LinkProductContext);

  const { currentOrder } = useContext(LinkOrderContext);
  const navigate = useNavigate();
  const [previewImage, setPreviewImage] = useState(false);

  useEffect(() => {
    const products = JSON.parse(localStorage.getItem('selectedProductsLink')) || [];
    const sortedProducts = products.sort((a, b) => a.category_name - b.category_name);
    setOrderProducts(sortedProducts);
    setCurrentProduct(sortedProducts[0]);
  }, [setCurrentProduct, setOrderProducts]);

  useEffect(() => {
    if (!JSON.parse(localStorage.getItem('selectedProductsLink')).length) {
      navigate('/link/availableProducts/:id');
    }
  }, [currentOrder, navigate]);

  useEffect(() => {
    setPreviewImage(false);
  }, [currentProductIndex]);

  return (
    <PurchaseContainer>
      <Header
        title="COMPRAR"
        routeBack="/link/availableProducts/:id"
      />
      <ImagesSlider previewImage={ previewImage } />
      <ProductTools setPreviewImage={ setPreviewImage } />
      <ProductBasicInfos />
      <HiddenCards />
      <FooterPurchase />
    </PurchaseContainer>
  );
}
