import React, { Component } from 'react';
import {trackPageView} from '../../../utilities/analytics'

class NotFound extends Component {
	componentDidMount() {
		trackPageView()
	}
  render() {
    return <div className='container'>404: We ain't found shit!</div>;
  }
}

export default NotFound;
