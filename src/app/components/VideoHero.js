import React, { Component } from 'react';
import { Link } from '@reach/router';
import Youtube from 'react-youtube';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import { IoIosMicrophone, IoMdMusicalNotes } from 'react-icons/io';
import texture from '../../assets/asfalt-light.png';

class VideoHero extends Component {
  state = {
    isLoading: true
  };

  onPlay = () => {
    // access to player in all event handlers via event.target
    this.setState({ isLoading: false });
    // loop the video by seeking back to 'start' at 40s mark after 2m
    // this creates a cleaner loop than using the YT option
  };

  onReady = event => {
    // lower playback quality for faster load times
    event.target.setPlaybackQuality('small');
  };

  render() {
    const { bandName, songTitle, color, path, videoId } = this.props;
    return (
      <StyledYTContainer color={color} isLoading={this.state.isLoading}>
        <Youtube
          videoId={videoId}
          opts={{
            width: '100%',
            height: '500',
            host: 'https://www.youtube.com',
            playerVars: {
              // https://developers.google.com/youtube/player_parameters
              version: 3,
              modestbranding: 1,
              autohide: 1,
              autoplay: 1,
              start: 40,
              end: 300,
              loop: 1,
              playlist: videoId,
              cc_load_policy: 0,
              controls: 0,
              showinfo: 0,
              mute: 1,
              enablejsapi: 1,
              origin: 'https://www.afistfulofvinyl.com/',
              widget_referrer: 'https://www.afistfulofvinyl.com'
              // widget_referrer: "https://adoring-fermat-3d4eac.netlify.com"
            }
          }}
          onReady={this.onReady}
          onPlay={this.onPlay}
          className='video-frame'
          containerClassName='video-container'
        />
        <div className='overlay' />
        <div className='overlay2' />
        <Fade ssrReveal left duration={400} delay={1000} distance='100px'>
          <div className='text-container'>
            <div className='text'>
              <div className='new-badge'>NEW</div>
              <h2>{songTitle}</h2>
              <h3 className='slab'>{bandName}</h3>
              <Link className='cta-button' to={path}>
                {this.props.videoType === 'Interview' ? <IoIosMicrophone className='icon' /> : <IoMdMusicalNotes className='icon' />}
                Watch Now
              </Link>
            </div>
          </div>
        </Fade>
      </StyledYTContainer>
    );
  }
}

export default VideoHero;

const StyledYTContainer = styled.div`
  position: relative;
  background: ${props => (props.color ? props.color : '#333')} url(${texture});
  height: 300px;
  overflow: hidden;
  @media (min-width: 600px) {
    height: 500px;
  }

  .video-container {
    height: 500px;
    transform: scale(2.5);
    width: 100%;
    @media (min-width: 600px) {
      height: 500px;
      transform: scale(2);
    }
    overflow: hidden;
    opacity: ${props => (props.isLoading ? '0' : '1')};
    transition: all 3s ease;
  }

  .text-container {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    padding: 20px;
    display: flex;
    align-items: center;
    @media (min-width: 800px) {
      padding: 50px;
    }
  }

  .cta-button {
    display: block;
    padding: 0.5em 0em;
    font-size: 1em;
    color: black;
    border-radius: 6px;
    margin-top: 20px;
    text-decoration: none;
    background: white;
    line-height: 2em;
    transition: all 0.3s ease;
    text-align: center;
    box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.3);

    @media (min-width: 800px) {
      background: white;
      vertical-align: middle;
      padding: 16px 30px 16px 20px;
      display: inline-block;
    }
    &:hover {
      box-shadow: 0 19px 38px rgba(0, 0, 0, 0.2), 0 15px 12px rgba(0, 0, 0, 0.1);
    }
    &:hover .icon {
      color: ${props => (props.color ? props.color : '#333')};
    }

    .icon {
      font-size: 2em;
      margin-right: 14px;
      margin-top: -2px;
      color: #bbb;
      transition: all 0.3s ease;
    }
  }

  .text {
    transition: all 0.3s ease;
    width: 100%;

    @media (min-width: 800px) {
      width: auto;
      padding: 30px;
    }

    .new-badge {
      color: black;
      padding: 5px;
      border-radius: 5px;
      background: white;
      display: inline-block;
      font-size: 0.6rem;
      box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.3);
      margin-bottom: 5px;
      line-height: 1;
    }

    h2 {
      font-size: 4rem;
      font-weight: 700;
      transition: all 0.3s ease;
      margin: 0;
      color: white;
      text-shadow: 1px 2px 3px rgba(0, 0, 0, 0.3);
      @media (max-width: 600px) {
        font-size: 3rem;
      }
    }

    h3 {
      color: white;
      font-size: 4em;
      margin: 0;
      text-shadow: 1px 2px 3px rgba(0, 0, 0, 0.3);
      @media (max-width: 600px) {
        font-size: 2rem;
      }
    }
  }

  .overlay {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    mix-blend-mode: color;
    background: ${props => (props.color ? props.color : '#333')};
  }

  @media not all and (min-resolution: 0.001dpcm) {
    .overlay {
      display: none;
    }

    .overlay2 {
      display: none;
    }
  }

  @media (min-width: 2000px) {
    background: ${props => (props.color ? props.color : 'black')};

    .overlay2 {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background: ${props =>
        props.color
          ? `linear-gradient(to right, ${props.color}, ${props.color}, transparent, transparent, transparent, ${props.color}, ${props.color})`
          : 'linear-gradient(to right, black, black, transparent, transparent, transparent, black, black)'};
    }
  }
`;
