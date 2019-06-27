import React from 'react';
import styled from 'styled-components';
import bonafind from './assets/bonafind.png';
import vueNotes from './assets/vue-notes.png';
import djangoBlog from './assets/django-blog.png';

import Project from './Project';

const StyledProjects = styled.div`
  box-sizing: border-box;
  width: 100%;
  border-bottom: 1px solid orange;
  height: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-flow: row wrap;
  padding: 0 2% 40px 2%;
  background-color: black;
  h1 {
    width: 100%;
    font-family: 'Carrois Gothic SC', sans-serif;
    font-size: 2rem;
    font-weight: lighter;
    color: white;
  }
`;

const Projects = () => {
  const projectData = [
    {
      name: "Bonafind",
      description: "a cool app",
      stack: "React, Express, Node, PostgreSQL",
      img: bonafind
    },
    {
      name: "Vue Notes",
      description: "a Vue app",
      stack: "Vue, Express, Node, PostgreSQL",
      img: vueNotes
    },
    {
      name: "Django Blog",
      description: "Django Blog Site",
      stack: "Django, PostgreSQL",
      img: djangoBlog
    },
  ]
  return (
    <StyledProjects>
      <h1 className="projects">projects</h1>
      {projectData.map(project => 
        <Project project={project}/>
      )}
    </StyledProjects>
  )
}

export default Projects;
