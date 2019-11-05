import React, {useState} from "react";
import NumberButton from "../../ButtonComponents/NumberButtons/NumberButton";
import {numbers} from "../../../data";

//import any components needed
// example of import from data.js. Note all the ../   This is how we move through folders. 
/* 
import { numbers } from '../../../data' 
*/
//Import your array data to from the provided data file

const Numbers = () => {
  // STEP 2 - add the imported data to state
  const [numberData, setNumberData] = useState(numbers);
  console.log(numberData);
  return (
    <div>
      {numberData.map((digit, index) => (
          <NumberButton key={index} digit={digit} />
        ))}
    </div>
  );
};

export default Numbers;


/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/