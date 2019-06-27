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
  padding: 0 2% 30px 2%;
  background-color: black;
  @media (max-width: 900px) {
    flex-flow: column;
    align-items: center;
    padding: 0 2%;
  }
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
      description: "Bonafind is a web application that helps you discover restaurants and businesses near you. Users can leave personalized reviews, find hours, photos and contact information related to the businesses. A user can upgrade their account for access to premium features such as leaving more than 3 reviews at a time.",
      stack: "React, Express, Node, PostgreSQL",
      img: bonafind,
      id: 1
    },
    {
      name: "Vue Notes",
      description: "A fundamental note-taking web application that helped me understand the finer details of lacing a React front end to a RESTful API built from scratch.",
      stack: "Vue, Express, Node, PostgreSQL",
      img: vueNotes,
      id: 2
    },
    {
      name: "Django Blog",
      description: "A full-featured Django blog application build from scratch. The app allows users to create a profile with a profile image (Hosted on AWS) and recieve a password reset email if needed.",
      stack: "Django, PostgreSQL",
      img: djangoBlog,
      id: 3
    },
  ]
  return (
    <StyledProjects>
      <h1 className="projects">projects</h1>
      {projectData.map((project) =>
        <Project project={project} key={project.id} />
      )}
    </StyledProjects>
  )
}

export default Projects;
