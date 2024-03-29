import React from "react";
import { Stack } from "@mui/material";

const HorizontalStack = (props) => {
  return React.createElement(Stack, { direction: "row", alignItems: "center", spacing: 1, ...props }, props.children);
}

export default HorizontalStack;
