import React, { Component } from 'react';
import { withRouteData } from 'react-static';

class Booking extends Component {
  render() {
    return (
      <div className='container'>
        <h1 className='no-top'>Booking</h1>
      </div>
    );
  }
}

export default withRouteData(Booking);
