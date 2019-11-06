import React, {useState} from "react";
import SpecialButton from "./SpecialButton";
import {specials} from "../../../data";

//import any components needed

//Import your array data to from the provided data file

const Specials = () => {
  const [specialData] = useState(specials);
  // STEP 2 - add the imported data to state
  console.log(specialData);

  return (
    <div className="spec-btn-container">
      {specialData.map((specialChar, index) => {
        return <SpecialButton specialChar={specialChar} key={index}/>
      })}
    </div>
  );
};

export default Specials;

/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/