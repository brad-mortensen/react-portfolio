import React from 'react';
import Slide from 'react-reveal/Slide';
import styled from 'styled-components';
import downArrow from './assets/angle-double-down.svg';
import brad from './assets/brad.jpg';
import Socials from './Socials';

const StyledHeaderContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column;
  align-items: center;
  margin: 70px 0;
  padding: 0 2%;
  padding-top: 100px;
  box-sizing: border-box;
  @media(max-width: 700px) {
    padding-top: 0;
  }

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
      margin-top: 30px;
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
`;
const StyledIntroContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  align-items: center;
  margin-top: 100px;
  width: 100%;
  height: 400px;
  background-color: #00d1b2;
  padding: 0 5%;
  padding-bottom: 50px;
  box-sizing: border-box;
  p{
    width: 100%;
    font-size: 2rem;
    font-family: 'Carrois Gothic SC', sans-serif;
  }
  .introductions {
    width: 100%;
    display: flex;
    flex-flow: row;
    align-items: center;
    justify-content: space-around;
    .img-container {
      width: 200px;
      .me {
        width: 100%;        
        height: auto;
      }
    }  
    .intro {
      font-size: 1.5rem;
      text-align: left;
      max-width: 350px;
      font-family: 'Carrois Gothic SC', sans-serif;
    }
  }  
`;
const HeaderContent = () => {
  return (
    <>
      <StyledHeaderContent>
        <Slide left><p className="title">Hi, I'm Brad Mortensen.
        <br>
          </br>full-stack web developer.
        </p>
        </Slide>
        <img className="down-arrow" src={downArrow} alt="down-arrow" />


      </StyledHeaderContent>
      <StyledIntroContainer className="intro-container">
        <p>About</p>
        <div className="introductions">
          <div className="img-container"><img className="me" src={brad} alt='me!' /></div>
          <p className="intro">Thanks for visiting my personal website. I'm a (currently) Denver based web developer looking for a frontend or fullstack role with a great company.   </p>
          <p className="intro">Check out a sample of my projects below and head over to my github for all of my project repos. Feel free to reach out at any of my links or contact me at my email below.</p>
        </div>        
      </StyledIntroContainer>
    </>
  )
}

export default HeaderContent
