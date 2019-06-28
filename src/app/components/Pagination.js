import React from 'react';
import styled from 'styled-components';
import { Link } from '@reach/router';

const Pagination = props => {
  let links = [];
  console.log(props);

  function createLinks() {
    for (let i = 1; i < props.totalPages + 1; i++) {
      if (i === props.currentPage) {
        links.push(
          <span className='page current' key={i}>
            {props.currentPage}
          </span>
        );
      } else {
        links.push(
          <Link className='page more' key={i} to={`/music/page/${i}`}>
            {i}
          </Link>
        );
      }
    }
    return links;
  }

  return (
    <StyledPagination>
      <div>
        <span className='label'>Page</span> {createLinks()}
      </div>
    </StyledPagination>
  );
};

export default Pagination;

const StyledPagination = styled.nav`
  padding: 32px 0 16px 0;
  text-align: center;
  font-size: 18px;

  .page {
    padding: 8px;
  }

  .current {
    padding: 8px;
  }

  .more {
    color: red;
    text-decoration: none;
  }
`;
