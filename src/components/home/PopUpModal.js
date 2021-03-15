import React, { useRef } from "react";
import styled from "styled-components";
import colors from "src/assets/styles/colors.js";
import DottedBox from "src/components/global/DottedBox.js";

import borderStyles from "src/assets/styles/borderStyles.js";

import BodyText from "src/components/typography/BodyText.js";
import sizes from "src/assets/styles/sizes.js";
import BigTitle from "src/components/typography/BigTitle.js";
import StripeBox from "src/components/global/StripeBox.js";
import ReactMarkdown from "react-markdown";
import Img from "gatsby-image";
import ContextConsumer from "src/layouts/Context.js";
import mediaQuery from "src/assets/styles/mediaQuery";
import noHangers from "src/components/global/fn/noHangers.js";

const PopUpModalWrapper = styled.div`
  width: calc((100vw - 28rem) * 0.5833);
  background-color: ${colors.white};
  position: fixed;
  right: ${sizes.bigMargin}rem;
  top: 8rem;
  z-index: 110;

  max-height: calc(100vh - 8rem);

  ::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
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
    z-index: 110;
    background-image: ${borderStyles.backgroundImageH};
    background-size: ${borderStyles.backgroundSizeH};
    display: none;
  }
  transform: translate(0, calc(100% + 2rem));
  transition: all 1s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;

  &.open {
    transform: translate(0, 0%);
    transition: all 1s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;
    ::before {
      display: block;
    }
  }
  @media (max-width: ${mediaQuery.desktop}) {
    right: ${sizes.midMargin}rem;
    width: calc((100vw - ${sizes.midMargin * 2}rem) * 0.5833);
  }
  @media (max-width: ${mediaQuery.laptop}) {
    width: calc((100vw - ${sizes.midMargin * 2}rem) * 0.8333);
  }
  @media (max-width: ${mediaQuery.tablet}) {
    width: calc((100vw - ${sizes.smallMargin * 2}rem));
    right: ${sizes.smallMargin}rem;
  }
`;

const PopUpModalBox = styled.div`
  overflow-y: scroll;

  max-height: calc(100vh - 8rem);
  margin-bottom: 5rem;

  ::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    height: 1px;
    width: 100%;
    background-image: ${borderStyles.backgroundImageH};
    background-size: ${borderStyles.backgroundSizeH};
  }
`;

const PopUpModalTop = styled(DottedBox)`
  width: calc(100% - ${sizes.smallInMargin * 2}rem);
  padding: ${sizes.smallInMargin}rem;
  padding-bottom: ${sizes.boxBottomMargin}rem;
  ::before {
    display: none;
  }
`;

const PopUpBigTitle = styled(BigTitle)`
  width: 62.5%;
  @media (max-width: ${mediaQuery.tablet}) {
    width: calc(100% - 3rem);
  }
`;

const PopUpContentWrapper = styled.div`
  display: flex;
`;

const PopUpTextWrapper = styled(DottedBox)`
  padding: ${sizes.smallInMargin}rem;
  width: calc(100% - ${sizes.smallInMargin * 2}rem);
`;

const PopUpBodyText = styled(BodyText)`
  width: calc(83.33%);
  margin-bottom: 5rem;
  @media (max-width: ${mediaQuery.tablet}) {
    width: 100%;
  }
`;

const PopUpImg = styled(Img)`
  margin-bottom: 5rem;
  position: relative;
  left: -6rem;
  width: calc(100% + 8rem);
  max-height: 66rem;
  object-fit: contain;

  max-width: calc(83.33% + 8rem);
  @media (max-width: ${mediaQuery.tablet}) {
    max-width: calc(100% + 8rem);
    max-height: 86rem;
  }
`;

const WhiteBg = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;
  width: 100vw;
  background-color: ${colors.white};
  opacity: 0;
  z-index: 100;
  pointer-events: none;
  transition: 0.5s;
  &.open {
    opacity: 0.9;
    transition: 0.5s;
    pointer-events: auto;
  }
`;

const CloseBtn = styled.button`
  display: inline-block;
  position: fixed;
  right: -3.5rem;
  flex-shrink: 1;
  border-radius: 3.5rem;
  border: 0.1rem solid ${colors.borderCol};
  width: 3.5rem !important;
  height: 3.5rem;
  transform: translate(100%, -50%);
  margin: 0;
  padding: 0;
  outline: 0;
  background: transparent;
  cursor: pointer;
  z-index: 101;

  flex-shrink: 0;
  ::after {
    content: "";
    position: absolute;
    left: -4rem;
    width: 4rem;
    height: 0.1rem;
    background-image: ${borderStyles.backgroundImageH};
    background-size: ${borderStyles.backgroundSizeH};
    transition: all 1s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;
  }
  transition: all 1s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;

  /* :hover {
    transform: translate(100%, -50%) rotate(180deg);
    transition: all 1s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;
    ::after {
      left: 0rem;
      width: 0rem;
      transition: all 1s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;
    }
  } */

  @media (max-width: ${mediaQuery.tablet}) {
    background-color: ${colors.white};
    transform: translateY(-50%);
    right: ${sizes.smallMargin}rem;
    top: ${sizes.smallMargin}rem;
    transform: translateY(0%);

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
  transform: rotate(45deg) translateY(0px);
`;
const Line2 = styled(Line)`
  transform: rotate(-45deg) translateY(0px);
`;

const PopUpModal = ({ info, open }) => {
  const container = useRef();
  const scrollTop = () => {
    container.current.scrollTo({ top: 0, behavior: "smooth" });
  };
  function onClose(set) {
    console.log("test");

    scrollTop();

    set({
      modalOpen: false,
    });
  }

  return (
    <ContextConsumer>
      {({ data, set }) => (
        <>
          <WhiteBg
            className={open === true ? "open" : ""}
            onClick={() =>
              set({
                modalOpen: false,
              })
            }
          />
          <PopUpModalWrapper className={open === true ? "open" : ""}>
            {info ? (
              <PopUpModalBox
                ref={container}
                className={open === true ? "open" : ""}
              >
                <CloseBtn onClick={() => onClose(set)}>
                  <Line1 />
                  <Line2 />
                </CloseBtn>
                <PopUpModalTop>
                  <PopUpBigTitle>{info.Title}</PopUpBigTitle>
                </PopUpModalTop>
                <PopUpContentWrapper>
                  <StripeBox />
                  <PopUpTextWrapper>
                    {info.Module.map((document) => {
                      if (document.Text !== null) {
                        return (
                          <PopUpBodyText>
                            <ReactMarkdown
                              className={"marginP"}
                              source={noHangers(document.Text)}
                            />
                          </PopUpBodyText>
                        );
                      }
                      if (document.Img !== null) {
                        return (
                          <PopUpImg
                            fluid={document.Img.childImageSharp.fluid}
                          />
                        );
                      }
                    })}
                  </PopUpTextWrapper>
                </PopUpContentWrapper>
              </PopUpModalBox>
            ) : null}
          </PopUpModalWrapper>
        </>
      )}
    </ContextConsumer>
  );
};

export default PopUpModal;
