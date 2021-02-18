import colors from "src/assets/styles/colors.js";

const borderStyles = {
  backgroundImageH: `linear-gradient(to right, transparent 50%, ${colors.borderCol} 50%)`,
  backgroundImageV: `linear-gradient(to bottom,${colors.borderCol} 50%, transparent 50%)`,

  backgroundSizeH: "1.2rem 100%",
  backgroundSizeV: "100% 1.2rem",
};

export default borderStyles;
