import React from 'react';
import styled from 'styled-components'
import {Link} from '@reach/router'

const SearchResult = (props) => {
	if (props.artist) {
		return (
			<div>
				<StyledResultCard color={props.info.fields.color} onClick={props.onClick} to={`/${props.info.fields.slug}`}>
					<div className="flex">
						<img className='artist' src={props.info.fields.photo.fields.file.url + '?w=100'} alt="Image"/>
						<div className='artist-name slab'>{props.info.fields.artistName}</div>
					</div>
				</StyledResultCard>
			</div>
		)
	}
	if (props.video) {
		return (
			<div>
				<StyledResultCard color={props.info.fields.artist.fields.color} onClick={props.onClick} to={`/${props.info.fields.artist.fields.slug}/${props.info.fields.slug}`}>
					<div className="flex">
						<img className='video' src={props.info.fields.thumbnail.fields.file.url + '?w=180'} alt="Image"/>
						<div className="info">
							<div className='song-title'>{props.info.fields.title}</div>
							<div className='artist-name slab'>{props.info.fields.artist.fields.artistName}</div>
						</div>
					</div>
				</StyledResultCard>
			</div>
		)
	}
}

export default SearchResult;

const StyledResultCard = styled(Link)`
	color: #333;
	text-decoration: none;
	display: block;
	margin-bottom: 10px;
	@media (min-width: 600px) {
		display: inline-block;
	}

	.flex {
		display: flex;
		align-items: center;
		justify-content: flex-start;
		padding-right: 20px;

		&:hover {
			border-right: solid 3px ${props => props.color ? props.color : "#333"};
		}

		&:hover .artist-name {
			color: ${props => props.color ? props.color : "#333"};
		}
	}

	.song-title {
		margin-bottom: 5px;
	}

	.artist {
		width: 50px;
		height: 50px;
		border-radius: 50%;
		margin-right: 10px;
	}

	.video {
		width: 90px;
		margin-right: 10px;
	}
`