import React, { Component } from 'react'
import styled from 'styled-components';
import SearchResult from './SearchResult'


export default class Search extends Component {
	state = {
		searchTerm: '',
		artistResults: [],
		videoResults: []
	}

	handleChange = event => {
		this.setState({searchTerm: event.target.value})
		const capitalizedSearchTerm = this.state.searchTerm.toUpperCase()
		const filteredArtists = this.props.artists.filter(artist => artist.fields.artistName.toUpperCase().includes(capitalizedSearchTerm))
		const filteredVideos = this.props.videos.filter(video => video.fields.title.toUpperCase().includes(capitalizedSearchTerm))
		const filteredVideosByArtist = this.props.videos.filter(video => video.fields.artist.fields.artistName.toUpperCase().includes(capitalizedSearchTerm))
		if (event.target.value.length === 0) {
			this.setState({
				artistResults: [],
				videoResults: []
			})
		} else {
			const combinedVideos = filteredVideos.concat(filteredVideosByArtist)
			const dedupedVideos = [...new Set(combinedVideos)]
			this.setState({
				artistResults: filteredArtists,
				videoResults: dedupedVideos
			})
		}
	}

	render() {
		const {searchTerm, artistResults, videoResults} = this.state
		return (
			<StyledSearch>
				<h2 className='no-top'>Search</h2>
				<input type="text" value={this.state.value} onChange={this.handleChange} placeholder='Search by song name or artist'/>
				{searchTerm.length > 0 && artistResults.length === 0 && videoResults.length === 0 && <p>No Results :(</p>}
				{artistResults.length > 0 && <h5 className='slab'>Artist Profile</h5>}
				{artistResults.map(artist => (
					<SearchResult key={artist.sys.id} artist info={artist} />
				))}
				{videoResults.length > 0 && <h5 className='slab'>Videos</h5>}
				{this.state.videoResults.map(video => (
					<SearchResult key={video.sys.id} video info={video}/>
				))}
			</StyledSearch>
		)
	}
}


const StyledSearch = styled.div`
	background: white;
	border: dashed blue 1px;
	padding: 20px;
	width: 100%;
	z-index: 1000;

	input {
		width: 300px;
		padding: 10px;
	}
`