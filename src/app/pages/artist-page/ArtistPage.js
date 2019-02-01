import React, { Component } from 'react';
import { withRouteData } from 'react-static';
import { hot } from 'react-hot-loader/root';
import styled from 'styled-components'
import Markdown from 'react-markdown'
import GridContainer from '../../common/GridContainer';
import VideoCard from '../../common/VideoCard';

class ArtistPage extends Component {
  render() {
		const {videos, artist} = this.props
    return (
      <div className='container'>
				<StyledInfo color={artist.fields.color}>
					<img src={artist.fields.photo.fields.file.url} alt=""/>
					<div>
						<h1 className='slab no-top'>{artist.fields.artistName}</h1>
						<Markdown>
							{artist.fields.longDescription}
						</Markdown>
					</div>

				</StyledInfo>
        <GridContainer>
          {videos.map(video => (
            <VideoCard
              key={video.sys.id}
              songTitle={video.fields.title}
              postDate={video.fields.uploadDate}
              thumbnail={video.fields.thumbnail.fields.file.url}
              color={video.fields.artist.fields.color}
              videoUrl={`/${video.fields.artist.fields.slug}/${video.fields.slug}`}
            />
          ))}
        </GridContainer>
      </div>
    );
  }
}

export default hot(withRouteData(ArtistPage));

const StyledInfo = styled.div`
	display: flex;
	align-items: flex-start;
	margin-bottom: 1.5em;

	h1 {
		display: inline-block;
		font-size: 4rem;
		padding-bottom: 10px;
		border-bottom: 15px solid ${props => props.color ? props.color : '#333'};
		margin-bottom: 0px;
	}

	img {
		margin-right: 1.5em;
		max-width: 300px;
	}

	a {
		color: ${props => props.color ? props.color : '#333'};
	}
`