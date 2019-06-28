import React from 'react';
import styled from 'styled-components';
import { Link } from '@reach/router';

const SearchResult = ({ video, artist, info, onClick }) => {
  if (artist) {
    return (
      <div>
        <StyledResultCard color={info.color} onClick={onClick} to={`/${info.slug}`}>
          <div className='flex'>
            <img className='artist' src={info.photo + '?w=100'} alt='Image' />
            <div className='artist-name slab'>{info.artistName}</div>
          </div>
        </StyledResultCard>
      </div>
    );
  }
  if (video) {
    return (
      <div>
        <StyledResultCard
          color={info.color}
          onClick={onClick}
          to={`/${info.artistSlug}/${info.videoSlug}`}
        >
          <div className='flex'>
            <img className='video' src={info.thumbnail + '?w=180'} alt='Image' />
            <div className='info'>
              <div className='song-title'>{info.title}</div>
              <div className='artist-name slab'>{info.artistName}</div>
            </div>
          </div>
        </StyledResultCard>
      </div>
    );
  }
};

export default SearchResult;

const StyledResultCard = styled(Link)`
  color: #333;
  text-decoration: none;
  display: block;
  margin-bottom: 5px;
  @media (min-width: 600px) {
    display: inline-block;
  }

  .flex {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 5px 20px 5px 0;

    .artist-name {
      font-weight: bold;
    }

    &:hover {
      border-right: solid 3px ${props => (props.color ? props.color : '#333')};
    }

    &:hover .artist-name {
      color: ${props => (props.color ? props.color : '#333')};
    }
  }

  .artist {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-right: 10px;
  }

  .video {
    width: 90px;
    margin-right: 10px;
  }
`;
