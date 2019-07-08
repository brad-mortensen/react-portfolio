import React from 'react'
import styled from 'styled-components'

const StyledSkillGroup = styled.div`
  width: 47%;
  height: auto;
  box-sizing: border-box;
  position: relative;
  border: 1px solid black;
  margin-bottom: 30px;
  background-color: white;
  padding-bottom: 10px;
  h3 {
    color: black;
  }
  .skill-imgs {
    width: 100%;
    display: flex;
    height: auto;
    justify-content: space-around;
    align-items: center;
    img {
      width: 25%;
    }
  }
`;

const SkillGroup = ({skill}) => {
  const {groupName, assets} = skill;
  return (
    <StyledSkillGroup>
      <h3>{groupName}</h3>
      <div className="skill-imgs">
        {assets.map(asset=>
          <img src={asset.img} alt={asset.name}/>
        )}
      </div>
    </StyledSkillGroup>
  )
}

export default SkillGroup
