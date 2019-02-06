import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from '@reach/router';
import {
  IoIosMicrophone,
  IoMdPeople,
  IoMdMenu,
  IoMdTv,
  IoMdClose,
  IoMdMusicalNotes,
  IoMdMail,
  IoMdHeart
} from 'react-icons/io';
import afov from '../../../assets/afov-logo.svg';

class Nav extends Component {
  state = {
    isOpen: false
  };

  toggleNav = e => {
    e.preventDefault();
    this.setState({ isOpen: !this.state.isOpen });
  };

  closeNav = () => {
    this.setState({ isOpen: false });
  };

  render() {
    return (
      <StyledNav className='noselect-app' isOpen={this.state.isOpen}>
        <nav className='container-app'>
          <div className='logo-group'>
            <Link to='/' className='logo-link' onClick={e => this.closeNav(e)}>
              <img className='logo' src={afov} alt='AFoV' />
            </Link>
            <button onClick={e => this.toggleNav(e)}>{this.state.isOpen ? <IoMdClose /> : <IoMdMenu />}</button>
          </div>
          <div className='link-group'>
            <Link onClick={this.closeNav} to='/videos'>
              <span className='icon'>
                <IoMdTv />
              </span>
              All Videos
            </Link>
            <Link onClick={this.closeNav} to='/music'>
              <span className='icon'>
                <IoMdMusicalNotes />
              </span>
              Music
            </Link>
            <Link onClick={this.closeNav} to='/interviews'>
              <span className='icon'>
                <IoIosMicrophone />
              </span>
              Interviews
            </Link>
            <Link onClick={this.closeNav} to='/artists'>
              <span className='icon'>
                <IoMdPeople />
              </span>
              Artists
            </Link>
            <Link onClick={this.closeNav} to='/booking'>
              <span className='icon'>
                <IoMdMail />
              </span>
              Booking
            </Link>
            <Link onClick={this.closeNav} to='/about'>
              <span className='icon'>
                <IoMdHeart />
              </span>
              About
            </Link>
          </div>
        </nav>
      </StyledNav>
    );
  }
}

export default Nav;

const StyledNav = styled.header`
  background: #222;

  nav {
    position: relative;
  }

  .logo-group {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    background-color: #222;

    .logo-link {
      display: block;
    }

    .logo {
      width: 100px;
      display: block;
    }

    button {
      position: absolute;
      font-size: 24px;
      right: 20px;
      border: none;
      color: white;
      background: transparent;
      padding: 10px;
      outline: none;
      border-radius: 3px;
      &:hover {
        background: #444;
      }
      &:active {
        background: #333;
      }
    }
  }

  .link-group {
    .icon {
      display: none;
    }

    a {
      display: block;
      color: white;
      text-decoration: none;
    }
  }

  @media (max-width: 599px) {
    .link-group {
      display: ${props => (props.isOpen ? 'block' : 'none')};
      position: absolute;
      top: 100%;
      left: 0;
      right: 0;
      background: #333;
      z-index: 1000;
      a {
        display: flex;
        align-items: center;
        padding: 25px;
        text-decoration: none;
        &:hover {
          background: #444;
        }
        &:active {
          background: #222;
        }

        .icon {
          display: flex;
          color: rgba(255, 255, 255, 0.3);
          font-size: 24px;
          width: 26px;
          height: 26px;
          border-radius: 50%;
          margin-right: 10px;
          align-items: center;
          justify-content: center;
        }
      }
    }
  }

  @media (min-width: 600px) {
    nav {
      display: flex;
      padding: 0;
      height: 90px;
      justify-content: space-between;
      align-items: center;
    }
    .logo-group {
      padding: 0 0 0 16px;
      .logo {
        width: 100px;
      }
      button {
        display: none;
      }
    }

    .link-group {
      display: flex;
      height: 100%;
      padding: 0;
      a {
        position: relative;
        padding: 0px 20px;
        display: flex;
        align-items: center;
        &[aria-current] {
          background: #333;
        }
      }
    }
  }

  @media (min-width: 600px) and (max-width: 700px) {
    .link-group {
      a {
        font-size: 12px;
        padding: 0 16px;
      }
    }
  }

  /* part of this layout lives in app/index.js */

  @media (min-width: 1400px) {
    overflow: scroll;
    background: #333;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    width: 230px;
    z-index: 1000;

    nav {
      display: block;
    }
    .logo-group {
      display: block;
      padding: 40px;
      .logo {
        width: 100%;
      }
    }
    .link-group {
      display: block;
      .icon {
        display: flex;
        color: rgba(255, 255, 255, 0.3);
        font-size: 24px;
        width: 26px;
        height: 26px;
        border-radius: 50%;
        margin-right: 10px;
        align-items: center;
        justify-content: center;
      }

      a {
        padding: 20px 40px;
        &[aria-current] {
          background: #444;
          .icon {
            color: white;
          }
        }
      }
    }
  }
`;
