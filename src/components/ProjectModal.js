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
  background: rgba(4, 0, 0, 0.7);
  .delete-modal {
    width: 75%;
    height: auto;
    border: 1px solid black;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    background-color: white;
    img {
      width: 100%;
    }
  }
`;



const ProjectModal = ({ setViewProject, project }) => {
  return (
    <StyledProjectModal onClick={() => setViewProject(false)} className="delete-container">
      <div className="delete-modal">
        <img src={project.img} alt={project.name}/>
        <h3>{project.name}</h3>
        <p>{project.description}</p>
      </div>
    </StyledProjectModal>
  )
}

export default ProjectModal;
