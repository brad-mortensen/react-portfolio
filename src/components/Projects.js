import React from 'react';
import styled from 'styled-components';

import { projectData } from './assets/data'

import Project from './Project';

const StyledProjects = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-around;
  align-items: top;
  flex-flow: row wrap;
  padding: 0 5% 30px 5%;
  background-color: black;
  @media (max-width: 900px) {
    padding: 0 2%;
  }
  @media (max-width: 500px) {
    flex-flow: column;
    align-items: center;
  }
  .projects-header {
    width: 100%;
    font-family: 'Carrois Gothic SC', sans-serif;
    font-size: 2rem;
    font-weight: lighter;
    color: white;
    margin-bottom: 30px;
    .brackets {
      font-size: 1rem;
    }
  }
`;

const Projects = () => {

  return (
    <StyledProjects id="projects">
      <h1 className="projects-header">Projects <span className="brackets">{"{ click image for more details }"}</span></h1>
      {projectData.map((project) =>
        <Project project={project} key={project.id} />
      )}
    </StyledProjects>
  )
}

export default Projects;
