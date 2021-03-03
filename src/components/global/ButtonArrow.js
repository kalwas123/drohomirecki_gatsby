import React from "react";
import styled from "styled-components";
import typographySizes from "src/assets/styles/typographySizes.js";
import { Link } from "gatsby";

const ButtonWrapper = styled.button`
  font-size: ${typographySizes.s}rem;
  margin-top: auto;

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
const LinkWrapper = styled(Link)`
  font-size: ${typographySizes.s}rem;
  margin-top: auto;
  text-decoration: none;
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

const ButtonArrow = ({ children, onClick, typeLink, link }) => (
  <>
    {typeLink ? (
      <LinkWrapper to={link} onClick={onClick}>
        {children} <span>→</span>
      </LinkWrapper>
    ) : (
      <ButtonWrapper onClick={onClick}>
        {children} <span>→</span>
      </ButtonWrapper>
    )}
  </>
);

export default ButtonArrow;
