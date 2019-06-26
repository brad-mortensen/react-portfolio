import React from 'react';
import styled from 'styled-components';

const StyledProjects = styled.div`
  width: 100%;
  border-bottom: 1px solid orange;
  height: 70vh;
  h1 {
    text-align: center;
  }
`;

const Projects = () => {
  return (
    <StyledProjects>
      <h1>Projects</h1>
    </StyledProjects>
  )
}

export default Projects;
