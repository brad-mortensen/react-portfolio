import React from 'react'
import styled from 'styled-components'

const StyledSkillGroup = styled.div`
  width: 47%;
  box-sizing: border-box;
  position: relative;
  margin-bottom: 30px;
  background-color: black;
  @media (max-width: 900px) {
    width: 96%;
  }
  h3 {
    color: white;
  }
`;

const SkillGroup = ({skill}) => {
  const {groupName, assets} = skill;
  return (
    <StyledSkillGroup>
      <h3>{groupName}</h3>
      <div className="skill-img">
        {assets.map(asset=>
          <img src={asset} alt={asset.name}/>
        )}
      </div>
    </StyledSkillGroup>
  )
}

export default SkillGroup
