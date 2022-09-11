import styled, { css } from "styled-components";

const buttonStyles = css`
  display: block;
  min-width: 10em;
  padding: 4.5%;
  width: 100%;
  background-color: var(--violet);
  color: var(--light-grey);
  border: none;
  border-radius: 5px;
  font-size: 0.8vw;

  &:hover {
    background: var(--dark-violet);
    color: #fff;
    cursor: pointer;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
`;

const StyledButton = styled.button`
  ${buttonStyles};
`;

export default StyledButton;
