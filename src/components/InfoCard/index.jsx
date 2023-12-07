/* eslint-disable camelcase */
import { useContext } from 'react';
import { ProductContext } from '../../context/ProductContext';
import { ProductToolsContext } from '../../context/ProductToolsContenxt';
import Modal from '../Modal';
import {
  ColorContainer,
  ColorTag,
  ColorTitle,
  InfoContent, InfoTag,
} from './styles';

export default function InfoCard() {
  const { currentProduct } = useContext(ProductContext);
  const { infoCard, setInfoCard } = useContext(ProductToolsContext);
  const {
    name,
    reference,
    brand_name,
    category_name,
    group_name,
    colors } = currentProduct || {};
  const tags = ['Nome do produto', 'Referencia', 'Marca', 'Categoria', 'Genero'];
  const contents = [name, reference, brand_name, category_name, group_name];

  return (
    infoCard
    && (
      <Modal
        padding={ 12 }
        title="Informações"
        disable={ () => setInfoCard(false) }
        alignItems="start"
      >
        <ColorTitle>Cores</ColorTitle>
        {colors && (
          <ColorContainer>
            {colors.map(({ color_name, cod_hex }) => (
              <ColorTag $color={ cod_hex } key={ cod_hex }>
                {color_name}
              </ColorTag>

            ))}
          </ColorContainer>
        )}
        {tags.map((tag, i) => (
          <InfoTag key={ i }>
            {tag}
            :
            {' '}
            <InfoContent>{contents[i]?.replace(/├â/g, 'Ã')}</InfoContent>
          </InfoTag>
        ))}
      </Modal>
    )

  );
}
