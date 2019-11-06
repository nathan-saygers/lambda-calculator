import React from "react";

const SpecialButton = (props) => {
  return (
    <div>
      <button className="spec-btn">{props.specialChar}</button>
    </div>
  );
};

export default SpecialButton;
/* Display a button element rendering the data being passed down from the parent container on props */