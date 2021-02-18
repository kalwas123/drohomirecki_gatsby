import * as React from "react";
import styled from "styled-components";
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
import StripeBox from "src/components/global/StripeBox.js";
import ReactMarkdown from "react-markdown";
import Img from "gatsby-image";
import PopUpModal from "src/components/home/PopUpModal.js";
import ButtonArrow from "src/components/global/ButtonArrow.js";
import ContextConsumer from "src/layouts/Context.js";
import Logo from "src/assets/svg/logo-white.svg";
import Nav from "src/components/global/Nav.js";
import mediaQuery from "src/assets/styles/mediaQuery";

const Box = styled(DottedBox)`
  height: 20rem;
  width: 100%;
`;

const StyledWrapper = styled(Wrapper)`
  /* &.modal-open {
    position: fixed;
    left: ${sizes.bigMargin}rem;
  } */
`;

const Header = styled.header`
  position: relative;
  height: calc(100vh - 8rem);

  width: 100%;
  ::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 0.1rem;
    height: 100%;
    background-image: ${borderStyles.backgroundImageV};
    background-size: ${borderStyles.backgroundSizeV};
  }
  position: relative;
  @media (max-width: ${mediaQuery.tablet}) {
    height: auto;
  }
`;
const StyledBackgroundImage = styled(BackgroundImage)`
  height: 100%;
  width: 100%;
  @media (max-width: ${mediaQuery.tablet}) {
    position: relative;
    width: 100vw;
    left: ${-sizes.smallMargin}rem;
    height: 70vh;
  }
`;

const TopWrapper = styled.div`
  width: 100%;
  position: absolute;
  top: -2rem;
  z-index: 1;
  transform: translateY(-100%);
  justify-content: space-between;
  display: flex;
`;
const Circle = styled.div`
  height: 3.5rem;
  width: 3.5rem;
  border-radius: 3.5rem;
  border: 0.1rem solid ${colors.borderCol};
  transform: translateX(-50%);
  position: relative;

  ::after {
    content: "";
    position: absolute;
    bottom: -2rem;
    left: calc(50% - 0.05rem);
    width: 0.1rem;
    height: 2rem;
    background-image: ${borderStyles.backgroundImageV};
    background-size: ${borderStyles.backgroundSizeV};
  }
  :nth-child(even) {
    transform: translateX(50%);
    ::after {
      left: calc(50% - 0.05rem);
    }
  }
`;

const HeaderLeftTop = styled(DottedBox)`
  padding: ${sizes.smallInMargin}rem;
  grid-area: lefttop;
  ::after {
    display: none;
  }
  @media (max-width: ${mediaQuery.tablet}) {
    padding: ${sizes.smallMargin}rem;
    height: calc(70vh - ${sizes.smallMargin * 2}rem);
    grid-area: top;
    width: calc(100% - ${sizes.smallMargin * 2}rem);
    img {
      width: 60%;
    }
  }
`;
const HeaderCenterTop = styled(DottedBox)`
  grid-area: centertop;
  @media (max-width: ${mediaQuery.tablet}) {
    display: none;
  }
`;
const HeaderRightTop = styled(DottedBox)`
  grid-area: righttop;
  @media (max-width: ${mediaQuery.tablet}) {
    display: none;
  }
`;

const HeaderLeftMid = styled(DottedBox)`
  grid-area: leftmid;
  ::after {
    display: none;
  }
  @media (max-width: ${mediaQuery.tablet}) {
    display: none;
  }
`;

const HeaderRightMid = styled(DottedBox)`
  grid-area: rightmid;
  @media (max-width: ${mediaQuery.tablet}) {
    display: none;
  }
`;
const HeaderLeftBottom = styled(DottedBox)`
  grid-area: leftbottom;
  ::after {
    display: none;
  }
  @media (max-width: ${mediaQuery.tablet}) {
    display: none;
  }
`;
const HeaderCenterBottom = styled(DottedBox)`
  grid-area: centerbottom;
  @media (max-width: ${mediaQuery.tablet}) {
    display: none;
  }
`;
const HeaderRightBottom = styled(DottedBox)`
  grid-area: rightbottom;
  @media (max-width: ${mediaQuery.tablet}) {
    display: none;
  }
`;

const HeaderTextBox = styled(DottedBox)`
  grid-area: textbox;
  padding: 2rem;
  background-color: ${colors.white};
  @media (max-width: ${mediaQuery.tablet}) {
    grid-area: bottom;
    padding: ${sizes.smallMargin}rem;
    padding-top: ${sizes.smallInMargin}rem;
    width: calc(100% - ${sizes.smallMargin * 2}rem);
  }
`;

const HeaderWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 58.33% calc(41.66% - 2rem) 2rem;
  grid-template-rows: 1fr auto 2rem;
  grid-template-areas:
    "lefttop  centertop righttop"
    "leftmid textbox  rightmid"
    "leftbottom  centerbottom rightbottom";
  @media (max-width: ${mediaQuery.tablet}) {
    grid-template-columns: 1fr;
    position: relative;
    margin-top: calc(70vh * -1);
    grid-template-areas:
      "top"
      "bottom";
  }
`;

const HeaderTitle = styled(SmallTitle)`
  margin-bottom: 10px;
`;

const HeaderText = styled(BodyText)`
  margin-bottom: 1rem;
  margin-bottom: 3rem;
`;

class IndexPage extends React.Component {
  render() {
    return (
      <ContextConsumer>
        {({ data, set }) => (
          <StyledWrapper className={data.modalOpen ? "modal-open" : ""}>
            <Nav />
            <PopUpModal info={data.modalType} open={data.modalOpen} />
            <TopWrapper>
              <Circle />
              <Circle />
            </TopWrapper>
            <Header>
              <StyledBackgroundImage
                fluid={
                  this.props.data.strapiHomePage.Background_image
                    .childImageSharp.fluid
                }
              ></StyledBackgroundImage>
              <HeaderWrapper>
                <HeaderTextBox>
                  <HeaderTitle>
                    Jakub Drohomirecki <br /> Architekt IARP.
                  </HeaderTitle>
                  <HeaderText>
                    Twórca autentycznej architektury i holistycznego procesu
                    projektowania.
                  </HeaderText>
                  <ButtonArrow
                    onClick={() =>
                      set({
                        modalOpen: true,
                        modalType: this.props.data.strapiAboutModule
                          .Aboute_module,
                      })
                    }
                  >
                    Czytaj dalej
                  </ButtonArrow>
                </HeaderTextBox>
                <HeaderLeftTop>
                  <img src={Logo} />
                </HeaderLeftTop>
                <HeaderCenterTop />
                <HeaderRightTop />
                <HeaderLeftMid />
                <HeaderRightMid />
                <HeaderLeftBottom />
                <HeaderCenterBottom />
                <HeaderRightBottom />
              </HeaderWrapper>
            </Header>
            <Box></Box>
          </StyledWrapper>
        )}
      </ContextConsumer>
    );
  }
}

export const query = graphql`
  query Home {
    strapiHomePage {
      Background_image {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
    strapiAboutModule {
      Title
      Aboute_module {
        Text
        Img {
          childImageSharp {
            fluid(quality: 90) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;

export default IndexPage;
