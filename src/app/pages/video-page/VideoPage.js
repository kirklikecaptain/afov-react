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
    thumbnailUrl: [`${video.fields.thumbnail.fields.file.url}?w=1200`],
    uploadDate: video.field.uploadDate,
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
        <JsonLd json={json} />
      </Head>
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
