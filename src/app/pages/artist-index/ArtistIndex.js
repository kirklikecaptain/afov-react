import React, { Component } from 'react';
import { withRouteData } from 'react-static';
import { hot } from 'react-hot-loader/root';
import { Link } from '@reach/router';

class ArtistIndex extends Component {
	render() {
		return (
			<div>
				<h1>Artists</h1>
				{this.props.allArtists.map(artist => (
					<div key={artist.sys.id}>
						<h2>{artist.fields.artistName}</h2>
						<Link to={`/${artist.fields.slug}`}>Link to page</Link>
					</div>
				))}
			</div>
		);
	}
}

export default hot(withRouteData(ArtistIndex));
