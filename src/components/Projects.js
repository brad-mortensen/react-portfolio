import React from 'react';
import styled from 'styled-components';
import bonafind from './assets/bonafind.png';
import vueNotes from './assets/vue-notes.png';
import djangoBlog from './assets/django-blog.png';


import Project from './Project';

const StyledProjects = styled.div`
  width: 100%;
  border-bottom: 1px solid orange;
  height: auto;
  h1 {
    text-align: center;
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
      {projectData.map(project => 
        <Project project={project}/>
      )}
    </StyledProjects>
  )
}

export default Projects;
