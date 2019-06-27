import React from 'react';
import styled from 'styled-components';

const StyledProjectModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(4, 0, 0, 0.9);
  z-index: 100;
  .project-modal {
    width: 66%;
    height: auto;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    background-color: white;
    @media (max-width: 900px) { 
      width: 100%;
    }
    img {
      width: 100%;
    }
  }
`;



const ProjectModal = ({ setViewProject, project }) => {
  return (
    <StyledProjectModal onClick={() => setViewProject(false)} className="project-container">
      <div className="project-modal">
        <img src={project.img} alt={project.name}/>
        <h3>{project.name}</h3>
        <p>{project.description}</p>
      </div>
    </StyledProjectModal>
  )
}

export default ProjectModal;
