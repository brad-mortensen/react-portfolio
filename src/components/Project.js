import React, { useState } from 'react';
import styled from 'styled-components';

import ProjectModal from './ProjectModal';

const StyledProject = styled.div`
  width: 32%;
  box-sizing: border-box;
  position: relative;
  @media (max-width: 900px) {
    width: 96%;
  }
  .no-hover {
    width: 100%;
    height: auto;
    transition: opacity .5s;   
    @media (max-width: 900px) {
      margin-bottom:40px;
    } 
  }
  .hover {
    width: 100%;
    height: auto;
    opacity: .3;
    transition: opacity .5s;
    @media (max-width: 900px) { 
      margin-bottom:40px;
    }
  }
  .img-header {
    position: absolute;
    bottom: 8px;
    left: 16px;
    @media (max-width: 900px) { 
      font-size: 5rem;
    }
  }
  .img-text {
    position: absolute;
    bottom: 8px;
    left: 16px;
  }
  
`;

const Project = ({ project, toggleModal }) => {
  const { name, img } = project;
  const [hovering, setHovering] = useState(false);
  const [viewProject, setViewProject] = useState(false)

  return (
    <>
      <StyledProject>
        {hovering ?
          <>
            <img
              className="hover"
              onMouseEnter={() => setHovering(true)}
              onMouseLeave={() => setHovering(false)}
              onClick={() => setViewProject(true)}
              src={img} alt={name}
            />
            <h1 className="img-header">{name}</h1>
          </> :
          <img
            className="no-hover"
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
            onClick={() => setViewProject(true)}            
            src={img}
            alt={name}
          />
        }
      </StyledProject>
      {viewProject ? <ProjectModal project={project} setViewProject={setViewProject}/> : null}
    </>
  )
}

export default Project;
