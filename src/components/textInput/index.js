import React from "react";
import StyledTextInput, { StyledInput, StyledSpan } from "./StyledTextInput";

const TextInput = ({ prefix, prefixLabel }) => {
  return (
    <StyledTextInput>
      {prefix ? <StyledSpan>{prefixLabel}</StyledSpan> : null}
      <StyledInput />
    </StyledTextInput>
  );
};

export default TextInput;
