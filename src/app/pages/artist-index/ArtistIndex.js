import React, { Component } from 'react';
import { withRouteData, Head } from 'react-static';
import { hot } from 'react-hot-loader/root';
import GridContainer from '../../components/GridContainer';
import ArtistCard from '../../components/ArtistCard';

class ArtistIndex extends Component {
  render() {
    return (
			<>
				<Head>
						<title>All Artists | A Fistful of Vinyl</title>
				</Head>
				<div className='container'>
					<h1 className='no-top'>Artists</h1>
					<GridContainer gap='20px'>
						{this.props.allArtists.map(artist => (
							<ArtistCard
								key={artist.sys.id}
								path={`/${artist.fields.slug}`}
								color={artist.fields.color}
								image={artist.fields.photo.fields.file.url + '?w=300'}
								artistName={artist.fields.artistName}
								videoCount={
									this.props.allVideos.filter(video => video.fields.artist.fields.artistName === artist.fields.artistName)
										.length
								}
							/>
						))}
					</GridContainer>
				</div>
			</>
    );
  }
}

export default hot(withRouteData(ArtistIndex));
