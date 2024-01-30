import React, { useState, useEffect } from 'react';
import { AiOutlineYoutube } from 'react-icons/ai';
import { BasicButton, ButtonYTStyle, ButtonLinkVideo } from './style';
import videos from './linkVideos'

function findIndexVideo(name, setVideoProps) {
  const indexVideo = videos.findIndex(video => video.name === name);
  const {name:videoName, link:videoLink} = videos[indexVideo]
  
  setVideoProps({name: videoName, videoLink})
}

export default function ButtonYT({name, link}) {

  const [videoProps, setVideoProps] = useState({name: '', link: ''})

  useEffect(() => {
    findIndexVideo(name, setVideoProps)
  },[])

  return (
    <ButtonLinkVideo 
      href={`${videoProps.videoLink}`}
      target='_blank'>
        <BasicButton>
          <ButtonYTStyle>
            <AiOutlineYoutube
              style={ { 
                  marginRight: '4px',
                  minWidth: '55px',
                  minHeight: '55px'
              } }
            />
            {videoProps.name}
          </ButtonYTStyle>
        </BasicButton>
    </ButtonLinkVideo>
  );
}
