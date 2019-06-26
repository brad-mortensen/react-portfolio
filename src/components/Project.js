import React from 'react';
import styled from 'styled-components';

const StyledProject = styled.div`
  width: 100%;
  box-sizing: border-box;
  img {
    width: 45%;
    height: auto;
  }
`;

const Project = ({project}) => {
  const {name, description, img} = project;
  return (
    <StyledProject>
      <h1>{name}</h1>
      <p>{description}</p>
      <img src={img} alt={name}/>
    </StyledProject>
  )
}

export default Project;
