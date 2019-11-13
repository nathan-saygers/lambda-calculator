import React, {useState} from "react";
import OperatorButton from "../OperatorButtons/OperatorButton";
import {operators} from "../../../data";

//import any components needed

//Import your array data to from the provided data file

const Operators = (props) => {
  const [operatorData] = useState(operators);
  return (
    <div>
      {operatorData.map((currentOp, index) => {
        return <OperatorButton enterValue={props.enterValue} currentOp={currentOp} key={index}/>
        })
      }
    </div>
  );
};

export default Operators;


/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/