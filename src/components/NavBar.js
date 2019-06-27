import React from 'react';
import styled from 'styled-components';

const StyledNav = styled.div`
  width: 100%;
  height: 120px;
  display: flex;
  flex-flow: row;
  justify-content:space-between;
  align-items: center;
  box-sizing:border-box;
  padding: 0 3%;
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
    p {
      cursor: pointer;
      height: 20px;
      text-transform: uppercase;
      font-size: 1rem;
      font-family: 'Carrois Gothic SC', sans-serif;
      &:hover{
        box-sizing: border-box;
        border-bottom: 1px solid black;
      }
    }
  }
`;

const NavBar = () => {
  const name = '{brad mortensen}';
  return (
    <StyledNav>
      <div className="nav-links">
        <p className="projects">Projects</p>
        <p className="skills">Skills</p>
        <p className="contact">Contact</p>
      </div>
      <h1 className="main-header">{name}</h1>
    </StyledNav>
  )
}

export default NavBar
