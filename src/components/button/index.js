import React from "react";
import StyledButton from "./StyledButton";

const Button = ({ handleClick, label }) => {
  return <StyledButton onClick={handleClick}>{label}</StyledButton>;
};

export default Button;
