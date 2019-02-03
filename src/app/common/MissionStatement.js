import React from 'react';
import styled from 'styled-components';

const MissionStatement = () => {
  return (
    <StyledSection>
      <h1 className='slab'>
        A Fistful of Vinyl offers artists a platform to better reach new audiences and provides music lovers a place to
        find their next favorite musicians.
      </h1>
    </StyledSection>
  );
};

export default MissionStatement;

const StyledSection = styled.div`
  border-bottom: solid 1px #ddd;
  color: #222;
  padding: 4em 1em;
  text-align: center;
  h1 {
    font-size: 1.7em;
    margin: 0 auto;
    max-width: 25em;
    line-height: 1.5em;
  }
`;
