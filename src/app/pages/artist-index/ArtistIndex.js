import React, { Component } from 'react';
import { withRouteData } from 'react-static';
import { hot } from 'react-hot-loader/root';
import { Link } from '@reach/router';
import styled from 'styled-components';
import GridContainer from '../../common/GridContainer';
import bg from '../../../assets/asfalt-light.png';

class ArtistIndex extends Component {
  render() {
    return (
      <>
        <h1>Artists</h1>
        <GridContainer gap='20px'>
          {this.props.allArtists.map(artist => (
            <Card to={`/${artist.fields.slug}`} color={artist.fields.color} key={artist.sys.id}>
              <div className='header' />
              <img src={artist.fields.photo.fields.file.url + '?w=300'} alt='' />
              {console.log(artist)}
              <h2 className='slab'>{artist.fields.artistName}</h2>
              <p>
                {
                  this.props.allVideos.filter(
                    video => video.fields.artist.fields.artistName === artist.fields.artistName
                  ).length
                }{' '}
                Videos
              </p>
            </Card>
          ))}
        </GridContainer>
      </>
    );
  }
}

export default hot(withRouteData(ArtistIndex));

const Card = styled(Link)`
  text-align: center;
  display: block;
  text-decoration: none;
  color: #333;
  &:hover {
    border: solid red 1px;
  }

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
    border-radius: 50%;
    border: 10px white solid;
  }
`;
