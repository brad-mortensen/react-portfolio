import React from 'react';
import javascript from './assets/javascript.svg';
import nodejs from './assets/nodejs-1.svg';
import npm from './assets/npm.svg';
import postgresql from './assets/postgresql.svg';
import vue from './assets/vue-9.svg';
import react from './assets/react.svg';
import python from './assets/python-5.svg';
import visualStudioCode from './assets/visual-studio-code.svg';
import angular from './assets/angular.svg';
import c from './assets/c.svg';
import django from './assets/django.svg';
import git from './assets/git.svg';
import html5 from './assets/html5.svg';
import bootstrap4 from './assets/bootstrap4.svg';
import css3 from './assets/css3.svg';


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
  padding: 0 5% 30px 5%;
  background-color: #00d1b2;
  p {
    width: 100%;
    font-family: 'Carrois Gothic SC', sans-serif;
    font-size: 2rem;
    color: black;
    .brackets {
      font-size: 1rem;
    }
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
          name: 'react',
          img: react,
          id: 0
        },
        {
          name: 'vue',
          img: vue,
          id: 1
        },
        {
          name: 'angular',
          img: angular,
          id: 2
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
          name: 'django',
          img: django,
          id: 2
        }
      ],
      id: 2
    },    
    {
      groupName: "tools",
      assets: [
        {
          name: 'git',
          img: git,
          id: 0
        },
        {
          name: 'vscode',
          img: visualStudioCode,
          id: 1
        },
        {
          name: 'npm',
          img: npm,
          id: 2
        }
      ],
      id: 3
    },
    {
      groupName: "ui/ux",
      assets: [
        {
          name: 'html5',
          img: html5,
          id: 0
        },
        {
          name: 'css3',
          img: css3,
          id: 1
        },
        {
          name: 'bootstrap4',
          img: bootstrap4,
          id: 2
        }
      ],
      id: 4
    },
  ]
  return (
    <StyledSkills id="skills">
      <p>Some tech I use <span className="brackets">[full list in resume]</span></p>
      {skillData.map(skill =>
        <SkillGroup skill={skill} key={skill.id} />
      )}
    </StyledSkills>
  )
}

export default Skills;
