import styled from "styled-components";
import colors from "src/assets/styles/colors.js";
import DottedBox from "src/components/global/DottedBox.js";

const StripeBox = styled(DottedBox)`
  width: 4rem;
  z-index: -9999;
  background: repeating-linear-gradient(
    -45deg,
    ${colors.borderCol},
    ${colors.borderCol} 1px,
    ${colors.white} 1px,
    ${colors.white} 10px
  );
`;

export default StripeBox;
