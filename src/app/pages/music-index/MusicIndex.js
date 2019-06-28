import React, { Fragment } from 'react';
import { useRouteData, Head } from 'react-static';
import styled from 'styled-components';
import GridContainer from '../../components/GridContainer';
import VideoCard from '../../components/VideoCard';
import Pagination from '../../components/Pagination';
import useTrackPageView from '../../hooks/useTrackPageView';

const MusicIndex = () => {
  useTrackPageView();
  const { currentPage, musicVideos, totalPages } = useRouteData();
  return (
    <Fragment>
      <Head>
        <title>Music Videos | A Fistful of Vinyl</title>
      </Head>
      <div className='container'>
        <StyledHeader>
          <h1 className='no-top'>Music Videos</h1>
        </StyledHeader>
        <GridContainer>
          {musicVideos.map(video => (
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
        <Pagination totalPages={totalPages} currentPage={currentPage} />
      </div>
    </Fragment>
  );
};

export default MusicIndex;

const StyledHeader = styled.div``;
