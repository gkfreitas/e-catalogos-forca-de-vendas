import { useContext } from 'react';
import infoIcon from '../../../assets/icons/info-icon.svg';
import { ProductToolsContext } from '../../../context/ProductToolsContenxt';
import { LinkProductContext } from '../../context/LinkProductContext';
import { Separator } from '../ImagesSlider/styles';
import InfoCard from '../InfoCard';
import { ImagePreview, ImagesContainer, ToolIcon, ToolsContainer } from './styles';

export default function ProductTools({ setPreviewImage }) {
  const { currentProduct } = useContext(LinkProductContext);
  const {
    setInfoCard,
    infoCard,
  } = useContext(ProductToolsContext);

  const images = currentProduct?.images || [];

  return (
    <>
      <ToolsContainer>
        <ToolIcon
          src={ infoIcon }
          onClick={ () => setInfoCard(true) }
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
      </ToolsContainer>
      <Separator
        color="#EEEEEE"
        margin={ 20 }
        height={ 1 }
      />
      {infoCard && <InfoCard />}
    </>
  );
}
