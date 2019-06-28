import React, { Fragment } from 'react';
import { useRouteData, Head } from 'react-static';
import { Link } from '@reach/router';
import styled from 'styled-components';
import GridContainer from '../../components/GridContainer';
import VideoCard from '../../components/VideoCard';

const VideoIndex = () => {
  // printPages() {
  //   let links = [];
  //   for (let i = 1; i < this.props.totalPages + 1; i++) {
  //     if (i === this.props.currentPage) {
  //       links.push(
  //         <span className='page current' key={i}>
  //           {this.props.currentPage}
  //         </span>
  //       );
  //     } else {
  //       links.push(
  //         <Link className='page link' key={i} to={`/videos/page/${i}`}>
  //           {i}
  //         </Link>
  //       );
  //     }
  //   }
  //   return links;
  // }

  const { allVideos } = useRouteData();
  return (
    <Fragment>
      <Head>
        <title>All Videos | A Fistful of Vinyl</title>
      </Head>
      <div className='container'>
        <StyledHeader>
          <h1 className='no-top'>All Videos</h1>
          {/* <div className='pagination'>Page {this.printPages()}</div> */}
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
