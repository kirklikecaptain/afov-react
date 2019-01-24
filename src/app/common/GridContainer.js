import React from 'react';
import styled from 'styled-components'

const GridContainer = props => (
	<Grid {...props}>
		{props.children}
	</Grid>
)

export default GridContainer;

const Grid = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	grid-gap: 1em;
	padding: 1em;

	@media (min-width: 600px) {
		grid-template-columns: repeat(2, 1fr)
	}

	@media (min-width: 1000px) {
		grid-template-columns: repeat(3, 1fr)
	}

	@media (min-width: 1400px) {
		grid-template-columns: repeat(4, 1fr)
	}

`