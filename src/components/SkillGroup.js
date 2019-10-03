import React from 'react'
import styled from 'styled-components'

const StyledSkillGroup = styled.div`
  width: 47%;
  height: auto;
  box-sizing: border-box;
  position: relative;
  margin-bottom: 30px;
  background-color: white;
  padding-bottom: 10px;
  border-radius: 5px;
  @media (max-width: 500px) {
    width: 96%;
  }
  .skill-header {
    width: 100%;
    color: black;
    font-family: 'Carrois Gothic SC', sans-serif;
    font-size: 1.4rem;
    padding-left: 10%;
    margin: 5px 0;
  }
  .skill-imgs {
    width: 100%;
    display: flex;
    height: auto;
    justify-content: space-around;
    align-items: center;
    img {
      width: 20%;
    }
  }
`;

const SkillGroup = ({ skill }) => {
  const { groupName, assets } = skill;
  return (
    <StyledSkillGroup>
      <p className="skill-header">{groupName}</p>
      <div className="skill-imgs">
        {assets.map(({name, img, id}) =>
          <img className="tech-image" key={id} src={img} alt={name} />
        )}
      </div>
    </StyledSkillGroup>
  )
}

export default SkillGroup
