import { DateText, MonthText, TextContainer } from './styles';

export default function LabelDate({ month, date }) {
  return (
    <TextContainer>
      <MonthText>{month}</MonthText>
      <DateText>
        (
        {date}
        )
      </DateText>
    </TextContainer>
  );
}
