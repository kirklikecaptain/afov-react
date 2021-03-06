import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from '@reach/router';
import ReactMarkdown from 'react-markdown';
import moment from 'moment';
import VideoStats from './VideoStats';

class VideoPlayer extends Component {
  render() {
    const { title, artist, videoId, uploadDate, longDescription } = this.props.video.fields;

    return (
      <StyledVideoPlayer color={artist.fields.color}>
        <div className='video-container'>
          <iframe
            className='video-frame'
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
            frameBorder='0'
            allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
          />
        </div>
        <div className='video-info'>
          <h1>{title}</h1>
          <Link to={`/${artist.fields.slug}`}>
            <div className='artist-link'>
              <img className='avatar' src={artist.fields.photo.fields.file.url + '?w=60'} alt='' />{' '}
              <h2 className='slab'>{artist.fields.artistName}</h2>
            </div>
          </Link>
          <VideoStats videoId={videoId} />
          <p>Posted {moment(uploadDate).fromNow()}</p>
          <div>
            <ReactMarkdown source={longDescription} />
          </div>
        </div>
      </StyledVideoPlayer>
    );
  }
}

export default VideoPlayer;

const StyledVideoPlayer = styled.div`
  .thumb-box {
    position: relative;
    width: 100%;
    padding-bottom: 56.25%;

    .thumbnail {
      position: absolute;
      top: 0;
      left: 0;
      display: block;
      width: 100%;
    }

    .play-button-box {
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .play-button {
      background: #999;
      display: block;
      width: 100%;
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      padding: 0;
      margin: 0;
      cursor: pointer;
      border: none;
      background: transparent;
      color: white;
      font-size: 5em;
      transition: transform 0.2s ease;
      &:hover {
      }
      &:active {
        outline: none;
      }
    }
  }

  .video-container {
    overflow: hidden;
    padding-bottom: 56.25%;
    position: relative;
    height: 0;
    background: black;
  }

  .video-frame {
    display: block;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    position: absolute;
  }

  h1 {
    color: ${props => (props.color ? props.color : '#333')};
    margin-top: 0;
    margin-bottom: 10px;
    font-size: 2rem;
  }

  .video-info {
    padding: 1.5em;
  }

  .artist-link {
    display: flex;
    align-items: center;
    margin-bottom: 24px;
    h2 {
      margin: 0;
    }
  }

  @media (min-width: 1000px) {
    .video-info {
      padding: 0;
    }
    h1 {
      margin-top: 1rem;
      font-size: 2.5rem;
    }
  }

  .avatar {
    display: inline-block;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 10px;
  }

  a {
    color: #333;
    display: inline-block;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;
