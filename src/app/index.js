import React from 'react';
import { Root, Routes, Head, withSiteData } from 'react-static';
import styled from 'styled-components';
import 'sanitize.css';

import './index.css';

import Footer from './layout/footer/Footer';
import Nav from './layout/nav/Nav';

// Asynchronously load Open Sans font.
// Once font is loaded, the `wf-active` class is applied on the html element - See global-style.css
// make sure this code is only executed in-browser via if statement, otherwise it breaks during build

if (typeof window !== 'undefined') {
  const WebFont = require('webfontloader');
  WebFont.load({
    google: {
      families: ['Roboto Slab: 400, 700', 'Roboto']
    }
  });
}

function App(props) {
  return (
    <Root>
      <Head>
        <title>{props.title}</title>
      </Head>
      <StyledContainer>
        <Nav />
        <div className='main-content'>
          <Routes />
          <Footer />
        </div>
      </StyledContainer>
    </Root>
  );
}

export default withSiteData(App);

const StyledContainer = styled.div`
  .container {
    margin: 0 auto;
    max-width: 1200px;
  }

  .noselect {
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
    -khtml-user-select: none; /* Konqueror HTML */
    -moz-user-select: none; /* Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */
    user-select: none;
  }

  @media (min-width: 1400px) {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    .main-content {
      padding-left: 230px;
    }

    .container {
      margin: 0;
    }
  }
`;
