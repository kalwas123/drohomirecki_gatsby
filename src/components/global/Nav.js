import React from "react";
import styled from "styled-components";
import colors from "src/assets/styles/colors.js";
import DottedBox from "src/components/global/DottedBox.js";
import { StaticQuery, graphql } from "gatsby";
import typographySizes from "src/assets/styles/typographySizes.js";
import mediaQuery from "src/assets/styles/mediaQuery";

import borderStyles from "src/assets/styles/borderStyles.js";
import Wrapper from "src/components/global/Wrapper.js";
import BackgroundImage from "gatsby-background-image";
import { Link } from "gatsby";

import sizes from "src/assets/styles/sizes.js";
import ContextConsumer from "src/layouts/Context.js";

const CloseBtn = styled.button`
  display: inline-block;
  position: fixed;
  right: calc(${sizes.bigMargin}rem - 7rem);
  flex-shrink: 1;
  border-radius: 3.5rem;
  border: 0.1rem solid ${colors.borderCol};
  width: 3.5rem !important;
  height: 3.5rem;
  transform: translateY(-50%);
  margin: 0;
  padding: 0;
  outline: 0;
  background: transparent;
  cursor: pointer;
  z-index: 11;
  background-color: ${colors.white};
  flex-shrink: 0;
  ::after {
    content: "";
    position: absolute;
    left: -4rem;
    width: 4rem;
    height: 0.1rem;
    background-image: ${borderStyles.backgroundImageH};
    background-size: ${borderStyles.backgroundSizeH};
  }
  @media (max-width: ${mediaQuery.desktop}) {
    right: calc(${sizes.midMargin}rem - 7rem);
  }
  @media (max-width: ${mediaQuery.tablet}) {
    background-color: ${colors.white};
    transform: translateY(-50%);
    right: ${sizes.smallMargin * 2}rem;
    top: ${sizes.smallMargin}rem;
    transform: translateY(0%);
    z-index: 100;
    ::after {
      display: none;
    }
  }
`;
const Line = styled.div`
  display: block;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;

  display: block;
  width: 1.7rem;
  height: 0.2rem;
  background: ${colors.dark};
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
`;

const Line1 = styled(Line)`
  transform: translateY(-0.3rem);
  transition: all 0.5s;

  &.open {
    transform: rotate(225deg) translateY(0px);
    transition: all 0.5s;
  }
`;
const Line2 = styled(Line)`
  transform: translateY(0.3rem);
  transition: all 0.5s;

  &.open {
    transform: rotate(-45deg) translateY(0px);
    transition: all 0.5s;
  }
`;

const BgWhite = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: ${colors.white};
  position: fixed;
  left: 0;
  top: 0;
  z-index: 10;
  pointer-events: none;
  opacity: 0;
  transition: 1s;
  &.open {
    opacity: 1;
    transition: 1s;
    pointer-events: auto;
  }
  @media (max-width: ${mediaQuery.tablet}) {
    display: none;
  }
`;

const StyledWrapper = styled.div`
  width: 100%;
  height: 100%;
  /* margin-top: 0; */
  /* height: calc(100vh - 16rem); */
  display: flex;
  justify-content: space-between;
  background-color: ${colors.white};
  ::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    width: 0.1rem;
    height: 100%;
    background-image: ${borderStyles.backgroundImageV};
    background-size: ${borderStyles.backgroundSizeV};
    z-index: 100;
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
    z-index: 100;
  }
  transform: translate(0, calc(100% + 2rem));
  transition: all 1s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;

  &.open {
    transform: translate(0, 0%);
    transition: all 1s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;
  }
`;
const OutWrapper = styled(Wrapper)`
  z-index: 10;
  position: fixed;

  margin-top: 0;
  height: calc(100vh - 16rem);
  pointer-events: none;
  overflow: hidden;
  ::before {
    display: none;
  }
  ::after {
    display: none;
  }
  &.open {
    ::before {
      display: block;
    }
    ::after {
      display: block;
    }
  }
  @media (max-width: ${mediaQuery.desktop}) {
    left: 0;
  }
  &.open {
    pointer-events: auto;
  }
  @media (max-width: ${mediaQuery.tablet}) {
    height: auto;
  }
`;

const StyledBackgroundImage = styled(BackgroundImage)`
  height: 100%;
  width: 100%;
`;

const ImgWrapper = styled(DottedBox)`
  height: 100%;
  width: 58.33%;
  ::after {
    z-index: 100;
  }
  ::before {
    z-index: 100;
  }
  @media (max-width: ${mediaQuery.tablet}) {
    display: none;
  }
`;

const ContentWrapper = styled.div`
  width: 41.66%;
  display: flex;
  flex-direction: column;
  @media (max-width: ${mediaQuery.tablet}) {
    width: 100%;
  }
`;

const ContentWrapperTop = styled(DottedBox)`
  padding: ${sizes.smallInMargin}rem;
  height: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

const ContentWrapperBottom = styled(DottedBox)`
  padding: ${sizes.smallInMargin}rem;
`;

const NavTitle = styled.h2`
  font-weight: bold;
  font-size: ${typographySizes.s}rem;
`;

const NavWrapper = styled.nav`
  @media (max-width: ${mediaQuery.tablet}) {
    margin-top: 5rem;
  }
`;

const NavLink = styled(Link)`
  font-size: ${typographySizes.s}rem;
  font-weight: bold;
  width: 100%;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  text-decoration: none;
  padding: 1rem 0;
  &.active {
    text-decoration: underline;
    cursor: not-allowed;
  }
  span {
    opacity: 0;
    transform: translateX(-20px);
    transition: all 1s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;
  }
  :hover {
    span {
      opacity: 1;
      transform: translateX(0px);
      transition: all 1s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;
    }
  }
  @media (max-width: ${mediaQuery.tablet}) {
    padding: 1.5rem 0;
  }
`;

const NavLinkOffer = styled(NavLink)`
  color: ${colors.red};
`;

export default function Nav() {
  return (
    <StaticQuery
      query={graphql`
        query Nav {
          strapiNav {
            Img {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      `}
      render={(query) => (
        <ContextConsumer>
          {({ data, set }) => (
            <>
              <CloseBtn
                onClick={() =>
                  set({
                    navOpen: data.navOpen ? false : true,
                  })
                }
              >
                <Line1 className={data.navOpen ? "open" : ""} />
                <Line2 className={data.navOpen ? "open" : ""} />
              </CloseBtn>
              <BgWhite className={data.navOpen ? "open" : ""} />
              <OutWrapper className={data.navOpen ? "open" : ""}>
                <StyledWrapper className={data.navOpen ? "open" : ""}>
                  <ImgWrapper>
                    <StyledBackgroundImage
                      fluid={query.strapiNav.Img.childImageSharp.fluid}
                    />
                  </ImgWrapper>
                  <ContentWrapper>
                    <ContentWrapperTop>
                      <NavTitle>Menu</NavTitle>
                      <NavWrapper>
                        <NavLink
                          onClick={() =>
                            set({
                              navOpen: data.navOpen ? false : true,
                            })
                          }
                          to="/"
                        >
                          O mnie <span>→</span>
                        </NavLink>
                        <NavLink
                          activeClassName="active"
                          onClick={() =>
                            set({
                              navOpen: data.navOpen ? false : true,
                            })
                          }
                          to="/momenty_przelomowe"
                        >
                          Kalendarium <span>→</span>
                        </NavLink>
                        <NavLink
                          activeClassName="active"
                          onClick={() =>
                            set({
                              navOpen: data.navOpen ? false : true,
                            })
                          }
                          to="/realizacje"
                        >
                          Realizacje <span>→</span>
                        </NavLink>
                        <NavLink
                          activeClassName="active"
                          onClick={() =>
                            set({
                              navOpen: data.navOpen ? false : true,
                            })
                          }
                          to="/news-blog/"
                        >
                          Blog/News
                          <span>→</span>
                        </NavLink>
                        <NavLink
                          aria-label="scroll down"
                          onClick={() =>
                            set({
                              navOpen: data.navOpen ? false : true,
                            })
                          }
                          to="#footer"
                        >
                          Kontakt <span>→</span>
                        </NavLink>
                      </NavWrapper>
                    </ContentWrapperTop>
                    <ContentWrapperBottom>
                      <NavLinkOffer
                        aria-label="scroll down"
                        onClick={() =>
                          set({
                            navOpen: data.navOpen ? false : true,
                          })
                        }
                        to="/#oferta"
                      >
                        Oferta<span>→</span>
                      </NavLinkOffer>
                    </ContentWrapperBottom>
                  </ContentWrapper>
                </StyledWrapper>
              </OutWrapper>
            </>
          )}
        </ContextConsumer>
      )}
    />
  );
}
