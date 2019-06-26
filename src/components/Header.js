import React from 'react'
import styled from 'styled-components';

const StyledHeader = styled.div`
  border: 1px solid green;
  width: 100%;
`;

const Header = () => {

  return (
    <StyledHeader>
      <h1>Header Component</h1>
    </StyledHeader>
  )
}

export default Header;
