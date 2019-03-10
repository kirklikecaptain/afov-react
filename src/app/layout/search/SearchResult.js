import React from 'react';
import styled from 'styled-components'
import {Link} from '@reach/router'

const SearchResult = (props) => {
	if (props.artist) {
		return (
			<StyledResultCard to={`/${props.info.fields.slug}`}>
				<img src={props.info.fields.photo.fields.file.url + '?w=50'} alt="Image"/>
				<p>{props.info.fields.artistName}</p>
			</StyledResultCard>
		)
	}
	if (props.video) {
		return (
			<StyledResultCard to='/'>
				<img src={props.info.fields.thumbnail.fields.file.url + '?w=70'} alt="Image"/>
				<p>{props.info.fields.title}</p>
			</StyledResultCard>
		)
	}
}

export default SearchResult;

const StyledResultCard = styled(Link)`
	display: block;
	color: #333;
	text-decoration: none;
`