import React from 'react';
import { withRouteData } from 'react-static';
import VideoCard from '../../components/VideoCard';
import GridContainer from '../../components/GridContainer';
import VideoHero from '../../components/VideoHero';
import HomeHero from '../../components/HomeHero'
import MissionStatement from '../../components/MissionStatement';
import {trackPageView} from '../../../utilities/analytics'

class HomePage extends React.Component {
	componentDidMount() {
		trackPageView()
	}

  render() {
    const heroVideo = this.props.recentVideos.slice(0, 1)[0];
    const moreVideos = this.props.recentVideos.slice(1, 13);

    return (
      <>
				<HomeHero heroVideo={heroVideo}/>
        <MissionStatement />
        <div className='container'>
          <h2 className='no-top'>Recent Videos</h2>
          <GridContainer>
            {moreVideos.map(video => (
              <VideoCard
                key={video.sys.id}
                songTitle={video.fields.title}
                artistName={video.fields.artist.fields.artistName}
                uploadDate={video.fields.uploadDate}
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

export default withRouteData(HomePage);
