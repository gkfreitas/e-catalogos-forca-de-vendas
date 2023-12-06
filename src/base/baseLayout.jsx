import { BaseContainer, BodyContainer } from './styles';

export function BaseLayout({
  children,
}) {
  return (
    <BaseContainer>
      <BodyContainer>{children}</BodyContainer>
    </BaseContainer>
  );
}
