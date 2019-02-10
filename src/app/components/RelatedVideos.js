import React, { Component } from 'react';
import styled from 'styled-components';
import VideoCard from './VideoCard';

class RelatedVideos extends Component {
  render() {
    return (
      <StyledContainer color={this.props.artist.fields.color}>
        <h3 className='slab'>More by {this.props.artist.fields.artistName}</h3>
        <div className='grid'>
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
        </div>
      </StyledContainer>
    );
  }
}

export default RelatedVideos;

const StyledContainer = styled.div`
  .grid {
    display: grid;
    align-content: start;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
    padding: 20px;
    @media (min-width: 1000px) {
      grid-template-columns: 1fr;
      padding: 0;
    }
		@media (min-width: 1600px) {
      grid-template-columns: 1fr 1fr;
      padding: 0;
    }
  }

  h3 {
    margin: 0 0 0 20px;
    display: inline-block;
    padding-bottom: 5px;
    border-bottom: 3px solid ${props => (props.color ? props.color : '#333')};
    @media (min-width: 1000px) {
      margin: 0 0 20px 0;
    }
  }
`;
