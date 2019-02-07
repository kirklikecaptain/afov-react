import React, { Component } from 'react';
import { hot } from 'react-hot-loader/root';
import { withRouteData, Head } from 'react-static';
import { Link } from '@reach/router';
import styled from 'styled-components';
import GridContainer from '../../components/GridContainer';
import VideoCard from '../../components/VideoCard';

class VideoIndex extends Component {
  printPages() {
    let links = [];
    for (let i = 1; i < this.props.totalPages + 1; i++) {
      if (i === this.props.currentPage) {
        links.push(
          <span className='page current' key={i}>
            {this.props.currentPage}
          </span>
        );
      } else {
        links.push(
          <Link className='page link' key={i} to={`/videos/page/${i}`}>
            {i}
          </Link>
        ); //change this to pure values
      }
    }
    return links;
  }

  render() {
    return (
			<>
				<Head>
					<title>All Videos | A Fistful of Vinyl</title>
				</Head>
				<div className='container'>
					<StyledHeader>
						<h1 className='no-top'>All Videos</h1>
						<div className='pagination'>Page {this.printPages()}</div>
					</StyledHeader>
					<GridContainer gap='20px'>
						{this.props.allVideos.map(video => (
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

export default hot(withRouteData(VideoIndex));

const StyledHeader = styled.div`
  display: flex;
  align-items: flex-start;

  .pagination {
    padding-top: 3px;
    padding-left: 30px;
  }

  .page {
    display: inline-block;
    padding: 5px;
    margin: 5px;
  }
  .link {
    color: black;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
  .current {
    padding: 5px;
    color: red;
  }
`;
