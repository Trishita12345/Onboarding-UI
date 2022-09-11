import React from "react";
import StyledTextInput, { StyledInput, StyledSpan } from "./StyledTextInput";

const TextInput = ({ prefix, prefixLabel, placeholderText }) => {
  return (
    <StyledTextInput>
      {prefix ? <StyledSpan>{prefixLabel}</StyledSpan> : null}
      <StyledInput placeholder={placeholderText} />
    </StyledTextInput>
  );
};

export default TextInput;
