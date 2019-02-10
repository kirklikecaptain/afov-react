import React, { Component } from 'react';
import styled from 'styled-components';
import { FaInstagram, FaFacebook, FaTwitter, FaYoutube, FaPatreon} from 'react-icons/fa'
import GridContainer from '../../components/GridContainer'

class Footer extends Component {
  render() {
    return (
			<StyledFooter>
				<GridContainer className="container inner">
					<div className="col">
					<a className="social patreon" href="https://www.patreon.com/join/afistfulofvinyl" target="_blank" rel="noopener"><FaPatreon className='icon' /> Support us on Patreon</a>
						<a className="social youtube" href="https://www.youtube.com/afistfulofvinyl" target="_blank" rel="noopener"><FaYoutube className='icon' /> AFoV on Youtube</a>
						<a className="social instagram" href="https://www.instagram.com/afistfulofvinyl/" target="_blank" rel="noopener"><FaInstagram className='icon' /> AFoV on Instagram</a>
						<a className="social facebook" href="https://www.facebook.com/AFistfulOfVinyl/" target="_blank" rel="noopener"><FaFacebook className='icon' /> AFoV on Facebook</a>
						<a className="social twitter" href="https://twitter.com/afistfulofvinyl?lang=en" target="_blank" rel="noopener"><FaTwitter className='icon' /> AFoV on Twitter</a>
					</div>
					<div className="col">
						<a href="#">Info</a>
					</div>
					<div className="col">
						<a href="#">Signup form</a>
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
	.inner {
		.col {
			display: flex;
			flex-direction: column;
			align-items: flex-start;
			a {
				display: block;
				color: #333;
				padding: 10px;
				text-decoration: none;
				&:hover {
					color: #222;
				}
				.icon {
					margin-top: -2px;
					margin-right: 5px;
					display: inline-block;
				}
			}

			.social {
				width: 100%;
				font-size: .75rem;
				text-align: center;
				margin-bottom: 10px;
				border-radius: 4px;
				padding: .75em;
				@media(min-width: 600px) {
					width: auto;
				}
			}
			.facebook {
				color: #3b5998;
				border: solid 2px #3b5998;
				background: transparent;
				&:hover {
					background: #3b5998;
					color: white;
				}
			}
			.instagram {
				color: #bc2a8d;
				border: solid 2px #bc2a8d;
				background: transparent;
				&:hover {
					background: #bc2a8d;
					color: white;
				}
			}
			.twitter {
				color: #1da1f2;
				border: solid 2px #1da1f2;
				background: transparent;
				&:hover {
					background: #1da1f2;
					color: white;
				}
			}
			.patreon {
				color: #f96854;
				border: solid 2px #f96854;
				background: transparent;
				&:hover {
					background: #f96854;
					color: white;
				}
			}
			.youtube {
				color: #ff0000;
				border: solid 2px #ff0000;
				background: transparent;
				&:hover {
					background: #ff0000;
					color: white;
				}
			}
		}
	}
`;
