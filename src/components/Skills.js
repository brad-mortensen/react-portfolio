import React from 'react';
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
      groupName: "javascript",
      assets: [],
      id: 0
    },
    {
      groupName: "python",
      assets: [],
      id: 1
    },
    {
      groupName: "backend",
      assets: [
        // {
        //   name:
        //   img,
        //   id:0
        // }
      ],
      id: 2
    },
    {
      groupName: "tools",
      assets: [],
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
