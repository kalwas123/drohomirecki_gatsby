import * as React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

import typographySizes from "src/assets/styles/typographySizes.js";
import Wrapper from "src/components/global/Wrapper.js";
import colors from "src/assets/styles/colors.js";
import DottedBox from "src/components/global/DottedBox.js";
import borderStyles from "src/assets/styles/borderStyles.js";

import BodyText from "src/components/typography/BodyText.js";
import sizes from "src/assets/styles/sizes.js";
import BigTitle from "src/components/typography/BigTitle.js";

import ReactMarkdown from "react-markdown";
import Img from "gatsby-image";

import Nav from "src/components/global/Nav.js";
import mediaQuery from "src/assets/styles/mediaQuery";

import StripeBox from "src/components/global/StripeBox.js";

import LogoLink from "src/components/global/LogoLink.js";
import SEO from "src/components/global/SEO.js";
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
  z-index: 8;
`;

const ContentWrapper = styled(DottedBox)`
  display: flex;
  @media (max-width: ${mediaQuery.tablet}) {
    flex-wrap: wrap;
  }
`;

const BackCol = styled.div`
  width: 41.33%;
  background-color: ${colors.gold};
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
  ::before {
    display: none;
  }
  ${BodyText} {
    padding: ${sizes.smallInMargin}rem;
  }
  @media (max-width: ${mediaQuery.tablet}) {
    width: calc(100% - 4rem);
    ::before {
      display: block;
    }
  }
`;

const TableRow = styled(DottedBox)`
  display: flex;
  width: calc(100% - ${sizes.smallInMargin * 2}rem);
  height: calc(6rem - ${sizes.smallInMargin * 2}rem);
  padding: ${sizes.smallInMargin}rem;
  align-items: center;
  ::after {
    display: none;
  }
`;
const Table = styled.div`
  margin: 2rem 0;
  position: relative;
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
`;
const TableRowTitle = styled.h4`
  font-weight: bold;
  font-size: ${typographySizes.s}rem;
  width: 40%;
`;

const TableRowContent = styled.h5`
  font-weight: normal;
  font-size: ${typographySizes.s}rem;
`;

class RealizationLayout extends React.Component {
  render() {
    return (
      <StyledWrapper>
        <SEO
          title={this.props.data.strapiRealizations.Title}
          image={this.props.data.strapiRealizations.Thumbnail_img.publicURL}
        />
        <LogoLink />
        <Nav />
        <Header
          data-sal="slide-up"
          data-sal-easing="ease"
          data-sal-duration="1000"
        >
          <HeaderTitleWrapper>
            <BigTitle>
              {noHangers(this.props.data.strapiRealizations.Title)}
            </BigTitle>
          </HeaderTitleWrapper>
        </Header>
        <ContentWrapper>
          <BackCol>
            <LinkWrapper to="/realizacje/">
              <span>←</span>Wróc do projektów
            </LinkWrapper>
          </BackCol>
          <StripeBox />
          <ContentCol>
            {this.props.data.strapiRealizations.Content.map((document) => {
              if (document.Text !== null) {
                return (
                  <BodyText>
                    <ReactMarkdown
                      className={"marginP"}
                      source={noHangers(document.Text)}
                    />
                  </BodyText>
                );
              }
              if (document.Status !== null) {
                return (
                  <Table>
                    <TableRow>
                      <TableRowTitle>Status</TableRowTitle>
                      <TableRowContent>
                        {noHangers(document.Status)}
                      </TableRowContent>
                    </TableRow>
                    <TableRow>
                      <TableRowTitle>Rok</TableRowTitle>
                      <TableRowContent>{document.Year}</TableRowContent>
                    </TableRow>
                    <TableRow>
                      <TableRowTitle>Metraż</TableRowTitle>
                      <TableRowContent>{document.Size}</TableRowContent>
                    </TableRow>
                    <TableRow>
                      <TableRowTitle>Lokalizacja</TableRowTitle>
                      <TableRowContent>
                        {noHangers(document.Location)}
                      </TableRowContent>
                    </TableRow>
                    <TableRow>
                      <TableRowTitle>Rodzaj projektu</TableRowTitle>
                      <TableRowContent>
                        {noHangers(document.Type)}
                      </TableRowContent>
                    </TableRow>
                    <TableRow>
                      <TableRowTitle>Autor</TableRowTitle>
                      <TableRowContent>
                        {noHangers(document.Author)}
                      </TableRowContent>
                    </TableRow>
                  </Table>
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
  query RealizationLayout($id: String!) {
    strapiRealizations(id: { eq: $id }) {
      Title
      Thumbnail_img {
        publicURL
      }
      Content {
        Text
        Img {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        Location
        Size
        Status
        Type
        Year
        Author
      }
    }
  }
`;

export default RealizationLayout;
