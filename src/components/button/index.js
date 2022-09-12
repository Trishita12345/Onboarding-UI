import React from "react";
import StyledButton from "./styledButton";

const Button = ({ handleClick, label }) => {
  return <StyledButton onClick={handleClick}>{label}</StyledButton>;
};

export default Button;
