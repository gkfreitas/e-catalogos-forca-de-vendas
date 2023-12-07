import { InputContainer, InputContent, InputTag } from './styles';

export default function InputOrder({ tag, content, width }) {
  return (
    <InputContainer $width={ width }>
      <InputTag>
        {tag}
        {': '}
        <InputContent>
          {content}
        </InputContent>
      </InputTag>
    </InputContainer>
  );
}
