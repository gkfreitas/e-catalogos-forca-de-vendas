import { InputContainer, InputContent, InputTag } from './styles';

export default function InputOrder({ tag, content, width, bgColor }) {
  return (
    <InputContainer $bgColor={ bgColor } $width={ width }>
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
