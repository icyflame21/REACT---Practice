import React, { useEffect, useState } from "react";
// import GIF from './food.gif'
export const Preloader = () => {
  const btn_primary = {
    padding: "10px",
    outline: 'none',
    backgroundColor: 'whitesmoke',
    color: 'grey',
    border: '1px solid red',
    borderRadius: '5px',
  }
  const handleClick = () => {
    if (document.getElementsByClassName == 'btn') {
      return (
       <>
        <button style={btn_primary} onClick={() => handleClick()} className='btn'>Click me !</button>
        <button style={btn_primary} onClick={()=>handleClick() } className='btn'>Click me !</button>
        </> 
      )
  }
  }
  return (
    <>
      <button style={btn_primary} onClick={()=>handleClick() } className='btn'>Click me !</button>
    </>
  );
};
