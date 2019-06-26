import React from 'react';
import styled from 'styled-components';

const StyledHeaderContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  padding: 0 2%;
  .intro {
    width: 100%;
    height: auto;
    font-family: 'Carrois Gothic SC', sans-serif;
    /* font-family: 'Cabin', sans-serif; */
    font-size: 3rem;
    text-transform: uppercase;
    line-height: 50px;
  }
`;

const HeaderContent = () => {
  return (
    <StyledHeaderContent>
      <p className="intro">Hi, I'm Brad <br></br>software developer.</p>
      <p className="intro">Scroll to see my projects.</p>
    </StyledHeaderContent>
  )
}

export default HeaderContent
