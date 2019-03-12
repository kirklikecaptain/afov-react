import React from 'react';
import ReactDOM from 'react-dom';

import ReactGA from 'react-ga';
import TagManager from 'react-gtm-module'

// Your top level component
import App from './app/App';


// Export your top level component as JSX (for static rendering)
export default App;

// Render your app
if (typeof document !== 'undefined') {

	ReactGA.initialize('UA-117674715-1');
	TagManager.initialize({ gtmId: 'GTM-K7XWHDW' })

  const renderMethod = module.hot ? ReactDOM.render : ReactDOM.hydrate || ReactDOM.render;

  const render = Comp => {
    renderMethod(<Comp />, document.getElementById('root'));
  };

  // Render!
  render(App);

  // Hot Module Replacement
  if (module.hot) {
    module.hot.accept('./app/App', () => render(require('./app/App').default));
  }
}
