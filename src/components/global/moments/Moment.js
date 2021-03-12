import React from "react";
import styled from "styled-components";
import colors from "src/assets/styles/colors.js";
import typographySizes from "src/assets/styles/typographySizes.js";
import DottedBox from "src/components/global/DottedBox.js";
import SmallTitle from "src/components/typography/SmallTitle.js";
import sizes from "src/assets/styles/sizes.js";
import StripeBox from "src/components/global/StripeBox.js";
import BodyText from "src/components/typography/BodyText.js";
import ButtonArrow from "src/components/global/ButtonArrow.js";
import mediaQuery from "src/assets/styles/mediaQuery";

const MomentWrapper = styled.div`
  font-size: ${typographySizes.s}rem;
  display: none;
  align-items: stretch;
  width: 100%;

  &.active {
    display: flex;
  }
  @media (max-width: ${mediaQuery.laptop}) {
    flex-direction: column;
  }
`;

const TitleWrapper = styled(DottedBox)`
  width: 41.66%;
  display: flex;
  flex-direction: column;
  display ::after {
    display: none;
  }
  @media (max-width: ${mediaQuery.laptop}) {
    width: 100%;
  }
`;

const TitleWrapperTop = styled(DottedBox)`
  display: flex;
  justify-content: space-between;

  text-align: left;
  padding: ${sizes.smallInMargin * 2}rem ${sizes.smallInMargin}rem;

  ::after {
    display: none;
  }
`;

const Year = styled(SmallTitle)`
  width: 40%;
`;

const Title = styled(SmallTitle)`
  text-align: left;
  width: 60%;
  text-transform: uppercase;
`;

const TitleWrapperBottom = styled(DottedBox)`
  display: flex;
  flex: 1;
  ::after {
    display: none;
  }
`;

const TitleStripeBox = styled(StripeBox)`
  min-height: 4rem;
  ::after {
    display: none;
  }
`;

const Description = styled(DottedBox)`
  width: calc(58.33% - ${sizes.smallInMargin * 2}rem);

  padding: ${sizes.smallInMargin}rem;
  padding-top: 4rem;
  padding-bottom: 4rem;
  transition: all 0.5s;
  flex: 1;

  :hover {
    background-color: ${colors.blue};
    transition: all 0.5s;
  }

  @media (max-width: ${mediaQuery.laptop}) {
    width: calc(100% - ${sizes.smallInMargin * 2}rem);
  }
`;
const BodyTextSmall = styled(BodyText)``;
const BodyTextBig = styled(BodyText)`
  margin-bottom: 4rem;
  height: 6rem;
  overflow: hidden;
  transition: all 1s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;
  &.open {
    height: auto;
    transition: all 1s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;
  }
`;
class Moment extends React.Component {
  state = {
    open: false,
  };

  render() {
    let isActive = false;
    this.props.type === this.props.curentType
      ? (isActive = true)
      : (isActive = false);

    return (
      <MomentWrapper className={isActive ? "active" : null}>
        {console.log(isActive)}
        <TitleWrapper>
          <TitleWrapperTop>
            <Year>{this.props.year}</Year>
            <Title>{this.props.title}</Title>
          </TitleWrapperTop>
          <TitleWrapperBottom>
            <TitleStripeBox />
            <DottedBox />
          </TitleWrapperBottom>
        </TitleWrapper>
        <Description>
          {this.props.description.length < 150 ? (
            <BodyTextSmall className={this.state.open ? "open" : ""}>
              {this.props.description}
            </BodyTextSmall>
          ) : (
            <>
              <BodyTextBig className={this.state.open ? "open" : ""}>
                {this.props.description}
              </BodyTextBig>
              <ButtonArrow
                onClick={() =>
                  this.setState({
                    open: this.state.open ? false : true,
                  })
                }
              >
                {this.state.open ? "Czytaj mniej" : "Czytaj więcej"}
              </ButtonArrow>
            </>
          )}
        </Description>
      </MomentWrapper>
    );
  }
}

export default Moment;
