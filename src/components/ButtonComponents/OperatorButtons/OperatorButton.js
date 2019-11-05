import React from "react";
import { jsxOpeningFragment } from "@babel/types";

const OperatorButton = (props) => {
  return (
    <div>
      <button class="op-btn">{props.currentOp.value}</button>
    </div>
  );
};

export default OperatorButton;

/* Display a button element rendering the 
data being passed down from the parent container
 on props */