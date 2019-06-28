import React, { useState } from 'react';
import { useSiteData } from 'react-static';
import styled from 'styled-components';
import { MdSearch } from 'react-icons/md';
import SearchResult from './SearchResult';

const Search = () => {
  const { videos, artists } = useSiteData();

  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState({
    artistResults: [],
    videoResults: []
  });

  const handleChange = event => {
    setSearchTerm(event.target.value);
    const normalizedSearchTerm = searchTerm.toLowerCase();

    const filteredArtists = artists.filter(artist =>
      artist.artistName.toLowerCase().includes(normalizedSearchTerm)
    );
    const filteredVideos = videos.filter(video =>
      video.title.toLowerCase().includes(normalizedSearchTerm)
    );
    const filteredVideosByArtist = videos.filter(video =>
      video.artistName.toLowerCase().includes(normalizedSearchTerm)
    );

    if (event.target.value.length === 0) {
      setResults({
        artistResults: [],
        videoResults: []
      });
    } else {
      const combinedVideos = filteredVideos.concat(filteredVideosByArtist);
      const dedupedVideos = [...new Set(combinedVideos)];
      setResults({
        artistResults: filteredArtists,
        videoResults: dedupedVideos
      });
    }
  };

  const clearSearch = () => {
    setSearchTerm('');
    setResults({
      artistResults: [],
      videoResults: []
    });
  };

  const { artistResults, videoResults } = results;
  return (
    <StyledSearch>
      <div className='search-bar'>
        <MdSearch className='search' />
        <input
          type='text'
          value={searchTerm}
          onChange={e => handleChange(e)}
          placeholder='Search by song name or artist'
        />
      </div>
      <div className='search-results'>
        {searchTerm.length > 0 && artistResults.length === 0 && videoResults.length === 0 && (
          <p>No Results :(</p>
        )}
        {artistResults.length > 0 && <h5 className='slab'>Artist Profile</h5>}
        {artistResults.map(artist => (
          <SearchResult onClick={clearSearch} key={artist.id} artist info={artist} />
        ))}
        {videoResults.length > 0 && <h5 className='slab'>Videos</h5>}
        {videoResults.map(video => (
          <SearchResult onClick={clearSearch} key={video.id} video info={video} />
        ))}
        {videoResults.length > 0 || artistResults.length > 0 ? (
          <div style={{ height: 10 }} />
        ) : null}
      </div>
    </StyledSearch>
  );
};

export default Search;

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
