import { LabelContainer, MethodAndDiscountText, MinValueText } from './styles';

export default function LabelPayment({ minValue, discount, method }) {
  return (
    <LabelContainer>
      <MethodAndDiscountText>
        {method}
      </MethodAndDiscountText>
      <MinValueText>
        Mínimo: R$
        {' '}
        {minValue}
      </MinValueText>
      <MethodAndDiscountText>
        Desconto:
        {' '}
        {discount}
        %
      </MethodAndDiscountText>
    </LabelContainer>
  );
}
