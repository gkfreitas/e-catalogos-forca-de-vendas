/* eslint-disable camelcase */
import { useContext } from 'react';
import { ProductToolsContext } from '../../../context/ProductToolsContext';
import { LinkProductContext } from '../../context/LinkProductContext';
import Modal from '../Modal/Modal';
import {
  ColorContainer,
  ColorTag,
  InfoContent,
  InfoTag,
} from './styles';

export default function InfoCard() {
  const { currentProduct } = useContext(LinkProductContext);
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
        disable={ () => setInfoCard(false) }
        closeIcon
      >
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
