import React from "react";
import styled from "styled-components";
import sizes from "src/assets/styles/sizes.js";
import colors from "src/assets/styles/colors.js";
import mediaQuery from "src/assets/styles/mediaQuery";
import borderStyles from "src/assets/styles/borderStyles.js";
const SectionWrapper = styled.section`
  position: relative;

  :nth-of-type(1) {
    z-index: 8;
  }
  :nth-of-type(2) {
    z-index: 7;
  }
  :nth-of-type(3) {
    z-index: 6;
  }
  :nth-of-type(4) {
    z-index: 5;
  }
  :nth-of-type(5) {
    z-index: 4;
  }
`;
const Circle = styled.div`
  right: -3.5rem;
  border-radius: 3.5rem;
  border: 0.1rem solid ${colors.borderCol};
  width: 3.5rem !important;
  height: 3.5rem;
  transform: translate(100%, -50%);
  position: absolute;
  background: transparent;
  z-index: 0;
  flex-shrink: 0;
  ::after {
    content: "";
    position: absolute;
    left: -4rem;
    width: 4rem;
    height: 0.1rem;
    transform: translate(0, 1.75rem);
    background-image: ${borderStyles.backgroundImageH};
    background-size: ${borderStyles.backgroundSizeH};
  }
  /* @media (max-width: ${mediaQuery.desktop}) {
    right: calc(${sizes.midMargin}rem - 7rem);
  } */
  @media (max-width: ${mediaQuery.tablet}) {
    display: none;
  }
`;

const CircleLeft = styled(Circle)`
  left: -3.5rem;

  transform: translate(-100%, -50%);
  ::after {
    right: -4rem;
    left: auto;
  }
`;

const Section = ({ children, id }) => (
  <SectionWrapper
    id={id}
    data-sal="slide-down"
    data-sal-easing="ease"
    data-sal-duration="1000"
  >
    <Circle />
    <CircleLeft />
    {children}
  </SectionWrapper>
);

export default Section;
