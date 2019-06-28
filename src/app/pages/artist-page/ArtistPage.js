import React, { Fragment } from 'react';
import { useRouteData, Head } from 'react-static';
import styled from 'styled-components';
import Markdown from 'react-markdown';
import GridContainer from '../../components/GridContainer';
import VideoCard from '../../components/VideoCard';
import useTrackPageView from '../../hooks/useTrackPageView';

const ArtistPage = () => {
  useTrackPageView();
  const { videos, artist } = useRouteData();
  return (
    <Fragment>
      <Head>
        <title>{artist.fields.artistName} | Artist Info | A Fistful of Vinyl</title>
      </Head>
      <div className='container'>
        <StyledInfo color={artist.fields.color}>
          <img src={artist.fields.photo.fields.file.url + '?w=360'} alt='' />
          <div className='info'>
            <h1 className='slab no-top'>{artist.fields.artistName}</h1>
            <Markdown>{artist.fields.longDescription}</Markdown>
          </div>
        </StyledInfo>
        <GridContainer>
          {videos.map(video => (
            <VideoCard
              key={video.sys.id}
              songTitle={video.fields.title}
              uploadDate={video.fields.uploadDate}
              thumbnail={video.fields.thumbnail.fields.file.url}
              color={video.fields.artist.fields.color}
              videoUrl={`/${video.fields.artist.fields.slug}/${video.fields.slug}`}
            />
          ))}
        </GridContainer>
      </div>
    </Fragment>
  );
};

export default ArtistPage;

const StyledInfo = styled.div`
  margin-bottom: 1.5em;
  @media (min-width: 600px) {
    display: flex;
  }

  .info {
    max-width: 600px;
  }

  h1 {
    font-size: 2rem;
    display: block;
    text-align: center;
    padding-bottom: 5px;
    @media (min-width: 600px) {
      display: inline-block;
      border-bottom: 10px solid ${props => (props.color ? props.color : '#333')};
      margin: 0;
      font-size: 2.5rem;
    }
  }

  img {
    margin: 0 auto 20px auto;
    flex-shrink: 0;
    display: block;
    width: 180px;
    height: 180px;
    border-radius: 50%;
    background: ${props => (props.color ? props.color : '#333')};
    @media (min-width: 600px) {
      margin: 0 40px 0 0;
      width: 250px;
      height: 250px;
    }
  }

  a {
    color: ${props => (props.color ? props.color : '#333')};
    font-weight: bolder;
  }
`;
