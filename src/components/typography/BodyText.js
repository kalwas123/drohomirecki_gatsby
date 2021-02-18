import styled from "styled-components";
import typographySizes from "src/assets/styles/typographySizes.js";
import colors from "src/assets/styles/colors.js";
import mediaQuery from "src/assets/styles/mediaQuery";

const BodyText = styled.p`
  font-size: ${typographySizes.s}rem;
  color: ${(props) => (props.color ? props.color : colors.dark)};
  line-height: 1.33;
  font-weight: normal;
  .marginP {
    p {
      margin-bottom: 1rem;
    }
  }
`;

export default BodyText;
