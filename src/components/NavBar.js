import React from 'react';
import styled from 'styled-components';


const NavBar = () => {
  const name = '{brad mortensen}';
  return (
    <StyledNav>
      <div className="nav-links">
        <a href="#projects" className="projects">Projects</a>
        <a href="#skills" className="skills">Skills</a>
        <a href="#contact" className="contact">Contact</a>
      </div>
      <h1 className="main-header">{name}</h1>
    </StyledNav>
  )
}

export default NavBar


const StyledNav = styled.div`
margin-top: 10px;
  width: 100%;
  height: auto;
  display: flex;
  flex-flow: row;
  justify-content:space-between;
  align-items: center;
  box-sizing:border-box;
  padding: 0 3%;
  @media(max-width: 700px){
    flex-flow:column-reverse;
  }
  .main-header {   
    font-size: 1rem;
    text-transform: uppercase;
    font-family: 'Carrois Gothic SC', sans-serif;

  }
  .nav-links {
    display: flex;
    width: 30%;
    height: auto;
    justify-content: space-between;
    box-sizing:border-box;
    @media(max-width: 700px) {
      width: 70%;
    }
    a {
      cursor: pointer;
      text-decoration: none;
      color: black;
      height: 20px;
      text-transform: uppercase;
      font-size: 1rem;
      font-family: 'Carrois Gothic SC', sans-serif;
      @media(max-width: 700px){
        font-size: 1.2rem;
      }
      &:hover{
        box-sizing: border-box;
        border-bottom: 1px solid black;
      }
    }
  }
`;