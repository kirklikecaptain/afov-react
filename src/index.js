import React from 'react';
import ReactDOM from 'react-dom';

// Your top level component
import App from './app/App';
import ReactGA from 'react-ga';

// Export your top level component as JSX (for static rendering)
export default App;

// Render your app
if (typeof document !== 'undefined') {

	ReactGA.initialize('UA-117674715-1');


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
