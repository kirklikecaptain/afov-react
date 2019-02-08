import React, { Component } from 'react';
import { Link } from '@reach/router';
import Youtube from 'react-youtube';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import { IoIosMicrophone, IoMdMusicalNotes } from 'react-icons/io';

class VideoHero extends Component {
  state = {
    isLoading: true
  };

  onPlay = event => {
    // access to player in all event handlers via event.target
    this.setState({ isLoading: false });
    // loop the video by seeking back to 'start' at 40s mark after 2m
    // this creates a cleaner loop than using the YT option
    setTimeout(() => {
      event.target.seekTo(40);
    }, 120000);
  };

  onReady = event => {
    // lower playback quality for faster load times
    event.target.setPlaybackQuality('small');
  };

  render() {
    const { bandName, songTitle, color, path, videoId } = this.props;
    const opts = {
      width: '100%',
      height: '500',
      host: 'https://www.youtube.com',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        modestbranding: 1,
        autohide: 1,
        autoplay: 1,
        start: 40,
        controls: 0,
        showinfo: 0,
        mute: 1,
        enablejsapi: 1,
        origin: "https://adoring-fermat-3d4eac.netlify.com",
				widget_referrer: "https://adoring-fermat-3d4eac.netlify.com"
      }
    };

    return (
      <StyledYTContainer color={color} isLoading={this.state.isLoading}>
        <Youtube
          videoId={videoId}
          opts={opts}
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
              <h2>{songTitle}</h2>
              <h3 className='slab'>{bandName}</h3>
              <Link className='cta-button' to={path}>
                {this.props.videoType === 'Interview' ? (
                  <IoIosMicrophone className='icon' />
                ) : (
                  <IoMdMusicalNotes className='icon' />
                )}
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
  background: ${props => (props.color ? props.color : '#333')};
  height: 300px;
  overflow: hidden;
  @media (min-width: 600px) {
    height: 500px;
  }

  .video-container {
    height: 500px;
		transform: scale(2.2);
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
    padding: 50px;
    display: flex;
    align-items: center;
  }

  .cta-button {
    background: white;
    font-size: 1rem;
    color: black;
    padding: 16px 30px 16px 20px;
    display: inline-block;
    margin-top: 20px;
    border-radius: 6px;
    text-decoration: none;
    vertical-align: middle;
    line-height: 2em;
    transition: all 0.3s ease;
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
    padding: 30px;
    transition: all 0.3s ease;
    max-width: 70%;

    h2 {
      font-size: 4em;
      font-weight: 700;
      transition: all 0.3s ease;
      margin: 0;
      color: white;
    }

    h3 {
      color: white;
      font-size: 4em;
      margin: 0;
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

  @media (min-width: 1900px) {
    background: ${props => (props.color ? props.color : 'black')};

    .overlay2 {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background: ${props =>
        props.color
          ? `linear-gradient(to right, ${props.color}, ${props.color}, transparent, transparent, transparent, ${props.color}, ${
              props.color
            })`
          : 'linear-gradient(to right, black, black, transparent, transparent, transparent, black, black)'};
    }
  }
`;
