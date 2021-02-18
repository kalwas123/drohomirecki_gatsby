import React from "react";
import styled from "styled-components";
import colors from "src/assets/styles/colors.js";
import typographySizes from "src/assets/styles/typographySizes.js";

const ButtonWrapper = styled.button`
  font-size: ${typographySizes.s}rem;
  cursor: pointer;
  span {
    margin-left: 5rem;
    transition: all 0.5s;
  }
  :hover {
    span {
      margin-left: 6rem;
      transition: all 0.5s;
    }
  }
`;

const ButtonArrow = ({ children, onClick }) => (
  <ButtonWrapper onClick={onClick}>
    {children} <span>→</span>
  </ButtonWrapper>
);

export default ButtonArrow;
