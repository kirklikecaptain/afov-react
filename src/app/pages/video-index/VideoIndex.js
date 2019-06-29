import React, { Fragment } from 'react';
import { useRouteData, Head } from 'react-static';
import styled from 'styled-components';
import GridContainer from '../../components/GridContainer';
import Pagination from '../../components/Pagination';
import VideoCard from '../../components/VideoCard';
import useTrackPageView from '../../hooks/useTrackPageView';

const VideoIndex = () => {
  useTrackPageView();

  const { allVideos, totalPages, currentPage } = useRouteData();
  return (
    <Fragment>
      <Head>
        <title>All Videos | A Fistful of Vinyl</title>
        <link rel='canonical' href='https://www.afistfulofvinyl.com/videos/' />
        <meta name='description' content='All AFoV music videos and interviews.' />
      </Head>
      <div className='container'>
        <StyledHeader>
          <h1 className='no-top'>All Videos</h1>
        </StyledHeader>
        <GridContainer gap='20px'>
          {allVideos.map(video => (
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

export default VideoIndex;

const StyledHeader = styled.div`
  display: flex;
  align-items: flex-start;

  .pagination {
    padding-top: 3px;
    padding-left: 30px;
  }

  .page {
    display: inline-block;
    padding: 5px;
    margin: 5px;
  }
  .link {
    color: black;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
  .current {
    padding: 5px;
    color: red;
  }
`;
