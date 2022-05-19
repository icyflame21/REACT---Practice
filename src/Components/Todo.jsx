import React, { useState } from "react";
import { addtodo, deletetodo, toggle_todo } from "../Redux/Action";
import { useDispatch,useSelector } from "react-redux";
import { v4 as uuid } from "uuid";
export const Todo = () => {
  const [inputData, setInputData] = useState("");
  const dispatch = useDispatch();
  const todo = useSelector(state => state)
  
  const handleTodo = () => {
    let payload = {
      id: uuid(),
      text: inputData,
      status:false
    };
    dispatch(addtodo(payload))
    setInputData("")
  };
  return (
    <>
      <div className="main-div">
        <div className="child-div">
          <figure>
            <figcaption>Add your List Here</figcaption>
          </figure>
          <div className="addItems">
            <input
              type="text"
              placeholder="Add your Todos "
              value={inputData}
              onChange={(e) => {
                setInputData(e.target.value);
              }}
            />
            <i className="fa fa-plus add-btn" onClick={() => handleTodo()} />
          </div>
          <div className="display_todos">
            {
              todo.map((i) => (
                <div className="todos" key={i.id}>
                  <p>{i.text}</p>
                  <button className="delete" onClick={()=>{dispatch(deletetodo(i.id))}}>DEL</button>
                  <button className="toggle" onClick={() => { dispatch(toggle_todo(i.id)) }}>Toggle</button>
                  <p>{i.status?"Done":"Not Done" }</p>
                </div>
              ))
              }
          </div>
        </div>
      </div>
    </>
  );
};
