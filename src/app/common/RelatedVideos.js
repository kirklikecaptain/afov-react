import React, { Component } from 'react';
import styled from 'styled-components'
import VideoCard from './VideoCard'

class RelatedVideos extends Component {
	render() {
		return (
			<StyledContainer>
				<h3 className='slab'>More by {this.props.artist}</h3>
				{this.props.relatedVideos.map(video => (
					<VideoCard
						key={video.sys.id}
						songTitle={video.fields.title}
						postDate={video.fields.uploadDate}
						thumbnail={video.fields.thumbnail.fields.file.url}
						color={video.fields.artist.fields.color}
						videoUrl={`/${video.fields.artist.fields.slug}/${video.fields.slug}`}
					/>
				))}
			</StyledContainer>
		);
	}
}

export default RelatedVideos;

const StyledContainer = styled.div`
	display: grid;
	align-content: start;

	h3 {
		margin-top: 0;
	}
`
