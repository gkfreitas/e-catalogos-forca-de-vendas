import { AiOutlineYoutube } from 'react-icons/ai';
import { BasicButton, ButtonYTStyle } from './styles';

export default function ButtonYT() {
  return (
    <BasicButton>
      <ButtonYTStyle>
        <AiOutlineYoutube
          style={ { marginRight: '4px' } }
          size={ 32 }
        />
        Tutorial App
      </ButtonYTStyle>
    </BasicButton>
  );
}
