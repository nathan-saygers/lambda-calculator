import React from "react";
import { jsxOpeningFragment } from "@babel/types";

const OperatorButton = (props) => {
  return (
    <div>
      <button className="op-btn">{props.currentOp.char}</button>
    </div>
  );
};

export default OperatorButton;

/* Display a button element rendering the 
data being passed down from the parent container
 on props */