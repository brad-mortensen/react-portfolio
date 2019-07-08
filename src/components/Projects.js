import React from 'react';
import styled from 'styled-components';

import bonafind from './assets/bonafind.png';
import vueNotes from './assets/vue-notes.png';
import djangoBlog from './assets/django-blog.png';
import pairMe from './assets/pair-me.png';

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
    flex-flow: column;
    align-items: center;
    padding: 0 2%;
  }
  h1 {
    width: 100%;
    text-align: center;
    font-family: 'Carrois Gothic SC', sans-serif;
    font-size: 2rem;
    font-weight: lighter;
    color: white;
    margin-bottom: 30px;
  }
`;

const Projects = () => {
  const projectData = [
    {
      name: "PairMe",
      description: "PairMe was built during a three day hackathon and is one of my favorite projects I've ever built. We tried to find a way to make it easier for people who wanted to pair program, but didn't have the opportunity, to find someone to work with. ",
      img: pairMe,
      website: 'https://pair-me.netlify.com/',
      cleanWebsite: 'pair-me.netlify.com',
      id: 0
    },
    {
      name: "Bonafind",
      description: "Bonafind is a web application that helps you discover restaurants and businesses near you. Users can leave personalized reviews, find hours, photos and contact information related to the businesses. A user can upgrade their account for access to premium features such as leaving more than 3 reviews at a time.",
      stack: "React, Express, Node, PostgreSQL",
      img: bonafind,
      website: 'https://bonafind.netlify.com/',
      cleanWebsite: 'bonafind.biz/',
      id: 1
    },
    {
      name: "Vue Notes",
      description: "A fundamental note-taking web application that helped me understand the finer details of lacing a React front end to a RESTful API built from scratch.",
      stack: "Vue, Express, Node, PostgreSQL",
      img: vueNotes,
      website: 'https://notes-vue.herokuapp.com/',
      cleanWebsite: 'notes-vue.herokuapp.com/',
      id: 2
    },
    {
      name: "Bloggo",
      description: "A full-featured Django blog application build from scratch. The app allows users to create a profile with a profile image (Hosted on AWS) and recieve a password reset email if needed.",
      stack: "Django, PostgreSQL",
      img: djangoBlog,
      cleanWebsite: 'django-bloggo.herokuapp.com/',
      id: 3
    },
  ]
  return (
    <StyledProjects>
      <h1 className="Projects">Check Out Some of My Favorite Projects</h1>
      {projectData.map((project) =>
        <Project project={project} key={project.id} />
      )}
    </StyledProjects>
  )
}

export default Projects;
