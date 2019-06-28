import React from 'react';
import balls from './404.jpg';
import useTrackPageView from '../../hooks/useTrackPageView';

const NotFound = () => {
  useTrackPageView();
  return (
    <div>
      <div
        style={{
          border: 'solid 1px #ddd',
          textAlign: 'center',
          padding: '30px',
          maxWidth: '500px',
          margin: '50px auto'
        }}
        className='container'
      >
        <img src={balls} alt="Ain't found it!" />
        <h1 style={{ marginBottom: 0 }}>404 - Page Not Found</h1>
      </div>
    </div>
  );
};

export default NotFound;
