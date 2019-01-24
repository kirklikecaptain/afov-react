import React, { Component } from 'react';
import { hot } from 'react-hot-loader/root';
import { Link } from '@reach/router/';
import { withRouteData } from 'react-static';

class AllSessions extends Component {
	render() {
		return (
			<div>
				{this.props.allVideos.map(video => (
					<div key={video.sys.id}>
						<h2>{video.fields.artist.fields.artistName}</h2>
						<p>{video.fields.title}</p>
						<Link to={`/${video.fields.artist.fields.slug}/${video.fields.slug}`}>Link to video</Link>
					</div>
				))}
			</div>
		);
	}
}

export default hot(withRouteData(AllSessions));
