import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from '@reach/router';
import Youtube from 'react-youtube';

class VideoHero extends Component {
	state = {
		player: null
	};

	hexToRgbA(hex){
    var c;
    if(/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)){
        c= hex.substring(1).split('');
        if(c.length== 3){
            c= [c[0], c[0], c[1], c[1], c[2], c[2]];
        }
        c= '0x'+c.join('');
        return 'rgba('+[(c>>16)&255, (c>>8)&255, c&255].join(',')+',1)';
    }
    throw new Error('Bad Hex');
	}

	onReady = event => {
		// access to player in all event handlers via event.target
		event.target.mute();
		this.setState({ player: event.target });
	};

	onPlay = () => {
		this.state.player.setPlaybackQuality('small');
	};

	onEnd = event => {
		event.target.playVideo();
	};

	render() {
		const { artist, title, color, videoUrl, videoId } = this.props;
		const videoOptions = {
			playerVars: {
				// https://developers.google.com/youtube/player_parameters
				autoplay: 1,
				controls: 0,
				rel: 0,
				showInfo: 0,
				autoHide: 0,
				enableJsApi: 1,
				cc_load_policy: 0
			}
		};
		return (
			<div>
				<StyledWrapper color={color}>
					<div className='vid'>
						<iframe
							frameBorder='0'
							src={`https://youtube.com/embed/${videoId}?start=60&modestbranding=1&autoplay=1&loop=1&controls=0&showinfo=0&autohide=1&mute=1&vq=hd720&playlist=${videoId}`}
						/>
						<div className='cover' />
						<div className="cover-gradient" />
					</div>
					<div className='text-box'>
						<div className='text'>
							<h1>{artist}</h1>
							<p className='song-title'>{title}</p>
							<p>
								{color} / {videoId}
							</p>
							<StyledCta color={color} to={videoUrl}>
								Watch Now
							</StyledCta>
						</div>
					</div>
				</StyledWrapper>
			</div>
		);
	}
}

export default VideoHero;

const StyledCta = styled(Link)`
	display: inline-block;
	padding: 10px 20px;
	background: ${props => (props.color ? props.color : '#333')};
	border-radius: 3px;
	text-decoration: none;
	color: rgba(255, 255, 255, 1);
	text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.4);
`;

const StyledWrapper = styled.div`
	position: relative;
	background: white;

	.vid {
		position: relative;
		width: 900px;
		height: 500px;
		overflow: hidden;
		background: white;
		iframe {
			display: block;
			width: 100%;
			height: 100%;
			transform: scale(1.6);
		}
	}

	.cover {
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		background-image: linear-gradient(to left, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0));
	}

	.cover-gradient {
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		mix-blend-mode: color;
		background-image: linear-gradient(to left, transparent, ${props => props.color ? props.color : '#333'});
	}

	.text-box {
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		display: flex;
		align-items: center;
		justify-content: flex-end;
		padding-right: 400px;

		.song-title {
			color: ${props => (props.color ? props.color : '#333')};
		}
	}

	.text {
		width: 500px;
		background: white;
		padding: 30px;
		border-left: solid 4px ${props => (props.color ? props.color : '#333')};
		h1 {
			margin: 0 0 10px 0;
		}
	}
`;
