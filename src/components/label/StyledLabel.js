import styled, { css } from "styled-components";

const heading = css`
  font-size: 1.6vw;
  font-weight: bold;
  color: var(--black);
`;
const primary = css`
  font-size: 0.8vw;
  font-weight: 600;
  color: var(--dark-grey);
`;
const secondary = css`
  font-size: 0.8vw;
  font-weight: 500;
  color: var(--dark-grey);
`;
const tertiary = css`
  font-size: 0.8vw;
  font-weight: 400;
  color: var(--grey);
`;

const variants = {
  heading: heading,
  primary: primary,
  secondary: secondary,
  tertiary: tertiary,
};

const labelStyles = css`
  display: block;
  ${(props) => variants[props.variant]};
`;

const StyledLabel = styled.div`
  ${labelStyles};
`;

export default StyledLabel;
