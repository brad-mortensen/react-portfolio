import React from 'react';
import styled from 'styled-components';
import downArrow from './assets/angle-double-down.svg';

const StyledHeaderContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  margin: 70px 0;
  padding: 0 2%;
  .intro {
    width: 100%;
    height: auto;
    font-family: 'Carrois Gothic SC', sans-serif;
    font-size: 3rem;
    text-transform: uppercase;
    line-height: 50px;
  }
  .down-arrow {
    width: 15%;
    height: auto;
    margin: 50px 0;
    visibility: visible;
    animation: flasher 3s linear infinite;
  }
  @keyframes flasher {
    50% {
    opacity: 0;
    }
  }
`;

const HeaderContent = () => {
  return (
    <StyledHeaderContent>
      <p className="intro">Hi, I'm Brad Mortensen<br></br>software developer.</p>
      <img className="down-arrow" src={downArrow}  alt="down-arrow" />
    </StyledHeaderContent>
  )
}

export default HeaderContent
