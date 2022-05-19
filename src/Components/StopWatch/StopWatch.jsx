import React, { useState, useEffect } from "react";

export const StopWatch = () => {
  const [timerOn, setTimeron] = useState(false);
  const [time, setTime] = useState(0);

  useEffect(() => {
    let interval=null
    if (timerOn) {
        
      }
    },[time])

  return (
    <>
      <div className="Timer">
        <h2>StopWatch</h2>
        <div id="display">{ time}</div>
        <div id="buttons">
          <button onClick={()=>setTimeron(true)}>START</button>
          <button onClick={() => setTimeron(false)}>STOP</button>
          <button onClick={() => setTimeron(true)}>RESUME</button>
          <button onClick={() => setTime(0)}>RESET</button>
        </div>
      </div>
    </>
  );
};
