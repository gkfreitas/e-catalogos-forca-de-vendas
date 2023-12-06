import { BrandContainer, BrandImage } from './styles';

export default function BrandCard({ image, onClick }) {
  return (
    <BrandContainer onClick={ onClick }>
      <BrandImage src={ image } alt={ image } />
    </BrandContainer>
  );
}
