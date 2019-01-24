import React, { Component } from 'react';
import { withRouteData } from 'react-static';
import { hot } from 'react-hot-loader/root';
import { Link } from '@reach/router';

class MusicIndex extends Component {
	render() {
		return (
			<div>
				<h1>Music</h1>
				{this.props.music.map(video => (
					<div key={video.sys.id}>{video.fields.title}</div>
				))}
			</div>
		);
	}
}

export default hot(withRouteData(MusicIndex));
