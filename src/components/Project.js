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
      animation: shadow 0.2s;
      animation-fill-mode: forwards;
    }
    @media(max-width: 835px) {
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
        animation: shadow 0.2s;
        animation-fill-mode: forwards;
      }
      @media(max-width: 835px) {
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
  @keyframes shadow {
    0% {
      box-shadow: none;
    }
    100% {
      box-shadow: 0 8px 17px 0 rgba(0, 0, 0, 0.2),
        0 6px 20px 0 rgba(0, 0, 0, 0.15);
      transform: translateY(-2px);
    }
  }
`;

const Project = ({ project, isMobile }) => {
  const { name, img, website, repo } = project;
  const [viewProject, setViewProject] = useState(false)

  return (
    <>
      <StyledProject>
        <img
          className="project-image"
          onClick={!isMobile ? () => { setViewProject(true) } : null}
          src={img}
          alt={name}
        />
        <div className="img-text">
          <a
            className="links code"
            href={repo}
            target='_blank'
            rel="noopener noreferrer">
            Code
          </a>
          <a
            href={website}
            target='_blank'
            rel="noopener noreferrer"
            className="links website">
            Site
          </a>
        </div>
      </StyledProject>
      {viewProject ? <ProjectModal project={project} setViewProject={setViewProject} /> : null}
    </>
  )
}

export default Project;
