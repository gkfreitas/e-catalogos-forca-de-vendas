import { SkeletonContainer } from './style';

export function SkeletonCard({ width, height }) {
  return (
    <SkeletonContainer $width={ width || '250px' } $height={ height || '130px' } />
  );
}
