import React, { Fragment } from 'react';
import { useRouteData } from 'react-static';
import VideoCard from '../../components/VideoCard';
import GridContainer from '../../components/GridContainer';
import HomeHero from '../../components/HomeHero';
import MissionStatement from '../../components/MissionStatement';
import useTrackPageView from '../../hooks/useTrackPageView';

const HomePage = () => {
  useTrackPageView();
  const { recentVideos } = useRouteData();
  const heroVideo = recentVideos[0];
  const moreVideos = recentVideos.slice(1, 13);

  return (
    <Fragment>
      <HomeHero heroVideo={heroVideo} />
      <MissionStatement />
      <div className='container'>
        <h2 className='no-top'>Recent Videos</h2>
        <GridContainer>
          {moreVideos.map(video => (
            <VideoCard
              key={video.sys.id}
              songTitle={video.fields.title}
              artistName={video.fields.artist.fields.artistName}
              uploadDate={video.fields.uploadDate}
              thumbnail={video.fields.thumbnail.fields.file.url}
              artistPhoto={video.fields.artist.fields.photo.fields.file.url}
              color={video.fields.artist.fields.color}
              videoUrl={`/${video.fields.artist.fields.slug}/${video.fields.slug}`}
            />
          ))}
        </GridContainer>
      </div>
    </Fragment>
  );
};

export default HomePage;
