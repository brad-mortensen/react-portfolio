import React from 'react';
import styled from 'styled-components';

import SkillGroup from './SkillGroup';
import {skillData} from './assets/data'



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
      color: black;
    }
  }
`;

const Skills = () => {

  return (
    <StyledSkills id="skills">
      <p>Tech I use <span className="brackets">{"{ full list in resume }"}</span></p>
      {skillData.map(skill =>
        <SkillGroup skill={skill} key={skill.id} />
      )}
    </StyledSkills>
  )
}

export default Skills;
