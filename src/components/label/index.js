import React from "react";
import StyledLabel from "./StyledLabel";

const Label = ({ label, variant, size, color }) => {
  return (
    <StyledLabel variant={variant} size={size} color={color}>
      {label}
    </StyledLabel>
  );
};

export default Label;
