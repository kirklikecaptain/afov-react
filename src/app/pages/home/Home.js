import React from 'react';
import { withRouteData } from 'react-static';
import { hot } from 'react-hot-loader/root';
import styled from 'styled-components';
import VideoHero from '../../common/VideoHero';
import Youtube from 'react-youtube';
import VideoCard from '../../common/VideoCard';
import GridContainer from '../../common/GridContainer'

class HomePage extends React.Component {
	state = {
		ready: false
	};

	onReady = e => {
		if (e.data === 1) {
			this.setState({ ready: true });
		}
	};

	render() {
		const heroVideo = this.props.allVideos.slice(0, 1)[0];
		const recentVideos = this.props.allVideos.slice(1, 13);
		console.log(heroVideo)

		const opts = {
			playerVars: {
				origin: 'http://localhost:3000',
				mute: 1,
				autoplay: 1,
				loop: 1,
				controls: 0,
				showinfo: 0,
				autohide: 0,
				enablejsapi: 1,
				modestbranding: 1,
				playlist: 'zFwL301vd4A',
				vq: 'hd720'
			}
		};

		return (
			<>
				<VideoHero
						artist={heroVideo.fields.artist.fields.artistName}
						title={heroVideo.fields.title}
						color={heroVideo.fields.artist.fields.color}
						videoUrl={`/${heroVideo.fields.artist.fields.slug}/${heroVideo.fields.slug}`}
						videoId={heroVideo.fields.videoId}
					/>
				<GridContainer>
					{recentVideos.map(video => (
						<VideoCard
							key={video.sys.id}
							songTitle={video.fields.title}
							artistName={video.fields.artist.fields.artistName}
							postDate={video.fields.uploadDate}
							thumbnail={video.fields.thumbnail.fields.file.url}
							artistPhoto={video.fields.artist.fields.photo.fields.file.url}
							color={video.fields.artist.fields.color}
							videoUrl={`/${video.fields.artist.fields.slug}/${video.fields.slug}`}
						/>
					))}
				</GridContainer>
				{/* <StyledSection>
						<div>
							<Youtube
								videoId='zFwL301vd4A'
								className={this.state.ready ? 'block' : 'hidden'}
								containerClassName='video-container'
								opts={opts}
								onStateChange={(e) => this.onReady(e)}
							/>
						</div>
					</StyledSection> */}
			</>
		);
	}
}

export default hot(withRouteData(HomePage));

const StyledSection = styled.div`
	.hidden {
		display: hidden;
	}
	.block {
		display: block;
	}
`;
