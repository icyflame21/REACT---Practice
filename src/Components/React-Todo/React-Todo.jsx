import React, { useState, useEffect } from "react";
import { Form } from "./Form";
export const Todo = () => {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [filtertodos, setfilterTodos] = useState("all");
  const [filterArray, setfilterArray] = useState([]);

  const handleDelete = (todo) => {
    setTodos(todos.filter((e) => e.id !== todo.id));
  };

  const handleComplete = (todo) => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: true,
          };
        }
        return item;
      })
    );
  };
  useEffect(() => {
    filterHandle();
  }, [filtertodos, todos]);

  const filterHandle = () => {
    switch (filtertodos) {
      case "completed":
        setfilterArray(todos.filter((todo) => (todo.completed == true)));
        break;
      case "uncompleted":
        setfilterArray(todos.filter((todo) => (todo.completed == false)));
        break;
      default:
        setfilterArray(todos);
        break;
    }
  };
  const handleEdit = (item) => {
    setInputText(item.text)
  }
  return (
    <>
      <header>
        <h1>Todo List</h1>
      </header>
      <Form
        setInputText={setInputText}
        setTodos={setTodos}
        inputText={inputText}
        todos={todos}
        setfilterTodos={setfilterTodos}
      />
      <div className="todo-container">
        <ul className="todo-list">
          {filterArray.map((item) => (
            <div className="todo" key={item.id}>
              {item.completed ? (
                <li className="todo-item">
                  <strike style={{ opacity: 0.4 }}>{item.text}</strike>
                </li>
              ) : (
                <li className="todo-item">{item.text}</li>
              )}
              <button
                className="complete-btn"
                onClick={() => handleComplete(item)}
              >
                <i className="fas fa-check"></i>
              </button>
              <button className="trash-btn" onClick={() => handleDelete(item)}>
                <i className="fas fa-trash"></i>
              </button>
              <button className="edit-btn" onClick={() => handleEdit(item)}>
                EDIT
              </button>
            </div>
          ))}
        </ul>
      </div>
    </>
  );
};
