import styled from "styled-components";
import typographySizes from "src/assets/styles/typographySizes.js";
import colors from "src/assets/styles/colors.js";
import mediaQuery from "src/assets/styles/mediaQuery";

const SmallTitle = styled.h2`
  font-size: ${typographySizes.m}rem;
  color: ${(props) => (props.Color ? props.Color : colors.darkGrey)};
  line-height: 1.2;
  font-weight: bold;
`;

export default SmallTitle;
