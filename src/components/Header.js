import React from 'react'
import styled from 'styled-components';

const StyledHeader = styled.div`
  border-bottom: 1px solid green;
  width: 100%;
  height: 70vh;
  h1{
    text-align: center;
  }
`;

const Header = () => {

  return (
    <StyledHeader>
      <h1>Header Component</h1>
    </StyledHeader>
  )
}

export default Header;
