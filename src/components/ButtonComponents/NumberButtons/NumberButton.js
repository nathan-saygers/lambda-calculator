import React from "react";

const NumberButton = (props) => {
  return (
    <div>
      <button className="number-btn">{props.digit}</button>
    </div>
  );
};

export default NumberButton;
