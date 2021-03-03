import styled from "styled-components";
import mediaQuery from "src/assets/styles/mediaQuery";
import sizes from "src/assets/styles/sizes.js";
import borderStyles from "src/assets/styles/borderStyles.js";

const Wrapper = styled.div`
  width: calc(100vw - ${sizes.bigMargin * 2}rem);
  margin: 0 auto;
  margin-top: 8rem;

  position: relative;
  ::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    width: 0.1rem;
    height: 100%;
    background-image: ${borderStyles.backgroundImageV};
    background-size: ${borderStyles.backgroundSizeV};
    z-index: 9;
  }
  ::before {
    content: "";
    position: absolute;
    bottom: 0;
    right: 0;
    height: 0.1rem;
    width: 100%;
    background-image: ${borderStyles.backgroundImageH};
    background-size: ${borderStyles.backgroundSizeH};
  }
  @media (max-width: ${mediaQuery.desktop}) {
    width: calc(100% - ${sizes.midMargin * 2}rem);
    margin: 0 ${sizes.midMargin}rem;
    margin-top: 8rem;
  }
  @media (max-width: ${mediaQuery.tablet}) {
    width: calc(100% - ${sizes.smallMargin * 2}rem);
    margin: 0 ${sizes.smallMargin}rem;
    margin-top: 0rem;
  }
`;

export default Wrapper;
