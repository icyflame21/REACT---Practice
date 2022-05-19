import React, { useState, useEffect } from "react";
import './StopWatch.css'
export const StopWatch = () => {
  const [timerOn, setTimeron] = useState(false);
  const [time, setTime] = useState(0);

  useEffect(() => {
    let interval = null;
    if (timerOn) {
      interval = setInterval(() => {
        setTime((prev) => prev + 10);
      }, 10);
    } else if (!timerOn) {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  }, [timerOn]);

  return (
    <>
      <div className="Timer">
        <h2>StopWatch</h2>
        <div id="display">
          <span>{("0"+Math.floor((time/60000)%60)).slice(-2)}:</span>
          <span>{("0"+Math.floor((time/1000)%60)).slice(-2) }:</span>
          <span>{("0"+((time/10)%100)).slice(-2)}</span>
        </div>
        <div id="buttons">
          {!timerOn && time === 0 && (
            <button onClick={() => setTimeron(true)}>START</button>
          )}
          {timerOn && <button onClick={() => setTimeron(false)}>STOP</button>}
          {!timerOn && time > 0 && (
            <button onClick={() => setTimeron(true)}>RESUME</button>
          )}
          {!timerOn && time > 0 && (
            <button onClick={() => setTime(0)}>RESET</button>
          )}
        </div>
      </div>
    </>
  );
};
