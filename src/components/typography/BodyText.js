import styled from "styled-components";
import typographySizes from "src/assets/styles/typographySizes.js";
import colors from "src/assets/styles/colors.js";

const BodyText = styled.p`
  font-size: ${typographySizes.s}rem;
  color: ${(props) => (props.color ? props.color : colors.dark)};
  line-height: 1.33;
  font-weight: normal;
  white-space: pre-line;
  .marginP {
    p {
      margin-bottom: 1rem;
    }
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    h7 {
      margin-top: 2rem;
      margin-bottom: 1rem;
    }
  }
  strong {
    font-weight: bold;
  }
`;

export default BodyText;
