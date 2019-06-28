import React from 'react';
import useTrackPageView from '../../hooks/useTrackPageView'

class About extends React.Component {
	useTrackPageView();
  render() {
    return (
      <div className='container'>
        <h1 className='no-top'>Who We Are</h1>
      </div>
    );
  }
}

export default About;
