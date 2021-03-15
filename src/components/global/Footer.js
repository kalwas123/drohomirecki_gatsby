import React from "react";
import styled from "styled-components";
import sizes from "src/assets/styles/sizes.js";
import colors from "src/assets/styles/colors.js";
import mediaQuery from "src/assets/styles/mediaQuery";
import borderStyles from "src/assets/styles/borderStyles.js";
import Logo from "src/assets/svg/logo-black.svg";
import Wrapper from "src/components/global/Wrapper.js";
import { StaticQuery, graphql } from "gatsby";
import BodyText from "src/components/typography/BodyText.js";

const StyledWrapper = styled.div`
  width: calc(100vw - ${sizes.bigMargin * 2}rem);
  margin: 0 auto;
  margin-bottom: 18rem;

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
    margin-bottom: 5rem;
  }
`;

const FooterWrapper = styled.footer`
  position: relative;
  padding: 5rem ${sizes.smallInMargin}rem;
  img {
    width: 7rem;
    height: 7rem;
  }
  ::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 1px;
    height: 100%;
    background-image: ${borderStyles.backgroundImageV};
    background-size: ${borderStyles.backgroundSizeV};
    z-index: 1;
  }
`;
const CircleWrapper = styled.div`
  display: flex;
`;

const Circle = styled.div`
  border-radius: 3.5rem;
  border: 0.1rem solid ${colors.borderCol};
  width: 3.5rem !important;
  height: 3.5rem;
  transform: translate(0%, 0%);
  position: absolute;
  background: transparent;
  z-index: 0;
  flex-shrink: 0;
  margin-top: 7rem;
  transform: translate(-50%, 0);
  left: 0;

  :nth-of-type(2) {
    left: auto;
    right: 0;
    transform: translate(50%, 0);
  }
  ::after {
    content: "";
    position: absolute;
    left: 1.65rem;
    width: 0.1rem;
    height: 7rem;
    top: -7rem;
    background-image: ${borderStyles.backgroundImageV};
    background-size: ${borderStyles.backgroundSizeV};
  }

  @media (max-width: ${mediaQuery.tablet}) {
    display: none;
  }
`;

const FotterBottom = styled.div`
  margin-top: 4rem;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  a {
    text-decoration: none;
  }

  @media (max-width: ${mediaQuery.laptop}) {
    ${BodyText} {
      width: 50%;
      margin-bottom: 5rem;
    }
    margin-bottom: -5rem;
  }
  @media (max-width: ${mediaQuery.mobile}) {
    ${BodyText} {
      width: 100%;
    }
  }
`;

const Footer = () => {
  return (
    <StaticQuery
      query={graphql`
        query Footer {
          strapiContact {
            City
            Instagram
            LinkedIn
            Mail
            Name
            Street
            Tel
          }
        }
      `}
      render={(data) => (
        <StyledWrapper>
          <FooterWrapper
            id="footer"
            data-sal="slide-down"
            data-sal-easing="ease"
            data-sal-duration="1000"
          >
            <img src={Logo} alt="logo" />
            <FotterBottom>
              <BodyText>{data.strapiContact.Name}</BodyText>
              <BodyText>
                {data.strapiContact.Street} <br />
                {data.strapiContact.City}
              </BodyText>
              <BodyText>
                <a href={`tel:${data.strapiContact.Tel}`}>
                  {data.strapiContact.Tel}
                </a>
                <br />
                <a href={`mailto:${data.strapiContact.Mail}`}>
                  {data.strapiContact.Mail}
                </a>
              </BodyText>
              <BodyText>
                <a href={data.strapiContact.LinkedIn} target="blank">
                  LinkedIn
                </a>
                <br />
                <a href={data.strapiContact.Instagram} target="blank">
                  Instagram
                </a>
              </BodyText>
            </FotterBottom>
          </FooterWrapper>
          <CircleWrapper>
            <Circle />
            <Circle />
          </CircleWrapper>
        </StyledWrapper>
      )}
    />
  );
};
export default Footer;
