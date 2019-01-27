import React, { Component } from 'react';
import { Link } from '@reach/router';
import { hot } from 'react-hot-loader/root';
import { withRouteData } from 'react-static';

class VideoPage extends Component {
  render() {
    const { video, otherVideos } = this.props;
    console.log(video);

    return (
      <div>
        <h1>{video.fields.title}</h1>
        <h3>More by {video.fields.artist.fields.artistName}</h3>
        {otherVideos.map(video => (
          <p key={video.sys.id}>{video.fields.title}</p>
        ))}
      </div>
    );
  }
}

export default hot(withRouteData(VideoPage));
