import {
  CardContainer, PackContainer, PackText, SizeCircle,
} from './style';

export default function SizeCard({ size, isPack, quantity }) {
  // const handleSelectSize = () => {
  //   if (opengrid) return;
  //   setCurrentSize(size);
  // };

  return (
    <PackContainer>
      {/* onClick={ handleSelectSize } */}
      {isPack && <PackText>PACK</PackText>}
      {/* $selected={ size === currentSize } */}
      <CardContainer>
        {quantity}
        {!isPack && (
          <SizeCircle>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <circle
                cx="12"
                cy="12"
                r="12"
                fill="#fff"
                stroke="#809CAB"
              />
              <text
                x="50%"
                y="50%"
                dominantBaseline="middle"
                textAnchor="middle"
                fill="#809CAB"
                fontSize={ 14 }
              >
                {size.toUpperCase()}
              </text>
            </svg>
          </SizeCircle>
        )}
      </CardContainer>
    </PackContainer>
  );
}
