import React from "react";

const Change = (props) => (
  <div>
    <p>{props.passValue}</p>
    <button onClick={()=>props.getFlagVal("hello React")}>click to change parents props</button>
  </div>
);
export default Change;