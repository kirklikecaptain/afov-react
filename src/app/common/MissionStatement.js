import React from 'react';
import styled from 'styled-components'

const MissionStatement = () => {
	return (
		<StyledSection>
			<h1 className='slab'>A Fistful of Vinyl offers artists a platform to reach new audiences and provides a place for music lovers to find their next favorite musicians.</h1>
		</StyledSection>
	);
}

export default MissionStatement;

const StyledSection = styled.div`
	background: #f7f7f7;
	color: #222;
	padding: 3em 1em;
	text-align: center;
	h1 {
		font-size: 1.7em;
		margin: 0 auto 20px auto;
		max-width: 25em;
		line-height: 1.5em;
	}
`

