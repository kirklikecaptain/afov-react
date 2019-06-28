import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { initSegmentAnalytics } from './libraries/segment';

// Your top level component
import App from './app/App';
export default App;

// Initialize Segment analytics
if (typeof document !== 'undefined') {
  initSegmentAnalytics();
}

// Render method as defined by React-static spec
// document check prevents node from running this block

if (typeof document !== 'undefined') {
  const target = document.getElementById('root');
  const renderMethod = target.hasChildNodes() ? ReactDOM.hydrate : ReactDOM.render;

  const render = Comp => {
    renderMethod(
      <AppContainer>
        <Comp />
      </AppContainer>,
      target
    );
  };

  render(App);

  // Hot Module Replacement
  if (module && module.hot) {
    module.hot.accept('./app/App', () => {
      render(App);
    });
  }
}
