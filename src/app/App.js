import React, { Suspense } from 'react';
import { Root, Routes, Head } from 'react-static';
import styled from 'styled-components';

import 'sanitize.css';
import 'sanitize.css/typography.css';
import 'sanitize.css/forms.css';

import Footer from './layout/footer/Footer';
import Nav from './layout/nav/Nav';
import Search from './layout/search/Search';

// Asynchronously load webfonts.
// Once font is loaded, the `wf-active` class is applied on the html element
// make sure this code is only executed in-browser via if statement, otherwise it breaks during build

if (typeof window !== 'undefined') {
  const WebFont = require('webfontloader');
  WebFont.load({
    google: {
      families: ['Roboto Slab:400,700', 'Roboto:400']
    }
  });
}

const App = () => {
  return (
    <Root>
      <Head>
        <title>A Fistful of Vinyl</title>
        <link rel='icon' href='/favicon.ico' type='image/x-icon' />
        <meta
          name='google-site-verification'
          content='VtfZPUmMgU_ym2y3tjmbWyTnup9oFJSPh75fi9MhlTQ'
        />
        <script src='https://apis.google.com/js/platform.js' />
      </Head>
      <StyledContainer>
        <Nav />
        <div className='main-content'>
          <Suspense fallback={<em>Loading...</em>}>
            <Search />
          </Suspense>
          <Suspense fallback={<em>Loading...</em>}>
            <Routes />
          </Suspense>
          <Footer />
        </div>
      </StyledContainer>
    </Root>
  );
};

export default App;

const StyledContainer = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu, Cantarell,
    'Helvetica Neue', sans-serif;

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: normal;
  }

  p {
    line-height: 1.6;
  }

  img {
    max-width: 100%;
  }

  .wf-active {
    font-family: 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen-Sans,
      Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;
  }

  .slab {
    font-family: 'Roboto Slab', serif;
  }

  .no-top {
    margin-top: 0;
  }

  .container {
    margin: 0 auto;
    max-width: 1400px;
    padding: 1em;
  }

  .noselect {
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
    -khtml-user-select: none; /* Konqueror HTML */
    -moz-user-select: none; /* Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */
    user-select: none;
  }

  .main-content {
    position: relative;
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
      max-width: 100%;
      padding: 1.5em;
    }
  }

  /* Minimizes browser scrollbar */

  html {
    overflow: scroll;
    overflow-x: hidden;
  }
  ::-webkit-scrollbar {
    width: 0px; /* remove scrollbar space */
    background: transparent; /* optional: just make scrollbar invisible */
  }
  /* how position indicator in black */
  ::-webkit-scrollbar-thumb {
    background: #333;
  }
`;
