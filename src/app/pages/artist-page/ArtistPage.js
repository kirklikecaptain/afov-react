import React, { Component } from 'react';
import { withRouteData } from 'react-static';
import { hot } from 'react-hot-loader/root';
import { Link } from '@reach/router';

class ArtistPage extends Component {
	render() {
		return (
			<div>
				<h1>{this.props.artist.fields.artistName}</h1>
				{this.props.videos.map(video => (
					<div key={video.sys.id}>
						<p>
							<Link to={`/${this.props.artist.fields.slug}/${video.fields.slug}`}>{video.fields.title}</Link>
						</p>
					</div>
				))}
			</div>
		);
	}
}

export default hot(withRouteData(ArtistPage));
