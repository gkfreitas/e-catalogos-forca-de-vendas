import { SkeletonCard } from '../SkeletonCard';
import { List, Item } from './style';

export function SkeletonList({ width, height, quantityCard, children, ...rest }) {
  const skeletonCardQuantity = quantityCard || 5;
  let skeletonCardList = [];

  for (let i = 0; i < skeletonCardQuantity; i++) {
    skeletonCardList = [
      ...skeletonCardList,
      <SkeletonCard key={ i } width={ width } height={ height } />,
    ];
  }

  return (
    <List { ...rest }>
      {
        skeletonCardList?.map((card, i) => (
          <Item key={ i }>
            {card}
            {children}
          </Item>
        ))
      }
    </List>
  );
}
