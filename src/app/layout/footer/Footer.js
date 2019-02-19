import React, { Component } from 'react';
import styled from 'styled-components';
import { FaInstagram, FaFacebook, FaTwitter, FaYoutube, FaPatreon } from 'react-icons/fa';
import GridContainer from '../../components/GridContainer';
import SubscribeForm from '../../components/SubscribeForm';

class Footer extends Component {
  render() {
    return (
      <StyledFooter>
        <GridContainer className='container inner'>
          <div className='social-group'>
            <h5 className='slab no-top'>SUPPORT</h5>
            <a className='social patreon' href='https://www.patreon.com/join/afistfulofvinyl' target='_blank' rel='noopener'>
              <FaPatreon className='icon' /> Support AFoV on Patreon
            </a>
						<div className="button-row">
							<a className='social youtube' href='https://www.youtube.com/afistfulofvinyl' target='_blank' rel='noopener'>
								<FaYoutube className='icon' />
							</a>
							<a className='social instagram' href='https://www.instagram.com/afistfulofvinyl/' target='_blank' rel='noopener'>
								<FaInstagram className='icon' />
							</a>
							<a className='social facebook' href='https://www.facebook.com/AFistfulOfVinyl/' target='_blank' rel='noopener'>
								<FaFacebook className='icon' />
							</a>
							<a className='social twitter' href='https://twitter.com/afistfulofvinyl?lang=en' target='_blank' rel='noopener'>
								<FaTwitter className='icon' />
							</a>
						</div>
          </div>
          <div className='col'>
					<h5 className='slab no-top'>NEWSLETTER</h5>
						<SubscribeForm />
          </div>
          <div className='col'>
					<h5 className='slab no-top'>MORE STUFF</h5>
            <a href='#'>What else should we put here?</a>
          </div>
        </GridContainer>
      </StyledFooter>
    );
  }
}

export default Footer;

const StyledFooter = styled.footer`
  display: block;
  background: white;
  border-top: solid 1px #ddd;
  padding: 30px 0;
  .inner {
		a {
			color: #333;
			text-decoration: none;
			&:hover {
				text-decoration: underline;
			}
		}

    .social-group {

			.social {
				display: block;
				width: 100%;
        font-size: 0.75rem;
        text-align: center;
        margin-bottom: 10px;
        border-radius: 4px;
        padding: 10px;
        text-decoration: none;
        .icon {
          margin-top: -2px;
          display: inline-block;
        }
        @media (min-width: 600px) {
          width: auto;
          margin-left: 10px;
					flex-grow: 1;
					&:first-child {
						margin-left: 0;
					}
        }
      }

			.button-row {
				@media (min-width: 600px) {
					display: flex;
				}
			}

      .facebook {
        color: #3b5998;
        border: solid 1px #3b5998;
        background: transparent;
        &:hover {
          background: #3b5998;
          color: white;
        }
      }

      .instagram {
        color: #bc2a8d;
        border: solid 1px #bc2a8d;
        background: transparent;
        &:hover {
          background: #bc2a8d;
          color: white;
        }
      }

      .twitter {
        color: #1da1f2;
        border: solid 1px #1da1f2;
        background: transparent;
        &:hover {
          background: #1da1f2;
          color: white;
        }
      }

      .patreon {
        width: 100%;
        color: #f96854;
        border: solid 1px #f96854;
				margin-left: 0;
        background: transparent;
        &:hover {
          background: #f96854;
          color: white;
        }
        .icon {
          margin-right: 5px;
        }
      }

      .youtube {
        color: #ff0000;
        border: solid 1px #ff0000;
        background: transparent;
        &:hover {
          background: #ff0000;
          color: white;
        }
      }
    }
  }
`;
