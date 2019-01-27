import React from 'react';
import { withRouteData } from 'react-static';
import { hot } from 'react-hot-loader/root';
import VideoCard from '../../common/VideoCard';
import GridContainer from '../../common/GridContainer';
import VideoHero from '../../common/VideoHero';

class HomePage extends React.Component {
  render() {
    const heroVideo = this.props.allVideos.slice(0, 1)[0];
    const recentVideos = this.props.allVideos.slice(1, 13);

    return (
      <>
        <VideoHero
          bandName={heroVideo.fields.artist.fields.artistName}
          songTitle={heroVideo.fields.title}
          color={heroVideo.fields.artist.fields.color}
          path={`/${heroVideo.fields.artist.fields.slug}/${heroVideo.fields.slug}`}
          videoId={heroVideo.fields.videoId}
          videoType={heroVideo.fields.videoType}
        />
        <h2 style={{ padding: '0 20px' }}>Recent</h2>
        <GridContainer>
          {recentVideos.map(video => (
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
      </>
    );
  }
}

export default hot(withRouteData(HomePage));
