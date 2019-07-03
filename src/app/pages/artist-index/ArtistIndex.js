import React, { Fragment } from 'react';
import { useRouteData, Head } from 'react-static';
import GridContainer from '../../components/GridContainer';
import ArtistCard from '../../components/ArtistCard';
import useTrackPageView from '../../hooks/useTrackPageView';

const ArtistIndex = () => {
  useTrackPageView();
  const { allArtists, allVideos } = useRouteData();
  return (
    <Fragment>
      <Head>
        <title>All Artists | A Fistful of Vinyl</title>
        <link rel='canonical' href='https://www.afistfulofvinyl.com/artists/' />
        <meta name='description' content='All artists featured on AFoV.' />
      </Head>
      <div className='container'>
        <h1 className='no-top'>Artists</h1>
        <GridContainer gap='20px'>
          {allArtists.map(artist => (
            <ArtistCard
              key={artist.sys.id}
              path={`/${artist.fields.slug}`}
              color={artist.fields.color}
              image={artist.fields.photo.fields.file.url + '?w=300'}
              artistName={artist.fields.artistName}
              videoCount={
                allVideos.filter(video => video.fields.artist.fields.artistName === artist.fields.artistName).length
              }
            />
          ))}
        </GridContainer>
      </div>
    </Fragment>
  );
};

export default ArtistIndex;
