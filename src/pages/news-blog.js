import * as React from "react";
import styled from "styled-components";
import slugify from "slugify";

import typographySizes from "src/assets/styles/typographySizes.js";
import Wrapper from "src/components/global/Wrapper.js";
import colors from "src/assets/styles/colors.js";
import DottedBox from "src/components/global/DottedBox.js";
import BackgroundImage from "gatsby-background-image";

import BodyText from "src/components/typography/BodyText.js";
import sizes from "src/assets/styles/sizes.js";
import BigTitle from "src/components/typography/BigTitle.js";
import SEO from "src/components/global/SEO.js";

import Nav from "src/components/global/Nav.js";
import mediaQuery from "src/assets/styles/mediaQuery";

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
  @media (max-width: ${mediaQuery.laptop}) {
    width: calc(100% - ${sizes.smallInMargin * 2}rem);
  }
  @media (max-width: ${mediaQuery.tablet}) {
    width: calc(100% - ${sizes.smallInMargin * 2}rem);
    padding-top: 15rem;

    ${BigTitle} {
      width: 70%;
    }
  }
`;

const NewsInfo = styled.div`
  width: calc(50% - ${sizes.smallInMargin * 2}rem);
  padding: ${sizes.smallInMargin}rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  @media (max-width: ${mediaQuery.laptop}) {
    width: calc(100% - ${sizes.smallInMargin * 2}rem);
  }
`;

const StyledBackgroundImage = styled(BackgroundImage)`
  min-height: 25vw;
  width: 50%;
  z-index: -10;
  @media (max-width: ${mediaQuery.laptop}) {
    width: 100%;
    min-height: 45vw;
  }
`;

const NewsWrapper = styled(DottedBox)`
  min-height: 25vw;
  width: 100%;
  display: flex;
  justify-content: space-between;
  :nth-of-type(2n) {
    ${StyledBackgroundImage} {
      order: -1;
    }
  }
  @media (max-width: ${mediaQuery.laptop}) {
    flex-direction: column;
    ${StyledBackgroundImage} {
      order: -1;
    }
  }
`;

const Date = styled.span`
  color: ${colors.dark};
  font-size: ${typographySizes.s}rem;
  width: 100%;
  display: block;
  margin-bottom: 5rem;
`;

const Title = styled.h2`
  color: ${colors.dark};
  font-size: ${typographySizes.s}rem;
  font-weight: bold;
  margin-bottom: 3rem;
`;

const Description = styled(BodyText)`
  width: 83.33%;
  margin-bottom: 7rem;
  @media (max-width: ${mediaQuery.mobile}) {
    width: 100%;
  }
`;

class IndexPage extends React.Component {
  state = { category: "Momenty_przelomowe" };

  render() {
    return (
      <StyledWrapper>
        <SEO
          title={this.props.data.strapiNewsPage.SEO.Title}
          description={this.props.data.strapiNewsPage.SEO.Description}
          image={this.props.data.strapiNewsPage.SEO.Img.publicURL}
        />
        <LogoLink />
        <Nav />
        <Header
          data-sal="slide-up"
          data-sal-easing="ease"
          data-sal-duration="1000"
        >
          <HeaderTitleWrapper>
            <BigTitle>Newsy/Blog</BigTitle>
          </HeaderTitleWrapper>
        </Header>
        {this.props.data.allStrapiNewsBlogs.edges.map((document) => (
          <NewsWrapper
            data-sal="slide-up"
            data-sal-easing="ease"
            data-sal-duration="1000"
          >
            <NewsInfo>
              <Date>{document.node.Date}</Date>
              <Title>{document.node.Title}</Title>
              <Description>{document.node.Short_description}</Description>
              <ButtonArrow
                typeLink
                link={`/news-blog/${slugify(document.node.Title, {
                  lower: true,
                  strict: true,
                })}`}
              >
                Czytaj dalej
              </ButtonArrow>
            </NewsInfo>
            <StyledBackgroundImage
              fluid={document.node.Thumbnail_img.childImageSharp.fluid}
            />
          </NewsWrapper>
        ))}
      </StyledWrapper>
    );
  }
}

export const query = graphql`
  query Blog {
    strapiNewsPage {
      SEO {
        Description
        Title
        Img {
          publicURL
        }
      }
    }
    allStrapiNewsBlogs(sort: { fields: Date, order: DESC }) {
      edges {
        node {
          Title
          Date(formatString: "DD.MM.YY")
          Thumbnail_img {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
          Short_description
        }
      }
    }
  }
`;

export default IndexPage;
