import React from 'react';
import styled from 'styled-components';

const MissionStatement = () => (
  <StyledSection>
    <h1 className='slab'>
      A Fistful of Vinyl gives a platform to under-appreciated and DIY artists that perform meaningful music to help them find a new audience. We bring our audience uniquely human performances and interviews every Friday, and Thursdays at 9pm Pacific on KXLU 88.9FM and KXLU.com
    </h1>
  </StyledSection>
);


export default MissionStatement;

const StyledSection = styled.div`
  border-bottom: solid 1px #ddd;
  color: #222;
  padding: 2em 1em;
  text-align: center;
  @media (min-width: 800px) {
    padding: 4em 1em;
  }
  h1 {
    font-size: 1em;
    margin: 0 auto;
    max-width: 25em;
    line-height: 1.5em;
    @media (min-width: 800px) {
      font-size: 1.7em;
    }
  }
`;
