import React, { useState, useEffect } from 'react';
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
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Checks to see if user is on mobile when component mounts and sets isMobile flag appropriately
    if ((typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1)) {
      setIsMobile(true)
    }
  }, [])
  return (
    <StyledProjects id="projects">
      <h1 className="projects-header">
        Projects
        {!isMobile &&
          <span className="brackets">
            {" { click image for more details }"}
          </span>
        }
      </h1>
      {projectData.map((project) =>
        <Project
          project={project}
          key={project.id}
          isMobile={isMobile}
        />
      )}
    </StyledProjects>
  )
}

export default Projects;
