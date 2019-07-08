import React from 'react';
import styled from 'styled-components';
import Slide from 'react-reveal/Slide';


import Emoji from './Emoji';

const StyledProjectModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(255, 255, 255, 0.6);
  z-index: 100;
  .project-modal {
    width: 66%;
    height: auto;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    background-color: black;
    @media (max-width: 900px) { 
      width: 90%;
    }
    img {
      width: 100%;
    }
    .text-container {
      font-family: 'Montserrat', sans-serif;
      padding: 30px 3% 20px 2%;
      h3{
      /* font-family: 'Carrois Gothic SC', sans-serif; */
      color: black;
      font-size: 3rem;
      }
      a {
        text-decoration: none;
        color: white;
        font-size: 2rem;
      }
      p {
        /* font-family: 'Carrois Gothic SC', sans-serif; */
        font-size: 1.2rem;
        color: white;        
      }
    }
    
  }
`;



const ProjectModal = ({ setViewProject, project }) => {
  const { name, description, img, website, cleanWebsite } = project;
  return (
    <Slide>
      <StyledProjectModal onClick={() => setViewProject(false)} className="project-container">
        <div className="project-modal">
          <img src={img} alt={name} />
          <div className="text-container">
            {/* <h3>{name}</h3> */}
            <a
              href={website}
              target='_blank'
              rel="noopener noreferrer">
              <Emoji symbol="🔗" label="link" />
              <span> </span>
              {cleanWebsite}
            </a>
            <p>{description}</p>
          </div>
        </div>
      </StyledProjectModal>
    </Slide>
  )
}

export default ProjectModal;
