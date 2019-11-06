import React from "react";

const NumberButton = (props) => {
  return (
    <div>
      <button className={props.digit === "0" ? "number-btn zero" : "number-btn"}>{props.digit}</button>
    </div>
  );
};

export default NumberButton;
