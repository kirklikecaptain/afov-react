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
        <h2 className='slab'>{artistName}</h2>
        <p>{videoCount} Videos</p>
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

  .header {
    height: 130px;
    border-radius: 10px 10px 0 0;
    background-color: ${props => (props.color ? props.color : '#333')};
    background-image: url(${bg});
    background-repeat: repeat;
  }
  img {
    margin-top: -100px;
    display: inline-block;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    border: 6px white solid;
		background: white;
  }
`;
