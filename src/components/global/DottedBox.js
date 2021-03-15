import styled from "styled-components";
import borderStyles from "src/assets/styles/borderStyles.js";

const DottedBox = styled.div`
  position: relative;

  ::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 0.1rem;
    height: 100%;
    background-image: ${borderStyles.backgroundImageV};
    background-size: ${borderStyles.backgroundSizeV};
    z-index: 1;
  }
  ::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    height: 0.1rem;
    width: 100%;
    background-image: ${borderStyles.backgroundImageH};
    background-size: ${borderStyles.backgroundSizeH};
    z-index: 1;
  }
`;

export default DottedBox;
