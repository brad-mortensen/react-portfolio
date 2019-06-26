import React from 'react';
import styled from 'styled-components';

const StyledSkills = styled.div`
  width: 100%;
  border-bottom: 1px solid purple;
  height: auto;
  h1 {
    text-align: center;
  }
`;

const Skills = () => {
  return (
    <StyledSkills>
      <h1>Skills</h1>
    </StyledSkills>
  )
}

export default Skills;
