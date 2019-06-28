import React from 'react';
import styled from 'styled-components';
import { Link } from '@reach/router';

const ArtistCard = ({ color, path, image, artistName, videoCount }) => {
  return (
    <StyledCard to={path} color={color}>
      <img src={image} alt={artistName} />
      <div className='info'>
        <h2 className='slab'>{artistName}</h2>
        <p>
          {videoCount} {videoCount === 1 ? 'Video' : 'Videos'}
        </p>
      </div>
    </StyledCard>
  );
};

export default ArtistCard;

const StyledCard = styled(Link)`
  text-align: center;
  display: block;
  text-decoration: none;
  color: #333;
  transition: all 0.2s ease;
  &:hover img {
    transform: scale(1.05);
  }

  img {
    display: inline-block;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    border: 12px solid ${props => (props.color ? props.color : '#333')};
    background: ${props => (props.color ? props.color : '#333')};
    transition: transform 0.2s ease;
  }

  h2 {
    margin: 20px auto 0px auto;
  }

  p {
    color: ${props => (props.color ? props.color : '#333')};
    margin: 0px auto 20px auto;
    display: inline-block;
    padding: 5px 10px;
    border-radius: 5px;
  }
`;
