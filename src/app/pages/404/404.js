import React, { Component } from 'react';
import balls from './404.jpg';

const NotFound = () => {
  return (
    <div className='full-width'>
      <div style={{ maxWidth: '500px', margin: 'auto' }} className='container'>
        <img src={balls} alt="Ain't found it!" />
        <h1>404: We ain't found shit!</h1>
      </div>
    </div>
  );
};

export default NotFound;
