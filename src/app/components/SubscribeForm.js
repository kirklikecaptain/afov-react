import React from 'react';
import styled from 'styled-components';
import MailchimpSubscribe from 'react-mailchimp-subscribe';

const SubscribeForm = () => {
  const postUrl =
    'https://afistfulofvinyl.us20.list-manage.com/subscribe/post?u=93e673352c70e1d2b7101564e&amp;id=2b5005c4f0';
  return (
    <MailchimpSubscribe
      url={postUrl}
      render={({ subscribe, status, message }) => (
        <CustomForm
          status={status}
          message={message}
          onValidated={formData => subscribe(formData)}
        />
      )}
    />
  );
};

export default SubscribeForm;

const CustomForm = ({ status, message, onValidated }) => {
  let email, name;
  const submit = () =>
    email &&
    name &&
    email.value.indexOf('@') > -1 &&
    onValidated({
      EMAIL: email.value,
      FNAME: name.value
    });

  return (
    <StyledSignupForm>
      <input ref={node => (name = node)} type='text' placeholder='Name' />
      <input ref={node => (email = node)} type='email' placeholder='Email' />
      {status === 'sending' && <div style={{ color: '#666' }}>Sending...</div>}
      {status === 'error' && (
        <div style={{ color: 'red' }} dangerouslySetInnerHTML={{ __html: message }} />
      )}
      {status === 'success' && (
        <div style={{ color: 'green' }} dangerouslySetInnerHTML={{ __html: message }} />
      )}
      <div className='button-box'>
        {status !== 'success' && <button onClick={submit}>Subscribe</button>}
      </div>
    </StyledSignupForm>
  );
};

const StyledSignupForm = styled.div`
  width: 100%;
  display: block;
  input {
    font-size: 0.75rem;
    padding: 10px;
    display: block;
    width: 100%;
    border-radius: 4px;
    margin-bottom: 10px;
    border: solid 1px #999;
    &:focus {
      outline: none;
      border-color: darkcyan;
    }
  }
  .button-box {
    text-align: right;
  }
  button {
    border: 1px solid #333;
    background: transparent;
    font-size: 0.75rem;
    padding: 10px 20px;
    border-radius: 4px;
    color: #333;
    cursor: pointer;
    &:hover {
      background: #333;
      color: white;
    }
  }
`;
