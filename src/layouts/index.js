import React from "react";
import { ContextProviderComponent } from "src/layouts/Context.js";

import GlobalStyle from "src/assets/styles/globalStyles.js";
import Footer from "src/components/global/Footer";
const IndexPage = ({ children }) => {
  if (typeof window !== "undefined") {
    // eslint-disable-next-line global-require
    require("smooth-scroll")('a[href*="#"]', {
      speed: 1000,
      offset: 100,
      speedAsDuration: true,
      easing: "easeInOutCubic",
    });
  }

  return (
    <ContextProviderComponent>
      <GlobalStyle />
      <div>{children}</div>
      <Footer />
    </ContextProviderComponent>
  );
};

export default IndexPage;
