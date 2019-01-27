import React, { Component } from 'react';
import { withRouteData } from 'react-static';
import { hot } from 'react-hot-loader/root';
import { Link } from '@reach/router';
import GridContainer from '../../common/GridContainer';
import VideoCard from '../../common/VideoCard';

class ArtistPage extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.artist.fields.artistName}</h1>
        <h2>Artist Info Here</h2>
        <GridContainer>
          {this.props.videos.map(video => (
            <VideoCard
              key={video.sys.id}
              songTitle={video.fields.title}
              artistName={video.fields.artist.fields.artistName}
              postDate={video.fields.uploadDate}
              thumbnail={video.fields.thumbnail.fields.file.url}
              artistPhoto={video.fields.artist.fields.photo.fields.file.url}
              color={video.fields.artist.fields.color}
              videoUrl={`/${video.fields.artist.fields.slug}/${video.fields.slug}`}
            />
          ))}
        </GridContainer>
      </div>
    );
  }
}

export default hot(withRouteData(ArtistPage));
