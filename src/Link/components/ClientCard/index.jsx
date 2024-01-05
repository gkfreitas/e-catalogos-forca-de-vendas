import {
  CardContainer,
  CardTitle,
  InfoContent,
  InfoTag,
  InfoTagContainer,
} from './styles';

export default function ClientCard({ clientName, cnpj, fantasyName, email,
  whatsapp, uf }) {
  return (
    <CardContainer>
      <CardTitle>{clientName}</CardTitle>
      <InfoTagContainer>
        <InfoTag>
          CNPJ:
          {' '}
          <InfoContent>
            {cnpj}
            {' '}
            (
            {uf}
            )
          </InfoContent>
        </InfoTag>

        <InfoTag>
          N.Fantasia:
          {' '}
          <InfoContent>{fantasyName}</InfoContent>
        </InfoTag>
        <InfoTag>
          E-mail:
          {' '}
          <InfoContent>{email}</InfoContent>
        </InfoTag>

        <InfoTag>
          Whatsapp:
          {' '}
          <InfoContent>{whatsapp}</InfoContent>
        </InfoTag>
      </InfoTagContainer>
    </CardContainer>
  );
}
