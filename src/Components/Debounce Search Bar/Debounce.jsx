import React, { useState, useEffect } from "react";

export const Debounce = () => {
  const [text, setText] = useState("");
  const [res, setRes] = useState([]);
  const [res1, setRes1] = useState([]);
 
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => {
      setRes(data);
    });
   let id,arr=[]
    if (text != '') {
      id=setTimeout(() => {
        res.map((e) => {
          let a=e.name
          if (a.toLowerCase().includes(text.toLowerCase())) {
            arr.push(e.name);
          }
          setRes1(arr);
        })
      }, 800)
    }
    return ()=>{clearTimeout(id)}
  }, [text])
  
  const input = {
    padding: "10px",
    border: "1px solid lightgray",
    margin: "10% ",
    borderRadius: 5,
    width: 300,
  };
  const suggestionBox = {
    maxHeight: "300px",
    overflowY: "auto",
    width: 300,
    position: "absolute",
    top: "12rem",
    borderRadius: 5,
    left: "9.7rem",
    border: "1px solid black",
  };
  const title = {
    padding: "20px",
    borderBottom: "1px solid lightgray",
    textAlign: "left",
    fontWeight: 500,
    fontSize: "18px",
    lineHeight: "1.5rem"
  };
  return (
    <>
      <input
        type="text"
        style={input}
        autoFocus={true}
        spellCheck={false}
        placeholder="Search Something..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      {res1&&text ? (
        <div style={suggestionBox}>
          {res1.map((e, idx) => (
                <div key={idx}>
                  <p style={title}>{e}</p>
                </div>
              ))
            }
        </div>
      ) : (
        ""
      )}
    </>
  );
};
