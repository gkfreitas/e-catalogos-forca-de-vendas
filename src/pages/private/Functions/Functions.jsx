import CardFunction from '../../../components/CardFunction/CardFunction';
import Header from '../../../components/Header';
import { FunctionsContainer } from './styles';

export default function Functions() {
  return (
    <FunctionsContainer>
      <Header title="Funções" routeBack="/export" />
      <CardFunction />
    </FunctionsContainer>
  );
}
