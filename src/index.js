import React from 'react';
import ReactDOM from 'react-dom';
import TagManager from 'react-gtm-module';

// Your top level component
import App from './app';

// Export your top level component as JSX (for static rendering)
export default App;

// Render your app
if (typeof document !== 'undefined') {
  const tagManagerArgs = {
    gtmId: 'GTM-K7XWHDW'
  };

  TagManager.initialize(tagManagerArgs);

  const renderMethod = module.hot ? ReactDOM.render : ReactDOM.hydrate || ReactDOM.render;

  const render = Comp => {
    renderMethod(<Comp />, document.getElementById('root'));
  };

  // Render!
  render(App);

  // Hot Module Replacement
  if (module.hot) {
    module.hot.accept('./app', () => render(require('./app').default));
  }
}