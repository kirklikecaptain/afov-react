import React, { Component } from 'react';
import { withRouteData } from 'react-static';
import { hot } from 'react-hot-loader/root';
import { Link } from '@reach/router';

class InterviewIndex extends Component {
	render() {
		return (
			<div>
				<h1>Interviews</h1>
				{this.props.interviews.map(video => (
					<div key={video.sys.id}>{video.fields.title}</div>
				))}
			</div>
		);
	}
}

export default hot(withRouteData(InterviewIndex));
