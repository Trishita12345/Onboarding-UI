import React from "react";
import StyledLabel from "./StyledLabel";

const Label = ({ label, variant }) => {
  return <StyledLabel variant={variant}>{label}</StyledLabel>;
};

export default Label;
