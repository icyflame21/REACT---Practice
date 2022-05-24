import React, { useState, useEffect } from "react";

export const Debounce = () => {
  let API_KEY = "21f03053e26ab7eff71356d94e8eaca7";
  let c = 0;
  const [text, setText] = useState("");
  const [res, setRes] = useState([]);
  useEffect(() => {
    let id = setTimeout(() => {
      fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${text}`
      )
        .then((res) => res.json())
        .then((data) => {
          setRes(data.results);
        });
    }, 1000);
    return () => clearTimeout(id);
  }, [text]);
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
    padding: "10px",
    marginBottom: "10px",
    borderBottom: "1px solid lightgray",
    textAlign: "center",
    fontWeight: 500,
  };
  return (
    <>
      <input
        type="text"
        style={input}
        placeholder="Search Something..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      {res ? (
        <div style={suggestionBox}>
          {res.map((e, idx) => (
                <div key={idx}>
                  <p style={title}>{e.title}</p>
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
