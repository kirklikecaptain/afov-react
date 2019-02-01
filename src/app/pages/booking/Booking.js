import React, { Component } from 'react';
import { withRouteData } from 'react-static';
import { hot } from 'react-hot-loader/root';
import { Link } from '@reach/router';

class Booking extends Component {
  render() {
    return (
      <div className='container'>
        <h1 className='no-top'>Booking</h1>
      </div>
    );
  }
}

export default hot(withRouteData(Booking));
