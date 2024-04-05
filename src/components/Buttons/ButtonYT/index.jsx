import { useState, useEffect } from 'react';
import { AiOutlineYoutube } from 'react-icons/ai';
import { BasicButton, ButtonYTStyle, ButtonLinkVideo, ButtonTime } from './style';
import videos from './linkVideos';

export default function ButtonYT({ name }) {
  const [videoProps, setVideoProps] = useState({ name: '', link: '', duration: '' });

  useEffect(() => {
    function setCurrentVideo() {
      const indexVideo = videos.findIndex((video) => video.name === name);
      const { name: videoName, link, duration } = videos[indexVideo];
      setVideoProps({ name: videoName, link, duration });
    }

    setCurrentVideo();
  }, [name]);

  return (
    <ButtonLinkVideo
      href={ `${videoProps.link}` }
      target="_blank"
    >
      <BasicButton>
        <ButtonYTStyle>
          <AiOutlineYoutube
            style={ {
              marginRight: '4px',
              minWidth: '55px',
              minHeight: '55px',
            } }
          />
          {videoProps.name}
        </ButtonYTStyle>
        <ButtonTime>
          {videoProps.duration}
        </ButtonTime>
      </BasicButton>
    </ButtonLinkVideo>
  );
}
