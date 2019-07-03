import React, { Fragment } from 'react';
import { useRouteData, Head } from 'react-static';
import styled from 'styled-components';
import JsonLd from '../../components/JsonLd';
import VideoPlayer from '../../components/VideoPlayer';
import RelatedVideos from '../../components/RelatedVideos';
import useTrackPageView from '../../hooks/useTrackPageView';

const VideoPage = () => {
  useTrackPageView();
  const { video, otherVideos } = useRouteData();

  const json = {
    '@context': 'http://schema.org',
    '@type': 'VideoObject',
    name: `${video.fields.title} | ${video.fields.artist.fields.artistName} | A Fistful of Vinyl`,
    description: video.fields.shortDescription,
    thumbnailUrl: [`https:${video.fields.thumbnail.fields.file.url}?w=1200`],
    uploadDate: video.fields.uploadDate,
    contentUrl: 'https://www.youtube.com/watch?v=' + video.fields.videoId,
    embedUrl: 'https://www.youtube.com/embed/' + video.fields.videoId,
    publisher: {
      '@type': 'Organization',
      name: 'A Fistful of Vinyl',
      sameAs: 'https://www.afistfulofvinyl.com/',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.afistfulofvinyl.com/afov.jpg',
        width: 500,
        height: 500
      }
    }
  };

  return (
    <Fragment>
      <Head>
        <title>
          {video.fields.title} | {video.fields.artist.fields.artistName} | A Fistful of Vinyl
        </title>
        <meta name='description' content={video.fields.shortDescription} />
        <link
          rel='canonical'
          href={`https://www.afistfulofvinyl.com/${video.fields.artist.fields.slug}/${video.fields.slug}/`}
        />
        <meta property='og:site_name' content='A Fistful of Vinyl' />
        <meta property='og:title' content={`${video.fields.title} | ${video.fields.artist.fields.artistName}`} />
        <meta property='og:description' content={video.fields.shortDescription} />

        <meta property='og:type' content='video' />
        <meta property='og:url' content={`https://www.youtube.com/watch?v=${video.fields.videoId}`} />

        <meta name='twitter:card' value='summary' />
        <meta name='twitter:title' value={`${video.fields.title} | ${video.fields.artist.fields.artistName}`} />
        <meta name='twitter:site' value='@afistfulofvinyl' />
        <meta name='twitter:description' value={video.fields.shortDescription} />
        <meta name='twitter:player' value={`https://www.youtube.com/embed/'${video.fields.videoId}`} />
        <meta name='twitter:player:width' value='1280' />
        <meta name='twitter:player:height' value='720' />
      </Head>
      <JsonLd json={json} />
      <StyledLayout>
        <VideoPlayer video={video} />
        {otherVideos.length > 0 && <RelatedVideos artist={video.fields.artist} relatedVideos={otherVideos} />}
      </StyledLayout>
    </Fragment>
  );
};

export default VideoPage;

const StyledLayout = styled.div`
  @media (min-width: 1000px) {
    padding: 1.5em;
    display: grid;
    grid-gap: 1.5em;
    max-width: 2000px;
    grid-template-columns: auto 250px;
  }

  @media (min-width: 1800px) {
    grid-template-columns: auto 600px;
  }
`;
