import { useNavigate } from 'react-router-dom';
import BrandCard from '../../../components/BrandCard';
import Header from '../../../components/Header';
import { mockBrands } from '../../../mocks/mockBrands';
import { BrandsContainer, ChoseBrand, OverflowPage } from './styles';

export default function BrandsPage() {
  const router = useNavigate();

  const choseBrand = () => {
    return router('/purchase');
  };

  return (
    <OverflowPage>
      <Header title="Marcas" routeBack="/clients" routeNext="/purchase" />
      <ChoseBrand>Selecione uma marca</ChoseBrand>
      <BrandsContainer>
        {mockBrands.map((brand, i) => (
          <BrandCard
            image={ brand.url_imagem }
            key={ i }
            onClick={ () => choseBrand() }
          />
        ))}
      </BrandsContainer>
    </OverflowPage>
  );
}
