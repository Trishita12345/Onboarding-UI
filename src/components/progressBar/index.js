import React from "react";
import Flex from "../flex";
import { StyledStepperItem, StyledStepCounter } from "./StyledProgressBar";

const ProgressBar = ({ currScreen }) => {
  const steps = [1, 2, 3, 4];
  const nodes = steps.map((step, index) =>
    index <= currScreen ? (
      <StyledStepperItem active key={index}>
        <StyledStepCounter active>{step}</StyledStepCounter>
      </StyledStepperItem>
    ) : (
      <StyledStepperItem key={index}>
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
