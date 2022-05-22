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
  function date(time) {
    let date = new Date(time);
    date =
      date.toLocaleDateString() +
      "     " +
      date.toLocaleTimeString("en-US", {
        weekday: "short",
        hour: "numeric",
        minute: "numeric",
        localeMatcher: "lookup",
      });
    return date;
  }
  return commentData.map((ele, idx) => (
    <div
      style={{
        marginLeft:"70px",
        marginTop: "30px",
        fontSize: "22px",
        width: "90%",
        marginBottom: "50px",
        border: "1px solid grey",
        padding: "10px",
        borderRadius: "10px",
      }}
      key={idx}
    >
      <span style={{ color: "green" ,fontSize:'20px',textTransform:'capitalize'}}>
        {ele.author}
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        {ele.points} Points &nbsp;&nbsp;&nbsp;&nbsp;{date(ele.timestamp)}
        <br />
        <br />
        <strong style={{  color: "black" ,fontSize:'17px',fontWeight:'500'}}>
          {ele.body}
        </strong>
        <br />
        <span
          style={{color: "gray", cursor: "pointer" ,fontSize:'16px'}}
          onClick={func}
          id={idx}
        >
          Reply
        </span>
      </span>
      <div style={{borderLeft:"3px solid black",marginTop:'10px'}}>{arr[idx] && <RecursiveComment commentData={ele.replies} />}</div>
    </div>
  ));
};
