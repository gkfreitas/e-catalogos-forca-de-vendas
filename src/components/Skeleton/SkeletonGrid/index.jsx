import { SkeletonCard } from '../SkeletonCard';
import { Grid } from './style';

export function SkeletonGrid({ width, height, quantityCard, imagesPerview }) {
  const skeletonCardQuantity = quantityCard || 5;
  let skeletonCardList = [];

  for (let i = 0; i < skeletonCardQuantity; i++) {
    skeletonCardList = [
      ...skeletonCardList,
      <SkeletonCard key={ i } width={ width } height={ height } />,
    ];
  }

  return (
    <Grid $imagesPerView={ imagesPerview }>
      {skeletonCardList?.map((card) => card)}
    </Grid>
  );
}
