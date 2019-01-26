import React, { Component } from 'react';
import styled from 'styled-components'

class ArtistCard extends Component {
	render() {
		return (
			<StyledCard>
				<div className="top">

				</div>
				<img src="avatar" alt="avatar"/>
				<div className="text"></div>
			</StyledCard>
		);
	}
}

export default ArtistCard;

const StyledCard = styled.div`

`