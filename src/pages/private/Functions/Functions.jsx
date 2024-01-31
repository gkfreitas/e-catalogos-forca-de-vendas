import CardFunction from '../../../components/CardFunction/CardFunction';
import Header from '../../../components/Header';
// eslint-disable-next-line
import { FunctionsContainer } from './styles';

export default function Functions() {
  return (
    <FunctionsContainer>
      <Header title="Funções" />
      <CardFunction />
    </FunctionsContainer>
  );
}
