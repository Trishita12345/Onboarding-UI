import styled, { css } from "styled-components";

const inputStyles = css`
  flex-grow: 1;
  padding: 2.5%;
  font-size: 0.8vw;
  color: var(--medium-grey);
  border: none;
  &:hover {
    cursor: pointer;
  }
  &:focus {
    outline-color: var(--grey);
  }
`;
export const StyledInput = styled.input`
  ${inputStyles};
`;

const spanStyles = css`
  padding: 2.5%;
  font-size: 0.8vw;
  color: var(--medium-grey);
  background-color: var(--light-grey);
`;

export const StyledSpan = styled.span`
  ${spanStyles};
`;

const textInputStyles = css`
  display: flex;
  min-width: 10em;
  border: 2px solid var(--light-grey);
  border-radius: 5px;
`;
const StyledTextInput = styled.div`
  ${textInputStyles};
`;
export default StyledTextInput;
