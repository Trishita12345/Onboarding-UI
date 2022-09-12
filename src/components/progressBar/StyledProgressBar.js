import styled from "styled-components";
import is from "styled-is";

export const StyledStepperItem = styled.div`
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

export const StyledStepCounter = styled.div`
  position: relative;
  z-index: 5;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--dark-grey);
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
