import React from "react";

const NumberButton = (props) => {
  return (
    <div>
      <button className="number-button">{props.digit}</button>
    </div>
  );
};

export default NumberButton;
