import * as React from "react";
import styled from "styled-components";

import typographySizes from "src/assets/styles/typographySizes.js";
import Wrapper from "src/components/global/Wrapper.js";
import colors from "src/assets/styles/colors.js";
import DottedBox from "src/components/global/DottedBox.js";
import BackgroundImage from "gatsby-background-image";

import sizes from "src/assets/styles/sizes.js";
import BigTitle from "src/components/typography/BigTitle.js";

import Nav from "src/components/global/Nav.js";
import mediaQuery from "src/assets/styles/mediaQuery";

import Moment from "src/components/global/moments/Moment.js";
import LogoLink from "src/components/global/LogoLink.js";
import SEO from "src/components/global/SEO.js";

const StyledWrapper = styled(Wrapper)`
  /* &.modal-open {
    position: fixed;
    left: ${sizes.bigMargin}rem;
  } */
`;
const Header = styled.header`
  display: flex;
  justify-content: space-between;
  height: 20rem;
  width: 100%;
  @media (max-width: ${mediaQuery.tablet}) {
    height: auto;
    flex-wrap: wrap;
  }
`;

const HeaderTitleWrapper = styled(DottedBox)`
  width: calc(41.33% - ${sizes.smallInMargin * 2}rem);
  padding: ${sizes.smallInMargin}rem;
  height: 100%;
  padding-top: 5rem;
  @media (max-width: ${mediaQuery.laptop}) {
    width: calc(50% - ${sizes.smallInMargin * 2}rem);
  }
  @media (max-width: ${mediaQuery.tablet}) {
    width: calc(100% - ${sizes.smallInMargin * 2}rem);
    padding-top: 15rem;

    ${BigTitle} {
      width: 70%;
    }
  }
`;

const ImgWrapper = styled(DottedBox)`
  height: 100%;
  width: 66.66%;
  @media (max-width: ${mediaQuery.laptop}) {
    width: 50%;
  }
  @media (max-width: ${mediaQuery.tablet}) {
    width: 100%;
    height: 10rem;
  }
`;

const StyledBackgroundImage = styled(BackgroundImage)`
  height: 100%;
  width: 100%;
  z-index: -10;
`;

const NavWrapper = styled(DottedBox)`
  display: flex;
  height: 12rem;
  width: 100%;
  @media (max-width: ${mediaQuery.tablet}) {
    height: auto;
    flex-wrap: wrap;
  }
`;

const NavWrapperFirst = styled.div`
  width: 41.33%;
  display: flex;
  @media (max-width: ${mediaQuery.laptop}) {
    width: 50%;
  }
  @media (max-width: ${mediaQuery.tablet}) {
    width: 100%;
    flex-wrap: wrap;
  }
`;

const NavWrapperSecond = styled.div`
  display: flex;
  width: 66.66%;
  @media (max-width: ${mediaQuery.laptop}) {
    width: 50%;
  }
  @media (max-width: ${mediaQuery.tablet}) {
    width: 100%;
  }
`;

const NavLink = styled.button`
  font-size: ${typographySizes.s}rem;
  text-decoration: none;
  color: ${colors.dark};
  padding: ${sizes.smallInMargin}rem;
  cursor: pointer;
  transition: all 0.5s;
  text-align: left;
  &.third {
    padding-left: 0;
  }
  &.active.first {
    color: ${colors.blue};
    transition: all 0.5s;
  }
  &.active.sec {
    color: ${colors.red};
    transition: all 0.5s;
  }
  &.active.third {
    color: ${colors.gold};
    transition: all 0.5s;
  }

  :hover {
    &.first {
      color: ${colors.blue};
      transition: all 0.5s;
    }
    &.sec {
      color: ${colors.red};
      transition: all 0.5s;
    }
    &.third {
      color: ${colors.gold};
      transition: all 0.5s;
    }
  }

  @media (max-width: ${mediaQuery.mobile}) {
    width: 100%;
  }
  @media (max-width: ${mediaQuery.tablet}) {
    &.third {
      padding-left: ${sizes.smallInMargin}rem;
    }
  }
`;

class IndexPage extends React.Component {
  state = { category: "Momenty_przelomowe" };

  render() {
    return (
      <StyledWrapper>
        <SEO
          title={this.props.data.strapiMomentsPage.SEO.Title}
          description={this.props.data.strapiMomentsPage.SEO.Description}
          image={this.props.data.strapiMomentsPage.SEO.Img.publicURL}
        />
        <LogoLink />
        <Nav />

        <Header
          data-sal="slide-up"
          data-sal-easing="ease"
          data-sal-duration="1000"
        >
          <HeaderTitleWrapper>
            <BigTitle>Momenty przełomowe</BigTitle>
          </HeaderTitleWrapper>
          <ImgWrapper>
            <StyledBackgroundImage
              fluid={
                this.props.data.strapiHomePage.Moments_img.childImageSharp.fluid
              }
            />
          </ImgWrapper>
        </Header>
        <NavWrapper
          data-sal="slide-up"
          data-sal-easing="ease"
          data-sal-duration="1000"
        >
          <NavWrapperFirst>
            <NavLink
              className={
                this.state.category === "Momenty_przelomowe"
                  ? "active first"
                  : "first"
              }
              onClick={() => {
                this.setState({
                  category: "Momenty_przelomowe",
                });
              }}
            >
              Momenty przełomowe
            </NavLink>
            <NavLink
              className={
                this.state.category === "Etapy_ksztaltujace"
                  ? "active sec"
                  : "sec"
              }
              onClick={() => {
                this.setState({
                  category: "Etapy_ksztaltujace",
                });
              }}
            >
              Etapy kształtujące
            </NavLink>
          </NavWrapperFirst>
          <NavWrapperSecond>
            <NavLink
              className={
                this.state.category === "Kalendarium" ? "active third" : "third"
              }
              onClick={() => {
                this.setState({
                  category: "Kalendarium",
                });
              }}
            >
              Kalendarium
            </NavLink>
          </NavWrapperSecond>
        </NavWrapper>
        {this.props.data.allStrapiMoments.edges.map((document) => (
          <Moment
            curentType={this.state.category}
            type={document.node.Type}
            title={document.node.Title}
            year={document.node.Years}
            description={document.node.Description}
          />
        ))}
      </StyledWrapper>
    );
  }
}

export const query = graphql`
  query Moments {
    strapiHomePage {
      Moments_img {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
    allStrapiMoments(sort: { fields: Years, order: ASC }) {
      edges {
        node {
          Title
          Type
          Years
          Description
        }
      }
    }
    strapiMomentsPage {
      SEO {
        Description
        Title
        Img {
          publicURL
        }
      }
    }
  }
`;

export default IndexPage;
