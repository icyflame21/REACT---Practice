import React, { useState } from "react";

export const Bar = ({ bgcolor, progess }) => {
  const [percent, setPercent] = useState(progess);

  const parentDiv = {
    height: "30px",
    width: "100%",
    backgroundColor: "rgb(225,225,225)",
    borderRadius: "40",
    margin: "35px 0",
  };
  const childDiv = {
    height: "100%",
    width: `${percent}%`,
    backgroundColor: bgcolor,
    borderRadius: 40,
    transition: ".7s ease-in-out",
    textAlign: "right",
  };
  const progressText = {
    padding: 10,
    color: "black",
    fontWeight: 900,
  };

    const progressHandler = (e) => {
        setPercent(Math.ceil(100*(e.clientX / window.innerWidth)))
    }
    return <>
        <div style={parentDiv} onClick={progressHandler}>
            <div style={childDiv}>
                <span style={progressText}> {`${percent}%` }</span>
            </div>
            
    </div>    
  </>;
};
