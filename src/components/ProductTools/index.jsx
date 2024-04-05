import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import cartIcon from '../../assets/icons/cart-icon.svg';
import infoIcon from '../../assets/icons/info-icon.svg';
import searchIcon from '../../assets/icons/search-icon.svg';
import { ProductContext } from '../../context/ProductContext';
import { ProductOrderContext } from '../../context/ProductOrderContext';
import { ProductToolsContext } from '../../context/ProductToolsContext';
import { Separator } from '../ImagesSlider/styles';
import { ImagePreview, ImagesContainer, ToolIcon, ToolsContainer } from './styles';

export default function ProductTools({ setPreviewImage }) {
  const { currentProduct } = useContext(ProductContext);
  const {
    setInfoCard,
    setSearchCard,
    setErrorRef,
  } = useContext(ProductToolsContext);

  const { currentProductOrder } = useContext(ProductOrderContext);

  const images = currentProduct?.images || [];

  const router = useNavigate();

  const enableSearch = () => {
    setSearchCard(true);
    setErrorRef(false);
  };

  const goToCart = () => {
    if (Object.keys(currentProductOrder).length) router('/order');
  };

  return (
    <>
      <ToolsContainer>
        <ToolIcon
          src={ infoIcon }
          onClick={ () => setInfoCard(true) }
        />
        <ToolIcon
          src={ searchIcon }
          onClick={ enableSearch }
        />
        <ImagesContainer>
          {images.map(({ image }, i) => (
            <ImagePreview
              onClick={ (e) => setPreviewImage(e.target.src) }
              src={ image }
              key={ i }
            />
          ))}
        </ImagesContainer>
        <ToolIcon
          src={ cartIcon }
          onClick={ goToCart }
        />
      </ToolsContainer>
      <Separator
        color="#EEEEEE"
        margin={ 20 }
        height={ 1 }
      />
    </>
  );
}
