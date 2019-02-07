import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from '@reach/router';
import bg from '../../assets/asfalt-light.png';

class ArtistCard extends Component {
  render() {
    const { color, path, image, artistName, videoCount } = this.props;
    return (
      <StyledCard to={path} color={color}>
        <div className='header' />
        <img src={image} alt='' />
        <div className='info'>
          <h2 className='slab'>{artistName}</h2>
          <p>
            {videoCount} {videoCount === 1 ? 'Video' : 'Videos'}
          </p>
        </div>
      </StyledCard>
    );
  }
}

export default ArtistCard;

const StyledCard = styled(Link)`
  text-align: center;
  display: block;
  text-decoration: none;
  color: #333;
  border-radius: 0px;
  overflow: hidden;
  transition: all 0.2s ease;

  &:hover .header,
  &:hover p {
    filter: saturate(100%);
  }

  .header {
    position: relative;
    opacity: 1;
    height: 120px;
    background-color: ${props => (props.color ? props.color : '#333')};
    background-image: url(${bg});
    background-repeat: repeat;
    filter: saturate(20%);
    z-index: -100;
  }

  img {
    margin-top: -100px;
    display: inline-block;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    border: 7px white solid;
    background: white;
    transition: border 0.2s ease;
  }

  h2 {
    margin: 20px auto 15px auto;
  }
  p {
    color: white;
    background: ${props => (props.color ? props.color : '#333')};
    margin: 0px auto 20px auto;
    display: inline-block;
    padding: 5px 10px;
    border-radius: 5px;
    filter: saturate(20%);
  }
`;
