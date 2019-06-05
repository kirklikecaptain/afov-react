import React, { Component } from 'react';
import styled from 'styled-components';
import { MdSearch } from 'react-icons/md';
import SearchResult from './SearchResult';

export default class Search extends Component {
  state = {
    searchTerm: '',
    artistResults: [],
    videoResults: []
  };

  handleChange = event => {
    this.setState({ searchTerm: event.target.value });
    const capitalizedSearchTerm = this.state.searchTerm.toUpperCase();
    const filteredArtists = this.props.artists.filter(artist => artist.fields.artistName.toUpperCase().includes(capitalizedSearchTerm));
    const filteredVideos = this.props.videos.filter(video => video.fields.title.toUpperCase().includes(capitalizedSearchTerm));
    const filteredVideosByArtist = this.props.videos.filter(video => video.fields.artist.fields.artistName.toUpperCase().includes(capitalizedSearchTerm));
    if (event.target.value.length === 0) {
      this.setState({
        artistResults: [],
        videoResults: []
      });
    } else {
      const combinedVideos = filteredVideos.concat(filteredVideosByArtist);
      const dedupedVideos = [...new Set(combinedVideos)];
      this.setState({
        artistResults: filteredArtists,
        videoResults: dedupedVideos
      });
    }
  };

  clearSearch = () => {
    this.setState(() => ({
      searchTerm: '',
      artistResults: [],
      videoResults: []
    }));
  };
  render() {
    const { searchTerm, artistResults, videoResults } = this.state;
    return (
      <StyledSearch>
        <div className='search-bar'>
          <MdSearch className='search' />
          <input type='text' value={searchTerm} onChange={this.handleChange} placeholder='Search by song name or artist' />
        </div>
        <div className='search-results'>
          {searchTerm.length > 0 && artistResults.length === 0 && videoResults.length === 0 && <p>No Results :(</p>}
          {artistResults.length > 0 && <h5 className='slab'>Artist Profile</h5>}
          {artistResults.map(artist => (
            <SearchResult onClick={this.clearSearch} key={artist.sys.id} artist info={artist} />
          ))}
          {videoResults.length > 0 && <h5 className='slab'>Videos</h5>}
          {this.state.videoResults.map(video => (
            <SearchResult onClick={this.clearSearch} key={video.sys.id} video info={video} />
          ))}
          {videoResults.length > 0 || artistResults.length > 0 ? <div style={{ height: 10 }} /> : null}
        </div>
      </StyledSearch>
    );
  }
}

const StyledSearch = styled.div`
  background: white;
  width: 100%;
  position: relative;
  z-index: 900;

  .search-bar {
    display: flex;
    align-items: center;
    border-bottom: 1px solid #ccc;
    .search {
      margin: 10px;
      @media (min-width: 600px) {
        margin: 15px;
      }
    }
    input {
      font-size: 14px;
      @media (min-width: 600px) {
        font-size: 14px;
      }
      width: 300px;
      padding: 5px 0px;
      border: none;
      border-bottom: solid 1px transparent;
      transition: border 0.2s ease-in-out;

      &:focus {
        outline: none;
        border-bottom: solid 1px #999;
      }
      &::placeholder {
        color: #999;
      }
    }
  }

  .search-results {
    position: absolute;
    background: white;
    top: 100%;
    left: 0;
    right: 0;
    padding: 0 20px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  }
`;
