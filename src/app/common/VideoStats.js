import React, { Component } from 'react';


class VideoStats extends Component {
	state = {
		stats: [],
		loaded: false
	}

	getVideoStats() {
		const APIKEY = 'AIzaSyD8qayNDpzhSeB1ZGjOqUJ8YjSSg6ChKr0'
		const videoUrl = `https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${this.props.videoId}&key=${APIKEY}`
		fetch(videoUrl).then(res => res.json()).then(res => this.setState({stats: res.items[0].statistics, loaded: true}))
	}


	componentDidMount() {
		this.getVideoStats()
	}
	render() {
		const { likeCount, viewCount} = this.state.stats
		return (
			<div>{this.state.loaded ? <div>{viewCount} Views | {likeCount} Likes</div> : ''}</div>
		);
	}
}

export default VideoStats;