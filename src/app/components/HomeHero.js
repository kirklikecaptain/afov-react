import React from 'react';
import styled from 'styled-components';
import { Link } from '@reach/router';
import { MdPlayArrow } from 'react-icons/md';
import { lighten, darken } from 'polished';
import Fade from 'react-reveal/Fade';

const HomeHero = props => {
  return (
    <StyledHero {...props}>
      <Fade ssrReveal duration={700}>
        <div className='image'>
          <img src={props.heroVideo.fields.thumbnail.fields.file.url + '?w=1000'} alt='' />
          <div className='mobile-overlay' />
          <Fade ssrReveal right duration={700} delay={300} distance='100px'>
            <Link
              className='mobile-button'
              id='hero-button-mobile'
              to={`/${props.heroVideo.fields.artist.fields.slug}/${props.heroVideo.fields.slug}`}
            >
              <MdPlayArrow />
            </Link>
          </Fade>
        </div>
      </Fade>
      <Fade ssrReveal left duration={500} delay={300} distance='100px'>
        <div className='text-content'>
          <div className='badge'>NEW</div>
          <h2 className='title'>{props.heroVideo.fields.title}</h2>
          <h2 className='slab artist'>{props.heroVideo.fields.artist.fields.artistName}</h2>
          <div>
            <Link
              className='full-button'
              id='hero-button'
              to={`/${props.heroVideo.fields.artist.fields.slug}/${props.heroVideo.fields.slug}`}
            >
              <MdPlayArrow className='icon' /> Watch Now
            </Link>
          </div>
        </div>
      </Fade>
      <div className='overlay' />
    </StyledHero>
  );
};

export default HomeHero;

const StyledHero = styled.div`
  background: ${props =>
    props.heroVideo.fields.artist.fields.color
      ? props.heroVideo.fields.artist.fields.color
      : '#333'};

  .image {
    position: relative;
    padding-top: 56.3%;
    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      max-width: 100%;
    }
    .mobile-overlay {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      mix-blend-mode: color;
      background: ${props =>
        props.heroVideo.fields.artist.fields.color
          ? props.heroVideo.fields.artist.fields.color
          : '#333'};
    }
    .mobile-button {
      height: 60px;
      width: 60px;
      border-radius: 50%;
      position: absolute;
      bottom: 20px;
      right: 20px;
      display: flex;
      align-items: center;
      font-size: 2.5rem;
      justify-content: center;
      background: white;
      color: ${props =>
        props.heroVideo.fields.artist.fields.color
          ? props.heroVideo.fields.artist.fields.color
          : '#333'};
      @media (min-width: 600px) {
        display: none;
      }
    }
  }

  .full-button {
    display: none;
    @media (min-width: 600px) {
      margin-top: 20px;
      display: inline-block;
      padding: 10px 20px 10px 15px;
      border-radius: 3px;
      background: white;
      text-decoration: none;
      color: #333;
      transition: 0.2s ease-in-out transform, 0.2s ease-in-out background;
      &:hover {
        transform: translateY(-2px);
        background: ${props =>
          props.heroVideo.fields.artist.fields.color
            ? lighten(0.4, props.heroVideo.fields.artist.fields.color)
            : '#333'};
        box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.1);
        .icon {
          color: ${props =>
            props.heroVideo.fields.artist.fields.color
              ? darken(0.3, props.heroVideo.fields.artist.fields.color)
              : '#333'};
        }
      }
      .icon {
        transform: translateY(-1px);
        color: ${props =>
          props.heroVideo.fields.artist.fields.color
            ? props.heroVideo.fields.artist.fields.color
            : '#333'};
      }
    }
  }

  .text-content {
    color: white;
    padding: 20px;
    background: ${props =>
      props.heroVideo.fields.artist.fields.color
        ? props.heroVideo.fields.artist.fields.color
        : '#333'};
    .badge {
      font-size: 10px;
      display: none;
      padding: 5px 6px 4px 6px;
      margin-bottom: 5px;
      background: ${props =>
        props.heroVideo.fields.artist.fields.color
          ? darken(0.3, props.heroVideo.fields.artist.fields.color)
          : darken(0.3, '#333')};
      color: white;
      border-radius: 3px;
      box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.1);
      @media (min-width: 600px) {
        display: inline-block;
      }
    }
    h2 {
      margin: 0;
    }
    .slab {
      font-weight: 700;
    }
    .title {
      line-height: 1.25em;
    }
    .artist {
      line-height: 1.25em;
      font-size: 2.3rem;
      color: ${props =>
        props.heroVideo.fields.artist.fields.color
          ? lighten(0.4, props.heroVideo.fields.artist.fields.color)
          : lighten(0.3, '#333')};
    }
  }
  .overlay {
    background: ${props =>
      props.heroVideo.fields.artist.fields.color
        ? props.heroVideo.fields.artist.fields.color
        : '#333'};
  }

  @media (min-width: 600px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr;
    align-items: center;
    background: ${props =>
      props.heroVideo.fields.artist.fields.color
        ? props.heroVideo.fields.artist.fields.color
        : '#333'};
    padding: 20px;
    .image {
      grid-column-start: 2;
      grid-column-end: 4;
      grid-row-start: 1;
      grid-row-end: 2;
      z-index: 50;
    }
    .text-content {
      padding-left: 40px;
      background: transparent;
      grid-column-start: 1;
      grid-column-end: 3;
      grid-row-start: 1;
      grid-row-end: 2;
      z-index: 100;
      h2 {
        font-size: 2.5rem;
      }

      .artist {
        font-size: 3.5rem;
      }
    }
  }

  @media (min-width: 1200px) {
    .text-content {
      h2 {
        font-size: 4rem;
      }
      .artist {
        font-size: 5rem;
      }
    }
  }

  @media (min-width: 1400px) {
    padding: 40px;
    .text-content {
      padding-left: 50px;

      .full-button {
        font-size: 1.2rem;
      }
    }
  }
`;
