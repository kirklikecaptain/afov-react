import React, { Fragment } from 'react';
import { useRouteData, Head } from 'react-static';
import VideoCard from '../../components/VideoCard';
import GridContainer from '../../components/GridContainer';
import useTrackPageView from '../../hooks/useTrackPageView';

const InterviewIndex = () => {
  useTrackPageView();
  const { interviews } = useRouteData();
  return (
    <Fragment>
      <Head>
        <title>Interviews | A Fistful of Vinyl</title>
      </Head>
      <div className='container'>
        <h1 className='no-top'>Interviews</h1>
        <GridContainer>
          {interviews.map(video => (
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

export default InterviewIndex;
