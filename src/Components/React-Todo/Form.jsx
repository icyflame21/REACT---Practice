import React from "react";

export const Form = ({
  setInputText,
  setTodos,
  inputText,
  todos,
  setfilterTodos,
}) => {
  const submitTodoHandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      {
        text: inputText,
        completed: false,
        id: Math.random() * 10000,
      },
    ]);
    setInputText("");
  };

  const filterHandler = (e) => {
    setfilterTodos(e.target.value);
  };

  return (
    <form>
      <input
        onInput={(e) => setInputText(e.target.value)}
        value={inputText}
        type="text"
        className="todo-input"
      />
      <button className="todo-button" onClick={submitTodoHandler} type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select onChange={filterHandler} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
};
