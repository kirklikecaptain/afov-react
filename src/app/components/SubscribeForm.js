import React, { Component } from 'react';
import styled from 'styled-components';

const url = 'https://app.sender.net/api';
const mock = {
  method: 'listSubscribe',
  params: {
    api_key: '04105b0370f00e4a32b4ad9eaa72e4fe',
    list_id: '68045',
    emails: [
      'email@email.com',
      {
        email: 'email@email.lt',
        firstname: 'John',
        lastname: 'Snow'
      }
    ]
  }
};

export default class SubscribeForm extends Component {
  state = {};

  handleSubmit = e => {
    e.preventDefault();
    // submit data
  };

  render() {
    return (
      <StyledForm>
        <h5 className='slab no-top'>AFoV Newsletter</h5>
        <label htmlFor='name'>Name</label>
        <input id='name' type='text' />
        <label htmlFor='email'>Email</label>
        <input id='email' type='email' />
        <button>Sign up</button>
      </StyledForm>
    );
  }
}

const StyledForm = styled.form`
  display: block;
  width: 100%;
  border: solid 1px grey;
  padding: 20px;

  label {
    display: block;
    font-size: 12px;
    margin: 1rem 0 0.25rem 0;
  }

  input {
    display: block;
    width: 100%;
  }

  button {
    border-radius: 5px;
    margin-top: 1rem;
    border: none;
    background: black;
    color: white;
    padding: 0.5rem 2rem;
  }
`;
