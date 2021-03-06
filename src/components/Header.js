import React from "react";
import styled from "styled-components";
import NavBar from "./NavBar";
import HeaderContent from "./HeaderContent";

const Header = () => {
  return (
    <StyledHeader>
      <NavBar />
      <HeaderContent />
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.div`
  width: 100%;
  box-sizing: border-box;
`;
