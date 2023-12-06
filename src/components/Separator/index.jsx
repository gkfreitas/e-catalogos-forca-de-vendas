export default function Separator({ margin, color, height }) {
  return (
    <div
      style={ {
        width: `calc(100% - ${margin}px)`,
        backgroundColor: color,
        height: `${height}px`,
        margin: '0px auto',
      } }
    />
  );
}
