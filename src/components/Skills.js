import React from 'react';
import javascript from './assets/javascript';
import nodejs from './assets/nodejs-1';
import npm from './assets/npm';
import postgresql from './assets/postgresql';
import vue from './assets/vue-9';
import react from './assets/react';
import python from './assets/python-5';
import yarn from './assets/yarn';
import sqlite from './assets/sqlite';
import c from './assets/c';
import django from './assets/django';


import styled from 'styled-components';
import SkillGroup from './SkillGroup';



const StyledSkills = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-around;
  align-items: top;
  flex-flow: row wrap;
  padding: 0 2% 30px 2%;
  background-color: white;
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
    color: black;
  }
`;

const Skills = () => {
  const skillData = [
    {
      groupName: "languages",
      assets: [
        {
          name: 'javascript',
          img: javascript,
          id: 0
        },
        {
          name: 'python',
          img: python,
          id: 1
        },
        {
          name: 'c',
          img: c,
          id: 2
        }
      ],
      id: 0
    },
    {
      groupName: "frontend",
      assets: [
        {
          name:'react',
          img: react,
          id:0
        },
        {
          name:'vue',
          img: vue,
          id:1
        },
        {
          name:'django',
          img: django,
          id:2
        }
      ],
      id: 1
    },
    {
      groupName: "backend",
      assets: [
        {
          name: 'nodejs',
          img: nodejs,
          id: 0
        },
        {
          name: 'postgresql',
          img: postgresql,
          id: 1
        },
        {
          name: 'sqlite',
          img: sqlite,
          id: 2
        }
      ],
      id: 2
    },
    {
      groupName: "tools",
      assets: [
        {
          name:'git',
          img: git,
          id:0
        },
        {
          name:'npm',
          img: npm,
          id:1
        },
        {
          name:'yarn',
          img:yarn,
          id:2
        }
      ],
      id: 3
    },
  ]
  return (
    <StyledSkills>
      <h1>Skills</h1>
      {skillData.map(skill =>
        <SkillGroup skill={skill} key={skill.id} />
      )}
    </StyledSkills>
  )
}

export default Skills;
