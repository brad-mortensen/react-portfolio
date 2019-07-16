import React, { useState } from 'react';
import styled from 'styled-components';

import ProjectModal from './ProjectModal';

const StyledProject = styled.div`
  width: 47%;
  box-sizing: border-box;
  position: relative;
  margin-bottom: 30px;
	font-family: 'Carrois Gothic SC', sans-serif;
  @media (max-width: 500px) {
    width: 96%;
    margin-bottom: 10px;
  }
  .project-image {
    width: 100%;
    height: auto;
    transition: opacity .25s;
    opacity: .6;
    cursor: pointer;   
    transition: opacity .25s;
    margin-bottom: 0;
    &:hover {
      opacity: 1;
    }
  }
  .img-text {
    margin-top: 0;
    width: 100%;
    height: 35px;
    display: flex;
    justify-content: space-around;
    .links {
      text-decoration: none;
      color: black;
      background-color: white;
      transition: opacity .25s;
      opacity: .6;
      margin: 0;
      width: 50%;
      height: 100%;
      text-align: center;
      cursor: pointer;
      font-size: 1.2rem;
      display: flex;
      align-items: center;
      justify-content: center;
      &:hover {
        opacity: 1;
      }
    }
    .code {
      border-right: 3px solid black;
    }
  }
  @media (max-width: 900px) {
    margin-bottom:40px;
  }
`;

const Project = ({ project }) => {
  const { name, img, website } = project;
  const [viewProject, setViewProject] = useState(false)

  return (
    <>
      <StyledProject>
        <img
          className="project-image"
          onClick={() => setViewProject(true)}
          src={img}
          alt={name}
        />
        <div className="img-text">
          <a  className="links code">Code</a>
          <a href={website} className="links website">Site</a>
        </div>
      </StyledProject>
      {viewProject ? <ProjectModal project={project} setViewProject={setViewProject} /> : null}
    </>
  )
}

export default Project;
