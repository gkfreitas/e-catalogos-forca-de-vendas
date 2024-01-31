import { useState, useEffect } from 'react';
import { AiOutlineYoutube } from 'react-icons/ai';
import { BasicButton, ButtonYTStyle, ButtonLinkVideo, ButtonTime } from './style';
import videos from './linkVideos';

function findIndexVideo(name, setVideoProps) {
  const indexVideo = videos.findIndex((video) => video.name === name);
  const { name: videoName, link: videoLink,
    duration: videoDuration } = videos[indexVideo];

  console.log(videoDuration);

  setVideoProps({ name: videoName, videoLink, duration: videoDuration });
}

export default function ButtonYT({ name }) {
  const [videoProps, setVideoProps] = useState({ name: '', link: '', duration: '' });

  console.log(videoProps.duration);

  useEffect(() => {
    findIndexVideo(name, setVideoProps);
  }, []);

  return (
    <ButtonLinkVideo
      href={ `${videoProps.videoLink}` }
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
