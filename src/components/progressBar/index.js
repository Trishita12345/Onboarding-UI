import React from "react";
import styled from "styled-components";
import is from "styled-is";
import Flex from "../flex";

const StyledStepperItem = styled.div`
  ${
    "" /* position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1; */
  }
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 1vw;
  width: 1vw;
  padding: 2%;
  border-radius: 50%;
  background-color: #ffffff;
  border: 1px solid var(--dark-grey);
  z-index: 1;
  &:before {
    position: absolute;
    content: "";
    border-bottom: 2px solid var(--dark-grey);
    width: 100%;
    top: 50%;
    left: -50%;
    z-index: -1;
  }

  &:after {
    position: absolute;
    content: "";
    border-bottom: 2px solid var(--dark-grey);
    width: 100%;
    top: 50%;
    left: 50%;
    z-index: -1;
  }
  &:first-child::before,
  &:last-child::after {
    content: none;
  }

  ${is("active")`
    background-color: var(--violet);
    border:1px solid var(--violet);
    ::before,::after{
        border-bottom: 2px solid var(--violet);
    }
  `};
`;

const StyledStepCounter = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: var(--violet);
  margin-bottom: 6px;
`;

const ProgressBar = ({ currScreen }) => {
  const steps = [1, 2, 3, 4];
  const nodes = steps.map((step, index) =>
    index <= currScreen ? (
      <StyledStepperItem active>{step}</StyledStepperItem>
    ) : (
      <StyledStepperItem>{step}</StyledStepperItem>
    )
  );
  return (
    // <StyledProgressBar>
    //   {steps.map((item, idx) => (
    //     <StyledStep key={idx}>
    //       <div className={"step-counter " + activeIdx == idx ? "active" : ""}>
    //         {item}
    //       </div>
    //     </StyledStep>
    //   ))}
    // </StyledProgressBar>
    <Flex justifyCenter gap={"25px"}>
      {nodes}
    </Flex>
  );
};

export default ProgressBar;
