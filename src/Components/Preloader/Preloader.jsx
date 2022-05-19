import React, { useEffect, useState } from "react";
import GIF from './food.gif'
export const Preloader = () => {
  const [isLoading, setisLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setisLoading(false);
    }, 4000);
  }, []);
  return (
    <>
      {isLoading ? (
        <div style={{ fontSize: "40px",textAlign: "center" }}> <img src={GIF} /></div>
      ) : (
        <div style={{ color: "green", fontSize: "40px" ,textAlign: "center"}}>HELLO THERE! Biswa</div>
      )}
    </>
  );
};
