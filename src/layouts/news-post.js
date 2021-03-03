import * as React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

import typographySizes from "src/assets/styles/typographySizes.js";
import Wrapper from "src/components/global/Wrapper.js";
import colors from "src/assets/styles/colors.js";
import DottedBox from "src/components/global/DottedBox.js";
import BackgroundImage from "gatsby-background-image";
import borderStyles from "src/assets/styles/borderStyles.js";
import SmallTitle from "src/components/typography/SmallTitle.js";
import BodyText from "src/components/typography/BodyText.js";
import sizes from "src/assets/styles/sizes.js";
import BigTitle from "src/components/typography/BigTitle.js";
// import StripeBox from "src/components/global/StripeBox.js";
import ReactMarkdown from "react-markdown";
import Img from "gatsby-image";
import PopUpModal from "src/components/home/PopUpModal.js";
import PopUpModalProcess from "src/components/home/PopUpModalProcess.js";

import Nav from "src/components/global/Nav.js";
import mediaQuery from "src/assets/styles/mediaQuery";
import Section from "src/components/global/Section.js";
import StripeBox from "src/components/global/StripeBox.js";
import Moment from "src/components/global/moments/Moment.js";
import LogoLink from "src/components/global/LogoLink.js";
import ButtonArrow from "src/components/global/ButtonArrow.js";

const StyledWrapper = styled(Wrapper)``;
const Header = styled.header`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const HeaderTitleWrapper = styled(DottedBox)`
  width: calc(100% - ${sizes.smallInMargin * 2}rem);
  padding: ${sizes.smallInMargin}rem;
  height: 100%;
  padding-top: 5rem;
  padding-bottom: 5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: ${mediaQuery.laptop}) {
    width: calc(100% - ${sizes.smallInMargin * 2}rem);
  }
  @media (max-width: ${mediaQuery.tablet}) {
    width: calc(100% - ${sizes.smallInMargin * 2}rem);
    padding-top: 15rem;
    flex-wrap: wrap;
    ${BigTitle} {
      width: 100%;
      margin-bottom: 0.5rem;
    }
  }
`;

const StyledBackgroundImage = styled(Img)`
  width: calc(100 + 0.2rem);

  position: relative;
  z-index: 10;
`;

const Date = styled.span`
  color: ${colors.dark};
  font-size: ${typographySizes.s}rem;

  display: block;
`;

const Description = styled(BodyText)`
  width: 83.33%;
  margin-bottom: 7rem;
  @media (max-width: ${mediaQuery.mobile}) {
    width: 100%;
  }
`;

const ContentWrapper = styled(DottedBox)`
  display: flex;
  @media (max-width: ${mediaQuery.tablet}) {
    flex-wrap: wrap;
  }
`;

const BackCol = styled.div`
  width: 41.33%;
  background-color: ${colors.red};
  display: flex;

  align-items: flex-start;
  flex-direction: row-reverse;
  @media (max-width: ${mediaQuery.tablet}) {
    width: 100%;
  }
`;
const LinkWrapper = styled(Link)`
  font-size: ${typographySizes.s}rem;
  display: block;
  position: sticky;
  top: 1rem;
  padding: ${sizes.smallInMargin}rem;
  text-decoration: none !important;
  cursor: pointer;
  span {
    margin-right: 5rem;
    transition: all 0.5s;
  }
  :hover {
    span {
      margin-right: 6rem;
      transition: all 0.5s;
    }
  }
`;

const ContentCol = styled(DottedBox)`
  width: calc(58.33% - 4rem);
  ${BodyText} {
    padding: ${sizes.smallInMargin}rem;
  }
  @media (max-width: ${mediaQuery.tablet}) {
    width: calc(100% - 4rem);
  }
`;

class NewsLayout extends React.Component {
  render() {
    return (
      <StyledWrapper>
        <LogoLink />
        <Nav />
        <Header
          data-sal="slide-up"
          data-sal-easing="ease"
          data-sal-duration="1000"
        >
          <HeaderTitleWrapper>
            <BigTitle>{this.props.data.strapiNewsBlogs.Title}</BigTitle>
            <Date>{this.props.data.strapiNewsBlogs.Date}</Date>
          </HeaderTitleWrapper>
        </Header>
        <ContentWrapper>
          <BackCol>
            <LinkWrapper to="/news-blog/">
              <span>←</span>Wróc do artykułów
            </LinkWrapper>
          </BackCol>
          <StripeBox />
          <ContentCol>
            {this.props.data.strapiNewsBlogs.Content.map((document) => {
              if (document.Text !== null) {
                return (
                  <BodyText>
                    <ReactMarkdown
                      className={"marginP"}
                      source={document.Text}
                    />
                  </BodyText>
                );
              }

              if (document.Img.childImageSharp.fluid !== null) {
                return (
                  <StyledBackgroundImage
                    fluid={document.Img.childImageSharp.fluid}
                  />
                );
              }
            })}
          </ContentCol>
        </ContentWrapper>
      </StyledWrapper>
    );
  }
}

export const query = graphql`
  query NewsLayout($id: String!) {
    strapiNewsBlogs(id: { eq: $id }) {
      Title
      Date(formatString: "DD.MM.YY")
      Content {
        Text
        Img {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;

export default NewsLayout;
