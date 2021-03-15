import * as React from "react";
import styled from "styled-components";
import slugify from "slugify";

import typographySizes from "src/assets/styles/typographySizes.js";
import Wrapper from "src/components/global/Wrapper.js";
import colors from "src/assets/styles/colors.js";
import DottedBox from "src/components/global/DottedBox.js";
import BackgroundImage from "gatsby-background-image";

import sizes from "src/assets/styles/sizes.js";
import BigTitle from "src/components/typography/BigTitle.js";
import Nav from "src/components/global/Nav.js";
import mediaQuery from "src/assets/styles/mediaQuery";
import SEO from "src/components/global/SEO.js";

import LogoLink from "src/components/global/LogoLink.js";
import ButtonArrow from "src/components/global/ButtonArrow.js";
import noHangers from "src/components/global/fn/noHangers.js";

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

const Title = styled.h2`
  color: ${colors.dark};
  font-size: ${typographySizes.l}rem;
  font-weight: bold;
  margin-bottom: 3rem;
`;

class Realizacje extends React.Component {
  state = { category: "Momenty_przelomowe" };

  render() {
    return (
      <StyledWrapper>
        <SEO
          title={this.props.data.strapiRealizationsPage.SEO.Title}
          description={this.props.data.strapiRealizationsPage.SEO.Description}
          image={
            this.props.data.strapiRealizationsPage.SEO.Img.childImageSharp
              .original.src
          }
        />
        <LogoLink />
        <Nav />
        <Header
          data-sal="slide-up"
          data-sal-easing="ease"
          data-sal-duration="1000"
        >
          <HeaderTitleWrapper>
            <BigTitle>Wybrane Realizacje</BigTitle>
          </HeaderTitleWrapper>
        </Header>
        {this.props.data.allStrapiRealizations.edges.map((document) => (
          <NewsWrapper
            data-sal="slide-up"
            data-sal-easing="ease"
            data-sal-duration="1000"
          >
            <NewsInfo>
              <Title>{noHangers(document.node.Title)}</Title>
              <ButtonArrow
                typeLink
                link={`/realizacje/${slugify(document.node.Title, {
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
  query Realizacje {
    strapiRealizationsPage {
      SEO {
        Description
        Title
        Img {
          childImageSharp {
            original {
              src
            }
          }
        }
      }
    }
    allStrapiRealizations {
      edges {
        node {
          Title
          Thumbnail_img {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`;

export default Realizacje;
