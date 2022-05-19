import React, { useState, useEffect } from "react";

export const RecursiveComment = ({ commentData }) => {
  const [arr, setArr] = useState([]);

  useEffect(() => {
    let temp = [];
    for (let i = 0; i < commentData.length; i++) temp.push(false);
    setArr(temp);
  }, []);

  const func = (e) => {
    let id = +e.target.id;
    let newArr = [...arr];
    newArr[id] = !newArr[id];
    setArr(newArr);
  };

  return commentData.map((ele, idx) => (
    <div
      style={{
        marginLeft: "100px",
        marginTop: "30px",
        fontSize: "22px",
        marginBottom: "50px",
      }}
      key={idx}
    >
      <span style={{ color: "green" }}>
        {ele.author}
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        {ele.points} Points <br />
        <br />{" "}
        <strong style={{ paddingLeft: "20px", color: "black" }}>
          {ele.body}
        </strong>
        <br />
        <span
          style={{ paddingLeft: "20px", color: "gray", cursor: "pointer" }}
          onClick={func}
          id={idx}
        >
          Reply GiveAward Share Report Save
        </span>
      </span>
      <div
        style={{
          borderLeft: "3px solid gray",
        }}
      >
        {arr[idx] && <RecursiveComment commentData={ele.replies} />}
      </div>
    </div>
  ));
};
