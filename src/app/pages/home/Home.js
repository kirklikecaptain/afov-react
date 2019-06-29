import React, { Fragment } from 'react';
import { useRouteData, Head } from 'react-static';
import VideoCard from '../../components/VideoCard';
import GridContainer from '../../components/GridContainer';
import HomeHero from '../../components/HomeHero';
import MissionStatement from '../../components/MissionStatement';
import useTrackPageView from '../../hooks/useTrackPageView';
import JsonLd from '../../components/JsonLd';

const HomePage = () => {
  useTrackPageView();
  const { recentVideos } = useRouteData();
  const heroVideo = recentVideos[0];
  const moreVideos = recentVideos.slice(1, 13);

  return (
    <Fragment>
      <Head>
        <title>A Fistful of Vinyl | Music and Interviews</title>
        <meta
          name='description'
          content='Live music sessions and interviews. A media platform whose mission is to help under-appreciated and DIY artists find the audience they deserve.'
        />
        <link rel='canonical' href='http://www.afistfulofvinyl.com/' />
      </Head>
      <JsonLd json={json} />
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

const json = {
  '@context': 'http://schema.org',
  '@type': 'Organization',
  name: 'A Fistful of Vinyl',
  url: 'https://www.afistfulofvinyl.com',
  logo: 'https://www.goguardian.com/afov.jpg',
  sameAs: [
    'https://youtube.com/afistfulofvinyl',
    'https://facebook.com/afistfulofvinyl',
    'https://instagram.com/afistfulofvinyl',
    'https://twitter.com/afistfulofvinyl',
    'https://www.linkedin.com/company/afistfulofvinyl'
  ]
};
