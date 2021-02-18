import styled from "styled-components";
import sizes from "src/assets/styles/sizes.js";
import colors from "src/assets/styles/colors.js";
import borderStyles from "src/assets/styles/borderStyles.js";

const DottedBox = styled.div`
  position: relative;

  ::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 1px;
    height: 100%;
    background-image: ${borderStyles.backgroundImageV};
    background-size: ${borderStyles.backgroundSizeV};
  }
  ::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    height: 1px;
    width: 100%;
    background-image: ${borderStyles.backgroundImageH};
    background-size: ${borderStyles.backgroundSizeH};
  }
`;

export default DottedBox;
