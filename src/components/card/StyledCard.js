import styled, { css } from "styled-components";
import is from "styled-is";

const cardStyles = css`
  display: block;
  padding: 5%;
  width: 10vw;
  height: 9vw;
  border: 1px solid var(--light-grey);
  border-radius: 5px;
  font-size: 0.8vw;

  box-sizing: border-box;

  &:hover,
  &:focus {
    border: 1px solid var(--violet);
    cursor: pointer;
    color: var(--violet);
  }
  ${is("isSelected")`  
    border: 1px solid var(--violet);
    color: var(--violet);
  `};
`;

const StyledCard = styled.div`
  ${cardStyles};
`;

export default StyledCard;
