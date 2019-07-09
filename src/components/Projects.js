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
    padding: 0 2%;
  }
  @media (max-width: 500px) {
    flex-flow: column;
    align-items: center;
  }
  h1 {
    width: 100%;
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
      description: "PairMe was built during a three day hackathon and is one of my favorite projects I've ever built. I accumulated around 30 hours of work on this project over just the first two days of the hackathon. With the project, we tried to find a way to make it easier for people who wanted to pair program but had trouble finding a partner. ",
      img: pairMe,
      stack: "React, Express, Node, Socket.IO",
      website: 'https://pair-me.netlify.com/',
      cleanWebsite: 'pair-me.netlify.com',
      id: 0
    },
    {
      name: "Bonafind",
      description: "Bonafind is a web application that helps you discover restaurants and businesses near you. You could call it a minimum viable Yelp. This project was built over 5 weeks by a team of  four developers. Nearly everything I know about working on a software team, I learned during this project.",
      stack: "React, Express, Node, PostgreSQL",
      img: bonafind,
      website: 'https://bonafind.netlify.com/',
      cleanWebsite: 'bonafind.biz/',
      id: 1
    },
    {
      name: "Vue Notes",
      description: "The web dev mainstay that we all know and love, the ole' note taking app. I was interested in learning vue after many React Projects. This was my first Vue project but still remains a favorite to this day.",
      stack: "Vue, Express, Node, PostgreSQL",
      img: vueNotes,
      website: 'https://notes-vue.herokuapp.com/',
      cleanWebsite: 'notes-vue.herokuapp.com/',
      id: 2
    },
    {
      name: "Bloggo",
      description: "A full-featured Django blog application build from scratch. The app allows users to create a profile with a profile image (Hosted on AWS) and recieve a password reset email if needed. This app was built as a way to refine my Python skills and become more familiar with Django",
      stack: "Django, PostgreSQL",
      img: djangoBlog,
      cleanWebsite: 'http://django-bloggo.herokuapp.com/',
      cleanWebsite: 'django-bloggo.herokuapp.com/',
      id: 3
    },
  ]
  return (
    <StyledProjects id="projects">
      <h1 className="Projects">Projects</h1>
      {projectData.map((project) =>
        <Project project={project} key={project.id} />
      )}
    </StyledProjects>
  )
}

export default Projects;
