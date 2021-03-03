import React from "react";
import styled from "styled-components";
import sizes from "src/assets/styles/sizes.js";

import mediaQuery from "src/assets/styles/mediaQuery";

import Logo from "src/assets/svg/logo-black.svg";

import { Link } from "gatsby";

const LogoWrapper = styled(Link)`
  position: absolute;
  top: -5.2rem;
  left: -5.2rem;
  z-index: 10;

  img {
    width: 7rem;
    height: 7rem;
  }
  @media (max-width: ${mediaQuery.tablet}) {
    top: ${sizes.smallMargin}rem;
    left: ${sizes.smallMargin}rem;
  }
`;

const LogoLink = () => (
  <LogoWrapper to="/">
    <img src={Logo} alt="Logo" />
  </LogoWrapper>
);

export default LogoLink;
