import React, { Component } from 'react';
import styled from 'styled-components';
import moment from 'moment';
import { Link } from '@reach/router';

class VideoCard extends Component {
  render() {
    const { songTitle, artistName, thumbnail, artistPhoto, color, videoUrl, uploadDate } = this.props;
    return (
      <StyledCard to={videoUrl} color={color} thumbnail={thumbnail} className='card'>
        <div className='thumb-box'>
          <img src={thumbnail + '?w=400'} className='thumb' alt='' />
          <div className='overlay safari_only' />
          <div className='date'>{moment(uploadDate).fromNow()}</div>
        </div>
        <div className='card-text'>
          <h2>{songTitle}</h2>
          {artistName && (
            <div className='artist-row'>
              <img src={artistPhoto + '?w=60'} className='avatar' alt='' />
              <h3 className='slab'>{artistName}</h3>
            </div>
          )}
        </div>
      </StyledCard>
    );
  }
}

export default VideoCard;

const StyledCard = styled(Link)`
  display: block;
  text-decoration: none;
  color: #333;
  min-width: 0;
  overflow: hidden;
  margin-bottom: 20px;
  &:hover h2 {
    color: ${props => (props.color ? props.color : '#333')};
  }
  &:hover .date {
    right: 20px;
  }

  &:hover {
    .overlay {
      opacity: 0;
    }
  }

  .thumb-box {
    position: relative;
    padding-bottom: 56.25%;
    overflow: hidden;
    width: 100%;
  }

  .thumb {
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 100%;
    transition: 0.2s transform ease;
  }

  .overlay {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: ${props => (props.color ? props.color : '#333')};
    mix-blend-mode: color;
    transition: 0.25s all ease;
  }

  .date {
    position: absolute;
    bottom: 20px;
    right: -400px;
    font-size: 12px;
    color: white;
    background: ${props => (props.color ? props.color : '#333')};
    padding: 5px 10px;
    border-radius: 4px;
    transition: all 0.2s ease;
  }

  @media not all and (min-resolution: 0.001dpcm) {
    .overlay {
      display: none;
    }
  }

  .avatar {
    border-radius: 50%;
    display: block;
    width: 30px;
    height: 30px;
    margin-right: 10px;
  }

  .card-text {
    padding: 0px 5px;
  }

  h2 {
    margin: 10px 0 0 0;
    transition: 0.3s all ease;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    max-width: 100%;
    @media (max-width: 600px) {
      font-size: 18px;
    }
  }

  .artist-row {
    display: flex;
    align-items: center;
    padding-top: 10px;

    h3 {
      margin: 0;
      color: #666;
      @media (max-width: 600px) {
        font-size: 16px;
      }
    }
  }
`;
