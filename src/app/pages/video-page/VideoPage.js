import React, { Component } from 'react';
import { hot } from 'react-hot-loader/root';
import { withRouteData, Head } from 'react-static';
import styled from 'styled-components';
import VideoPlayer from '../../components/VideoPlayer';
import RelatedVideos from '../../components/RelatedVideos';

class VideoPage extends Component {
  render() {
    const { video, otherVideos } = this.props;
    return (
			<>
			<Head>
				<title>{video.fields.title} | {video.fields.artist.fields.artistName} | AFoV</title>
			</Head>
      <StyledLayout>
        <VideoPlayer video={video} />
        {otherVideos.length > 0 && <RelatedVideos artist={video.fields.artist} relatedVideos={otherVideos} />}
      </StyledLayout>
			</>
    );
  }
}

export default hot(withRouteData(VideoPage));

const StyledLayout = styled.div`
  @media (min-width: 1000px) {
    padding: 1.5em;
    display: grid;
    grid-gap: 1.5em;
		grid-template-columns: auto 350px;
		max-width: 1400px;
  }
`;
