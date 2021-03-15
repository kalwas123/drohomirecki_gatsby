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
import ReactMarkdown from "react-markdown";
import Img from "gatsby-image";
import PopUpModal from "src/components/home/PopUpModal.js";
import PopUpModalProcess from "src/components/home/PopUpModalProcess.js";
import ButtonArrow from "src/components/global/ButtonArrow.js";
import ContextConsumer from "src/layouts/Context.js";
import Logo from "src/assets/svg/logo-white.svg";
import Nav from "src/components/global/Nav.js";
import mediaQuery from "src/assets/styles/mediaQuery";
import Section from "src/components/global/Section.js";
import StripeBox from "src/components/global/StripeBox.js";
import Moment from "src/components/global/moments/Moment.js";
import SEO from "src/components/global/SEO.js";
import noHangers from "src/components/global/fn/noHangers.js";

const StyledWrapper = styled(Wrapper)`
  /* &.modal-open {
    position: fixed;
    left: ${sizes.bigMargin}rem;
  } */
`;

const Header = styled.header`
  position: relative;
  height: calc(100vh - 8rem);
  z-index: 9;
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
  ::before {
    content: "";
    position: absolute;
    bottom: 0;
    right: 0;
    height: 0.1rem;
    width: 100%;
    background-image: ${borderStyles.backgroundImageH};
    background-size: ${borderStyles.backgroundSizeH};
    z-index: 1;
  }
  position: relative;
  @media (max-width: ${mediaQuery.tablet}) {
    height: auto;
  }
`;

const StyledLogo = styled.img`
  height: 5rem;
  width: 21.9rem;
`;

const StyledBackgroundImage = styled(BackgroundImage)`
  height: 100%;
  width: 99.9%;
  z-index: -10;
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
  @media (max-width: ${mediaQuery.tablet}) {
    display: none;
  }
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

    /* padding: ${sizes.smallMargin}rem;
    padding-top: ${sizes.smallInMargin}rem; */
    width: calc(100% - 4rem - 0.1rem);
    padding-bottom: 0;
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
  max-width: 26rem;
`;

const HeaderText = styled(BodyText)`
  margin-bottom: 1rem;
  margin-bottom: 3rem;
`;

const IdeaSectionWrapper = styled(DottedBox)`
  display: grid;
  grid-template-columns: 4rem calc(41.66% - 4rem) 16.66% 41.66%;
  grid-template-rows: auto;
  grid-template-areas:
    "title  title title img"
    "bar info info img"
    "decimg  empty1 decimg2 smalclaim"
    "emptybottom1  emptybottom1 emptybottom2 emptybottom3";
  @media (max-width: ${mediaQuery.tablet}) {
    grid-template-columns: 4rem 1fr;
    position: relative;
    grid-template-areas:
      "  title title"
      "img img"
      "bar info"
      "decimg smalclaim"
      "emptybottom1   emptybottom2 ";
  }
  :before {
    display: none;
  }
`;

const IdeaInfo = styled(DottedBox)`
  grid-area: title;
  padding: ${sizes.smallInMargin}rem;
  padding-bottom: ${sizes.boxBottomMargin}rem;

  ::after {
    display: none;
  }
  ::before {
    display: none;
  }
`;

const IdeaStripeBox = styled(StripeBox)`
  grid-area: bar;
  ::after {
    display: none;
  }
`;

const IdeaInfoBox = styled(DottedBox)`
  grid-area: info;
  padding: ${sizes.smallInMargin}rem;
`;

const IdeaBodyText = styled(BodyText)`
  width: 71%;
  margin-bottom: ${sizes.sectionGap}rem;
  @media (max-width: ${mediaQuery.tablet}) {
    width: 100%;
  }
`;

const IdeaEmptybottom1 = styled(DottedBox)`
  grid-area: emptybottom1;
  height: ${sizes.sectionGap}rem;

  ::after {
    display: none;
  }
`;
const IdeaEmptybottom2 = styled(DottedBox)`
  grid-area: emptybottom2;
  height: ${sizes.sectionGap}rem;
`;
const IdeaEmptybottom3 = styled(DottedBox)`
  grid-area: emptybottom3;
  height: ${sizes.sectionGap}rem;

  @media (max-width: ${mediaQuery.tablet}) {
    display: none;
  }
`;

const IdeaImgWrapper = styled(DottedBox)`
  grid-area: img;
  ::before {
    display: none;
  }
`;
const IdeaImgBackgroundImage = styled(BackgroundImage)`
  height: 100%;
  width: 100%;
  background-size: contain;
`;

const IdeaDecimgWrapper1 = styled(DottedBox)`
  grid-area: decimg;
  height: ${sizes.sectionGap}rem;

  ::after {
    display: none;
  }
`;
const IdeaDecimg1 = styled(BackgroundImage)`
  height: 100%;
  width: 100%;
`;
const IdeaDecimgWrapper2 = styled(DottedBox)`
  grid-area: decimg2;
  height: ${sizes.sectionGap}rem;
  @media (max-width: ${mediaQuery.tablet}) {
    display: none;
  }
`;
const IdeaDecimg2 = styled(BackgroundImage)`
  height: 100%;
  width: 100%;
`;

const IdeaEmpty1 = styled(DottedBox)`
  grid-area: empty1;
  @media (max-width: ${mediaQuery.tablet}) {
    display: none;
  }
`;
const IdeaClaim = styled(DottedBox)`
  grid-area: smalclaim;
  background-color: ${colors.gold};
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  p {
    font-size: ${typographySizes.s}rem;
    color: ${colors.white};
    font-weight: normal;
    padding: ${sizes.smallInMargin}rem;
  }
`;

const HistorySectionWrapper = styled(DottedBox)`
  display: grid;

  grid-template-columns: 33.33% 8.33% 4rem calc(41.66% - 4rem) 16.66%;
  grid-template-rows: auto;
  grid-template-areas:
    "img emptytop title title title"
    "img emptymid bar info info"
    "color color color emptybottom img2";
  @media (max-width: ${mediaQuery.tablet}) {
    grid-template-columns: 4rem 1fr;
    position: relative;
    grid-template-areas:
      "  title title"
      "bar img"
      "bar info"
      "color color"
      "emptybottom emptybottom";
  }
`;

const HistoryImgWrapper = styled(DottedBox)`
  grid-area: img;
  z-index: -10;

  ::after {
    display: none;
  }
  ::before {
    display: none;
  }
  @media (max-width: ${mediaQuery.tablet}) {
    height: 50vh;
  }
`;
const HistoryImg = styled(BackgroundImage)`
  height: 100%;
  width: 100%;
  z-index: -10;
`;

const HistoryEmptyTop = styled(DottedBox)`
  grid-area: emptytop;

  ::before {
    display: none;
  }
  @media (max-width: ${mediaQuery.tablet}) {
    display: none;
  }
`;
const HistoryEmptyMid = styled(DottedBox)`
  grid-area: emptymid;
  @media (max-width: ${mediaQuery.tablet}) {
    display: none;
  }
`;

const HisotryTitle = styled(DottedBox)`
  grid-area: title;
  padding: ${sizes.smallInMargin}rem;
  padding-bottom: ${sizes.boxBottomMargin}rem;

  ::before {
    display: none;
  }
`;
const HistoryStripeBox = styled(StripeBox)`
  grid-area: bar;
`;

const HistoryInfoBox = styled(DottedBox)`
  grid-area: info;
  padding: ${sizes.smallInMargin}rem;
`;

const HistoryEmptyBottom = styled(DottedBox)`
  grid-area: emptybottom;
  height: ${sizes.sectionGap}rem;
`;
const HistoryColor = styled(DottedBox)`
  grid-area: color;
  height: ${sizes.sectionGap}rem;

  background-color: ${colors.red};
  ::after {
    display: none;
  }
`;

const HistoryImgWrapper2 = styled(DottedBox)`
  grid-area: img2;
  z-index: -10;
`;
const HistoryImg2 = styled(BackgroundImage)`
  height: 100%;
  width: 100%;
  z-index: -10;
`;

const MomentsSectionWrapper = styled(DottedBox)`
  @media (max-width: ${mediaQuery.tablet}) {
  }
`;
const MomentsTitle = styled(DottedBox)`
  padding: ${sizes.smallInMargin}rem;
  padding-bottom: ${sizes.boxBottomMargin}rem;
  ${BigTitle} {
    width: 40%;
  }
  ::before {
    display: none;
  }
  @media (max-width: ${mediaQuery.tablet}) {
    ${BigTitle} {
      width: 100%;
    }
  }
`;

const MomentsBottom = styled(DottedBox)`
  height: 20rem;
  display: flex;
  ::after {
    display: none;
  }
  @media (max-width: ${mediaQuery.tablet}) {
    flex-wrap: wrap;
    height: auto;
  }
`;

const MomentsImgWrapper = styled(DottedBox)`
  width: 66.66%;
  height: 100%;
  z-index: -10;
  @media (max-width: ${mediaQuery.tablet}) {
    width: 100%;
    height: 10rem;
  }
`;
const MomentsImg = styled(BackgroundImage)`
  height: 100%;
  width: 100%;
  z-index: -10;
`;

const MomentsBtnWrapper = styled(DottedBox)`
  width: 33.33%;
  height: 100%;
  background-color: ${colors.gold};
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: ${mediaQuery.tablet}) {
    width: 100%;
    height: 20rem;
  }
`;

const MomentsBtn = styled(Link)`
  height: 3.5rem;
  /* padding: 0 2rem; */
  width: 26rem;
  line-height: 3.5rem;
  text-align: center;
  background-color: ${colors.white};
  border: ${colors.dark} 1px solid;
  border-radius: 3.5rem;
  font-size: 1.6rem;
  transition: all 0.5s;
  cursor: pointer;
  text-decoration: none;
  :hover {
    background-color: ${colors.gold};
    border: ${colors.white} 1px solid;
    color: ${colors.white};
    transition: all 0.5s;
  }
`;

const MomentsEmptyWrapper = styled(DottedBox)`
  display: flex;
  ::after {
    display: none;
  }
`;

const MomentsEmpty1 = styled(DottedBox)`
  height: ${sizes.sectionGap}rem;
  width: 66.66%;

  ::after {
    display: none;
  }
`;
const MomentsEmpty2 = styled(DottedBox)`
  width: 33.33%;

  height: ${sizes.sectionGap}rem;
`;

const ProcessSectionWrapper = styled(DottedBox)``;

const ProcessTitle = styled(DottedBox)`
  padding: ${sizes.smallInMargin}rem;
  padding-bottom: ${sizes.boxBottomMargin}rem;

  ::before {
    display: none;
  }
`;

const ProcessWrapper = styled(DottedBox)`
  display: flex;
  flex-wrap: wrap;
  ::before {
    display: none;
  }
`;

const ProcessTimeline = styled.div`
  height: 3.5rem;
  position: relative;
  left: ${-sizes.smallInMargin}rem;
  width: calc(100% + ${sizes.smallInMargin * 2}rem);

  margin-bottom: 4rem;
  margin-top: 3rem;
  ::before {
    position: absolute;
    content: "";
    top: 50%;
    height: 0.1rem;
    background-color: ${colors.dark};
    width: 100%;
    z-index: 0;
  }
`;

const ProcessNum = styled.div`
  height: 3.5rem;
  position: relative;
  width: 3.5rem;
  border: solid ${colors.dark} 0.1rem;
  border-radius: 100%;
  background-color: ${colors.white};
  z-index: 100;
  margin-left: ${sizes.smallInMargin}rem;
  ${BodyText} {
    line-height: 3.5rem;
    text-align: center;
  }
`;

const ProcessStep = styled(DottedBox)`
  width: calc(50% - ${sizes.smallInMargin * 2}rem);
  padding: ${sizes.smallInMargin}rem;
  padding-bottom: 5rem;
  transition: all 0.5s;
  :hover {
    background-color: ${colors.red};
    transition: all 0.5s;
  }
  :nth-of-type(2n-1) {
    ::after {
      display: none;
    }
  }
  ${BigTitle} {
    max-width: 300px;
    margin-bottom: 0.5rem;
  }
  ${ButtonArrow} {
  }
  :first-of-type {
    ${ProcessTimeline} {
      left: 0;
      width: calc(100% + ${sizes.smallInMargin}rem);
      ${ProcessNum} {
        margin-left: 0;
      }
    }
  }
  :last-of-type {
    ${ProcessTimeline} {
      ::before {
        width: ${sizes.smallInMargin}rem;
      }
      left: ${-sizes.smallInMargin}rem;
    }
  }
  @media (max-width: ${mediaQuery.tablet}) {
    width: calc(100% - ${sizes.smallInMargin * 2}rem);
    ::after {
      display: none;
    }
  }
`;

const ProcessIcon = styled(Img)`
  max-width: 10rem;
  max-height: 8rem;
  margin-bottom: 5rem;
  img {
    object-fit: contain !important;
  }
`;

const ProcessPhase = styled(BodyText)`
  margin-bottom: 2.5rem;
`;

const ProcessSmalDescription = styled(BodyText)`
  margin-bottom: 4rem;
  width: 66.66%;
  @media (max-width: ${mediaQuery.mobile}) {
    width: 100%;
  }
`;

const ProcessCta = styled(DottedBox)`
  width: 100%;
  height: 13rem;
  display: flex;
  align-items: center;
  justify-content: center;
  ::after {
    display: none;
  }
`;

const ProcessBtn = styled.a`
  height: 3.5rem;
  /* padding: 0 2rem; */
  width: 26rem;
  line-height: 3.5rem;
  text-align: center;
  background-color: ${colors.white};
  border: ${colors.dark} 1px solid;
  border-radius: 3.5rem;
  font-size: 1.6rem;
  transition: all 0.5s;
  cursor: pointer;
  text-decoration: none;
  :hover {
    background-color: ${colors.gold};
    border: ${colors.white} 1px solid;
    color: ${colors.white};
    transition: all 0.5s;
  }
`;

class IndexPage extends React.Component {
  render() {
    return (
      <ContextConsumer>
        {({ data, set }) => (
          <Wrapper>
            <SEO
              title={this.props.data.strapiHomePage.SEO.Title}
              description={this.props.data.strapiHomePage.SEO.Description}
              image={
                this.props.data.strapiHomePage.SEO.Img.childImageSharp.original
                  .src
              }
            />
            <Nav />
            <PopUpModal info={data.modalType} open={data.modalOpen} />
            <PopUpModalProcess
              info={data.processModalType}
              open={data.processModalOpen}
            />
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
                <HeaderTextBox
                  data-sal="slide-up"
                  data-sal-easing="ease"
                  data-sal-duration="1000"
                  data-sal-delay="300"
                >
                  <HeaderTitle>
                    {noHangers(this.props.data.strapiHomePage.About_title)}
                  </HeaderTitle>
                  <HeaderText>
                    {noHangers(this.props.data.strapiHomePage.About_paragraph)}
                  </HeaderText>
                  <ButtonArrow
                    onClick={() =>
                      set({
                        modalOpen: true,
                        modalType: this.props.data.strapiAboutModule,
                      })
                    }
                  >
                    {console.log(this.props.data.strapiAboutModule)}
                    Czytaj dalej
                  </ButtonArrow>
                </HeaderTextBox>
                <HeaderLeftTop
                  data-sal="slide-up"
                  data-sal-easing="ease"
                  data-sal-duration="1000"
                  data-sal-delay="600"
                >
                  <StyledLogo src={Logo} alt="logo" />
                </HeaderLeftTop>
                <HeaderCenterTop
                  data-sal="slide-up"
                  data-sal-easing="ease"
                  data-sal-duration="1000"
                  data-sal-delay="600"
                />
                <HeaderRightTop
                  data-sal="slide-up"
                  data-sal-easing="ease"
                  data-sal-duration="1000"
                  data-sal-delay="600"
                />
                <HeaderLeftMid
                  data-sal="slide-up"
                  data-sal-easing="ease"
                  data-sal-duration="1000"
                  data-sal-delay="300"
                />
                <HeaderRightMid
                  data-sal="slide-up"
                  data-sal-easing="ease"
                  data-sal-duration="1000"
                  data-sal-delay="300"
                />
                <HeaderLeftBottom
                  data-sal="slide-up"
                  data-sal-easing="ease"
                  data-sal-duration="1000"
                />
                <HeaderCenterBottom
                  data-sal="slide-up"
                  data-sal-easing="ease"
                  data-sal-duration="1000"
                />
                <HeaderRightBottom
                  data-sal="slide-up"
                  data-sal-easing="ease"
                  data-sal-duration="1000"
                />
              </HeaderWrapper>
            </Header>
            <Section>
              <IdeaSectionWrapper>
                <IdeaInfo>
                  <BigTitle>Idea marki Holistyczny proces projektowy </BigTitle>
                </IdeaInfo>
                <IdeaStripeBox />
                <IdeaInfoBox>
                  <IdeaBodyText>
                    <ReactMarkdown
                      className={"marginP"}
                      source={noHangers(
                        this.props.data.strapiHomePage.Idea_paragraph
                      )}
                    />
                  </IdeaBodyText>
                  <ButtonArrow
                    onClick={() =>
                      set({
                        modalOpen: true,
                        modalType: this.props.data.strapiIdeaModule,
                      })
                    }
                  >
                    Czytaj dalej
                  </ButtonArrow>
                </IdeaInfoBox>
                <IdeaImgWrapper>
                  <IdeaImgBackgroundImage
                    fluid={
                      this.props.data.strapiHomePage.Idea_img.childImageSharp
                        .fluid
                    }
                  ></IdeaImgBackgroundImage>
                </IdeaImgWrapper>
                <IdeaDecimgWrapper1>
                  <IdeaDecimg1
                    fluid={
                      this.props.data.strapiHomePage.Idea_decoration_img_1
                        .childImageSharp.fluid
                    }
                  ></IdeaDecimg1>
                </IdeaDecimgWrapper1>
                <IdeaEmpty1 />
                <IdeaDecimgWrapper2>
                  <IdeaDecimg2
                    fluid={
                      this.props.data.strapiHomePage.Idea_decoration_img_2
                        .childImageSharp.fluid
                    }
                  ></IdeaDecimg2>
                </IdeaDecimgWrapper2>
                <IdeaClaim>
                  <p>{noHangers(this.props.data.strapiHomePage.Idea_claim)}</p>
                </IdeaClaim>
                <IdeaEmptybottom1 />
                <IdeaEmptybottom2 />
                <IdeaEmptybottom3 />
              </IdeaSectionWrapper>
            </Section>
            <Section>
              <HistorySectionWrapper>
                <HistoryImgWrapper>
                  <HistoryImg
                    fluid={
                      this.props.data.strapiHomePage.History_img_1
                        .childImageSharp.fluid
                    }
                  ></HistoryImg>
                </HistoryImgWrapper>
                <HistoryEmptyTop />
                <HisotryTitle>
                  <BigTitle>
                    {noHangers(this.props.data.strapiHomePage.History_title)}
                  </BigTitle>
                </HisotryTitle>
                <HistoryEmptyMid />
                <HistoryStripeBox />
                <HistoryInfoBox>
                  <IdeaBodyText>
                    <ReactMarkdown
                      className={"marginP"}
                      source={noHangers(
                        this.props.data.strapiHomePage.History_paragraph
                      )}
                    />
                  </IdeaBodyText>
                  <ButtonArrow
                    onClick={() =>
                      set({
                        modalOpen: true,
                        modalType: this.props.data.strapiHistoryModule,
                      })
                    }
                  >
                    Czytaj dalej
                  </ButtonArrow>
                </HistoryInfoBox>
                <HistoryColor />
                <HistoryEmptyBottom />
                <HistoryImgWrapper2>
                  <HistoryImg2
                    fluid={
                      this.props.data.strapiHomePage.History_img_2
                        .childImageSharp.fluid
                    }
                  ></HistoryImg2>
                </HistoryImgWrapper2>
              </HistorySectionWrapper>
            </Section>
            <Section>
              <MomentsSectionWrapper>
                <MomentsTitle>
                  <BigTitle>
                    {noHangers(this.props.data.strapiHomePage.Moments_title)}
                  </BigTitle>
                </MomentsTitle>
                {this.props.data.allStrapiMoments.edges.map((document) => (
                  <Moment
                    curentType="Momenty_przelomowe"
                    type={document.node.Type}
                    title={document.node.Title}
                    year={document.node.Years}
                    description={document.node.Description}
                  />
                ))}
                <MomentsBottom>
                  <MomentsImgWrapper>
                    <MomentsImg
                      fluid={
                        this.props.data.strapiHomePage.Moments_img
                          .childImageSharp.fluid
                      }
                    ></MomentsImg>
                  </MomentsImgWrapper>
                  <MomentsBtnWrapper>
                    <MomentsBtn to="/momenty_przelomowe">
                      przejdź do kalendarium
                    </MomentsBtn>
                  </MomentsBtnWrapper>
                </MomentsBottom>
                <MomentsEmptyWrapper>
                  <MomentsEmpty1 />
                  <MomentsEmpty2 />
                </MomentsEmptyWrapper>
              </MomentsSectionWrapper>
            </Section>
            <Section id="oferta">
              <ProcessSectionWrapper>
                <ProcessTitle>
                  <BigTitle>
                    {noHangers(this.props.data.strapiHomePage.Process_title)}
                  </BigTitle>
                </ProcessTitle>
                <ProcessWrapper>
                  {this.props.data.strapiHomePage.Process_step.map(
                    (document, index) => (
                      <ProcessStep>
                        <ProcessTimeline>
                          <ProcessNum>
                            <BodyText>{index + 1}</BodyText>
                          </ProcessNum>
                        </ProcessTimeline>
                        <ProcessIcon
                          fluid={document.Icon.childImageSharp.fluid}
                        />
                        <BigTitle>{document.Title}</BigTitle>
                        <ProcessPhase>{document.Phase}</ProcessPhase>
                        <ProcessSmalDescription>
                          {noHangers(document.Description)}
                        </ProcessSmalDescription>
                        <ButtonArrow
                          onClick={() =>
                            set({
                              processModalOpen: true,
                              processModalType: document,
                            })
                          }
                        >
                          Czytaj dalej
                        </ButtonArrow>
                      </ProcessStep>
                    )
                  )}
                </ProcessWrapper>
                <ProcessCta>
                  <ProcessBtn
                    href={`mailto: ${this.props.data.strapiContact.Mail}`}
                  >
                    zapytaj o ofertę
                  </ProcessBtn>
                </ProcessCta>
              </ProcessSectionWrapper>
            </Section>
          </Wrapper>
        )}
      </ContextConsumer>
    );
  }
}

export const query = graphql`
  query Home {
    strapiHomePage {
      About_title
      About_paragraph
      Background_image {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      Idea_claim
      Idea_title
      Idea_paragraph
      Idea_img {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      Idea_decoration_img_2 {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      Idea_decoration_img_1 {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      History_paragraph
      History_title
      History_img_1 {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      History_img_2 {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      Moments_title
      Moments_img {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      Process_title
      Process_step {
        Description
        Long_description
        Phase
        Title
        Icon {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
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
    strapiAboutModule {
      Title
      Module {
        Img {
          childImageSharp {
            fluid(quality: 90) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        Text
      }
    }
    strapiIdeaModule {
      Title
      Module {
        Img {
          childImageSharp {
            fluid(quality: 90) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        Text
      }
    }
    strapiIdeaModule {
      Title
      Module {
        Img {
          childImageSharp {
            fluid(quality: 90) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        Text
      }
    }
    strapiHistoryModule {
      Title
      Module {
        Img {
          childImageSharp {
            fluid(quality: 90) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        Text
      }
    }
    allStrapiMoments(
      sort: { fields: Years, order: ASC }
      limit: 2
      filter: { Type: { eq: "Momenty_przelomowe" } }
    ) {
      edges {
        node {
          Title
          Type
          Years
          Description
        }
      }
    }
    strapiContact {
      Mail
    }
  }
`;

export default IndexPage;
