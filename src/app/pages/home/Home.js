import React from 'react';
import { withRouteData } from 'react-static';
import { hot } from 'react-hot-loader/root';
import VideoCard from '../../components/VideoCard';
import GridContainer from '../../components/GridContainer';
import VideoHero from '../../components/VideoHero';
import MissionStatement from '../../components/MissionStatement';

class HomePage extends React.Component {
  render() {
    const heroVideo = this.props.recentVideos.slice(0, 1)[0];
    const moreVideos = this.props.recentVideos.slice(1, 13);

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
        <MissionStatement />
        <div className='container'>
          <h2 className='no-top'>Recent Videos</h2>
          <GridContainer>
            {moreVideos.map(video => (
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
      </>
    );
  }
}

export default hot(withRouteData(HomePage));
