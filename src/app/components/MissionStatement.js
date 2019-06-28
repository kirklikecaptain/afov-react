import React from 'react';
import styled from 'styled-components';

const MissionStatement = () => (
  <StyledSection>
    <h1 className='slab'>
      A Fistful of Vinyl provides a platform to under-appreciated and DIY artists who perform
      meaningful music to better help them find a new audience.
    </h1>
    <p>
      We bring our audience uniquely human interviews and performances every Friday and live on-air
      Thursdays at 9pm Pacific on KXLU 88.9FM and KXLU.com
    </p>
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
    max-width: 1000px;
    line-height: 1.5em;
    @media (min-width: 800px) {
      font-size: 1.7em;
    }
  }

  p {
    max-width: 600px;
    margin: 10px auto 0 auto;
  }
`;
