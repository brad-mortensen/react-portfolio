import React from 'react';
import Slide from 'react-reveal/Slide';
import styled from 'styled-components';
import downArrow from './assets/angle-double-down.svg';

const StyledHeaderContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column;
  align-items: center;
  margin: 70px 0;
  padding: 0 2%;
  box-sizing: border-box;

  .title {
    width: 100%;
    height: auto;
    font-family: 'Carrois Gothic SC', sans-serif;
    font-size: 4rem;
    text-transform: uppercase;
    line-height: 55px;
    transition: font-size .25s; 
    @media (max-width: 900px) {
      font-size: 3rem;
    }
    @media (max-width: 650px) {
      font-size: 2.5rem;
      text-align: center;
    }
    @media (max-width: 525px) {
    }
  }
  .down-arrow {
    width: 15%;
    height: auto;
    margin: 100px 0 10px 0;
    animation: flasher 2s linear infinite;
    @media (max-width: 900px) {
      width: 25%;
    }
    @media (max-width: 650px) {
      width: 35%;
    }
  }
  
  @keyframes flasher {
    50% {
    opacity: 0;
    }
  }
  .intro {
    font-size: 1.5rem;
    font-family: 'Carrois Gothic SC', sans-serif;
  }
`;

const HeaderContent = () => {
  return (
    <StyledHeaderContent>
      <Slide left><p className="title">Hi, I'm Brad Mortensen.
        <br>
          </br>full-stack web developer.
        </p>
      </Slide>
      <img className="down-arrow" src={downArrow} alt="down-arrow" />
      <p className="intro">This is a test linker</p>
    </StyledHeaderContent>
  )
}

export default HeaderContent
