import styled from "styled-components";
import typographySizes from "src/assets/styles/typographySizes.js";
import colors from "src/assets/styles/colors.js";

const BigTitle = styled.h2`
  font-size: ${typographySizes.l}rem;
  color: ${(props) => (props.Color ? props.Color : colors.darkGrey)};
  line-height: 1.2;
  font-weight: normal;
  text-transform: uppercase;
`;

export default BigTitle;
