import React, { useState } from 'react';
import styled from 'styled-components';

const StyledProject = styled.div`
  width: 31%;
  box-sizing: border-box;
  position: relative;
  .no-hover {
    width: 100%;
    height: auto;    
  }
  .hover {
    width: 100%;
    height: auto;
    opacity: .4;
  }
  .img-header {
    position: absolute;
    bottom: 8px;
    left: 16px;
  }
  .img-text {
    position: absolute;
    bottom: 8px;
    left: 16px;
  }
  
`;

const Project = ({ project }) => {
  const { name, description, img } = project;
  const [hovering, setHovering] = useState(false)
  return (
    <StyledProject>
      {hovering ? <><img className="hover" onMouseEnter={() => setHovering(true)} onMouseLeave={() => setHovering(false)} src={img} alt={name} /> <h1 className="img-header">{name}</h1> <p className="img-text">{description}</p></> : <img className="no-hover" onMouseEnter={() => setHovering(true)} onMouseLeave={() => setHovering(false)} src={img} alt={name} />}
    </StyledProject>
  )
}

export default Project;
