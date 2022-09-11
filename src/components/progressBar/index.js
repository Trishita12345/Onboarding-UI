import React from "react";
import styled from "styled-components";
import is from "styled-is";
import Flex from "../flex";

const StyledStepperItem = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  &:before {
    position: absolute;
    content: "";
    border-bottom: 2px solid var(--light-grey);
    width: 100%;
    left: -50%;
    top: 50%;
    z-index: 2;
  }

  &:after {
    position: absolute;
    content: "";
    border-bottom: 2px solid var(--light-grey);
    width: 100%;
    top: 50%;
    left: 50%;
    z-index: 2;
  }
  ${is("active")`
  &:before {
    position: absolute;
    content: "";
    border-bottom: 2px solid var(--violet);
    width: 100%;
    top: 50%;
    left: -50%;
    z-index: 3;
  }
 
  &:after {
    position: absolute;
    content: "";
    border-bottom: 2px solid var(--violet);
    width: 50%;
    top: 50%;
    left: 50%;
    z-index: 3;
  }
  `}
  &:first-child::before,
  &:last-child::after {
    content: none;
  }
`;

const StyledStepCounter = styled.div`
  position: relative;
  z-index: 5;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #000;
  font-size: 0.7vw;
  background-color: var(--light-grey);
  height: 2vw;
  width: 2vw;
  border-radius: 50%;

  ${is("active")`
    background-color: var(--violet);
    color: var(--light-grey); 
  `}
`;

const ProgressBar = ({ currScreen }) => {
  const steps = [1, 2, 3, 4];
  const nodes = steps.map((step, index) =>
    index <= currScreen ? (
      <StyledStepperItem active>
        <StyledStepCounter active>{step}</StyledStepCounter>
      </StyledStepperItem>
    ) : (
      <StyledStepperItem>
        <StyledStepCounter>{step}</StyledStepCounter>
      </StyledStepperItem>
    )
  );
  return (
    <Flex justifyBetween gap={"0px"} width={"80%"}>
      {nodes}
    </Flex>
  );
};

export default ProgressBar;
