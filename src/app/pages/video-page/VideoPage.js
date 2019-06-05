import React, { Fragment } from 'react';
import { useRouteData, Head } from 'react-static';
import styled from 'styled-components';
import VideoPlayer from '../../components/VideoPlayer';
import RelatedVideos from '../../components/RelatedVideos';

const VideoPage = () => {
	const { video, otherVideos } = useRouteData();
	return (
		<Fragment>
			<Head>
				<title>
					{video.fields.title} | {video.fields.artist.fields.artistName} | A Fistful of Vinyl
				</title>
			</Head>
			<StyledLayout>
				<VideoPlayer video={video} />
				{otherVideos.length > 0 && <RelatedVideos artist={video.fields.artist} relatedVideos={otherVideos} />}
			</StyledLayout>
		</Fragment>
	);
}

export default VideoPage;

const StyledLayout = styled.div`
  @media (min-width: 1000px) {
    padding: 1.5em;
    display: grid;
    grid-gap: 1.5em;
    max-width: 2000px;
    grid-template-columns: auto 250px;
  }

  @media (min-width: 1800px) {
    grid-template-columns: auto 600px;
  }
`;
