import React, { useState } from 'react';
import styled from 'styled-components';

import ProjectModal from './ProjectModal';

const StyledProject = styled.div`
  width: 47%;
  box-sizing: border-box;
  position: relative;
  margin-bottom: 30px;
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
    @media (max-width: 900px) {
      margin-bottom:40px;
    }
    &:hover {
      opacity: 1;
    }
  }
`;

const Project = ({ project }) => {
  const { name, img } = project;
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
      </StyledProject>
      {viewProject ? <ProjectModal project={project} setViewProject={setViewProject} /> : null}
    </>

  )
}

export default Project;
