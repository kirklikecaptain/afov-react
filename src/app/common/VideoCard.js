import React, { Component } from 'react';
import styled from 'styled-components';
import {Link} from '@reach/router'

class VideoCard extends Component {
	render() {
		const { songTitle, artistName, thumbnail, artistPhoto, color, videoUrl } = this.props;
		return (
			<StyledCard to={videoUrl} color={color} className='card'>
				<div className='thumb-box'>
					<img src={thumbnail + '?w=400'} className='thumb' alt='Photo' />
					<div className="overlay"></div>
				</div>
				<h2>{songTitle}</h2>
				<div className='artist-row'>
					<img src={artistPhoto + '?w=60'} className='avatar' alt='Band Photo' />
					<h3>{artistName}</h3>
				</div>
			</StyledCard>
		);
	}
}

export default VideoCard;

const StyledCard = styled(Link)`
	display: block;
	text-decoration: none;
	color: #333;
	&:hover {
		.overlay {
			opacity: 0;
		}
	}

	h2 {
		margin: 10px 0 0 0;
	}

	.thumb-box {
		position: relative;
	}

	.thumb {
		display: block;
		width: 100%;
	}

	.overlay {
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		background: ${props => props.color ? props.color : '#333'};
		opacity: 1;
		mix-blend-mode: color;
		transition: .3s all ease;
	}

	.avatar {
		border-radius: 50%;
		display: block;
		width: 30px;
		height: 30px;
		margin-right: 10px;
	}

	.artist-row {
		display: flex;
		align-items: center;
		padding-top: 10px;
		h3 {
			margin: 0;
		}
	}
`;
