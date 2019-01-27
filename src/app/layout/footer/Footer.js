import React, { Component } from 'react';
import styled from 'styled-components';

class Footer extends Component {
  render() {
    return <StyledFooter>Footer</StyledFooter>;
  }
}

export default Footer;

const StyledFooter = styled.footer`
  display: block;
  background: black;
  color: white;
	min-height: 500px;
`;
