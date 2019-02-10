import React, { Component } from 'react';
import { withRouteData, Head } from 'react-static';
import { hot } from 'react-hot-loader/root';
import GridContainer from '../../components/GridContainer';
import VideoCard from '../../components/VideoCard';

class MusicIndex extends Component {
  render() {
    return (
			<>
				<Head>
						<title>Music Videos | A Fistful of Vinyl</title>
				</Head>
				<div className='container'>
					<h1 className='no-top'>Music</h1>
					<GridContainer>
						{this.props.musicVideos.map(video => (
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
				</div>
			</>
    );
  }
}

export default hot(withRouteData(MusicIndex));
