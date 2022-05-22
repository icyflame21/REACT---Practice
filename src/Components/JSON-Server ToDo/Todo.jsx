import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

export const Todo = () => {
  const [state, setState] = useState({
    groceryName: "",
    quantity: "",
    price: "",
  });
  const [todos, setTodos] = useState([]);
  const [page, setPage] = useState(1);
  const [edit_json, setEdit] = useState(false);
  const [status, setStatus] = useState("");
  useEffect(() => {
    getTodos(page);
  }, [page]);
  let paginate_arr = [];

  for (var i = 0; i < 10; i++) {
    paginate_arr[i] = i + 1;
  }
  function getTodos(page_num) {
    fetch(`http://localhost:3000/groceries?_page=${page_num}&_limit=7`)
      .then((res) => res.json())
      .then((data) => setTodos(data));
  }
  const submitHandler = (e) => {
    e.preventDefault();
    if (
      state.groceryName !== "" ||
      state.quantity !== "" ||
      state.price !== ""
    ) {
      if (edit_json) {
        edit(state, state.id);
      } else {
        saveData();
      }
    } else alert("Enter all fields");
  };
  const saveData = () => {
    const payload = {
      ...state,
      status: false,
      id: uuidv4(),
    };
    fetch("http://localhost:3000/groceries", {
      method: "POST",
      body: JSON.stringify(payload),
      headers: { "Content-type": "application/json" },
    })
      .then(() => getTodos(page))
      .then(() =>
        setState({
          groceryName: "",
          quantity: "",
          price: "",
        })
      )
      .catch((err) => {
        console.error(err);
      });
  };
  const deleteHandler = (id) => {
    fetch(`http://localhost:3000/groceries/${id}`, {
      method: "DELETE",
    }).then(() => getTodos());
  };
  const EditHandler = (item) => {
    if (window.confirm("Are you sure you want to edit this ?") === true) {
      setState({ ...item });
      setEdit(true);
    }
  };
  const edit = (payload, id) => {
    fetch(`http://localhost:3000/groceries/${id}`, {
      method: "PATCH",
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(() => {
        getTodos();
      })
      .then(() => {
        setState({
          groceryName: "",
          quantity: "",
          price: "",
        });
      })
      .catch((err) => console.error(err));
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({
      ...state,
      [name]: value,
    });
  };
  const sortHandler = (e) => {
    let val = e.target.id;
    let arr = [...todos];
    if (val == "asc") {
      arr.sort((a, b) => parseInt(a.price) - parseInt(b.price));
      setTodos(arr);
    } else if (val == "desc") {
      arr.sort((a, b) => parseInt(b.price) - parseInt(a.price));
      setTodos(arr);
    } else setTodos(arr);
  };
  const pageChange = (num) => {
    setPage(page + num);
  };
  const completeHandler = (id) => {
    setTodos(
      todos.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            status: true,
          };
        }
        return item;
      })
    );
  };
  const handleStatus = (e) => {
    console.log(e.target.value);
    setStatus(e.target.value);
    switch (status) {
      case "completed": {
        setTodos(todos.filter((e) => e.status == true));
      }
      case "uncompleted": {
        setTodos(todos.filter((e) => e.status == false));
      }
      default:
        setTodos(todos);
    }
  };
  return (
    <>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          name="groceryName"
          placeholder="Grocery Name"
          value={state.groceryName}
          onChange={(e) => handleChange(e)}
        />
        &nbsp;&nbsp;&nbsp;
        <input
          type="number"
          name="quantity"
          placeholder="Quantity"
          value={state.quantity}
          onChange={(e) => handleChange(e)}
        />
        &nbsp;&nbsp;&nbsp;
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={state.price}
          onChange={(e) => {
            handleChange(e);
          }}
        />
        &nbsp;&nbsp;&nbsp;
        <input
          type="submit"
          value="Submit"
          style={{ color: "whitesmoke", backgroundColor: "#3CB371" }}
        />
        &nbsp;&nbsp;&nbsp;
      </form>

      <div className="todo-container">
        <ul className="todo-list">
          <div className="todo_group_container">
            <div className="todo" style={{ marginBottom: "1.5rem" }}>
              <li className="todo-item">Grocery Name</li>

              <li className="todo-item">Quantity</li>

              <li className="todo-item">Price</li>
            </div>
            <div
              className="btn-group"
              style={{ marginBottom: "1rem", marginLeft: "1.5rem" }}
            >
              <button
                className="sort-btn"
                id="asc"
                onClick={(e) => sortHandler(e)}
              >
                <i className="fas fa-sort"></i>
              </button>
              <button
                className="sort-btn"
                id="desc"
                style={{ backgroundColor: "#FF00FF" }}
                onClick={(e) => sortHandler(e)}
              >
                <i className="fas fa-sort"></i>
              </button>
            </div>
            <div className="select">
              <select
                onChange={(e) => handleStatus(e)}
                name="todos"
                className="filter-todo"
                style={{ marginBottom: "1rem" }}
              >
                <option value="all">All</option>
                <option value="completed">Completed</option>
                <option value="uncompleted">Uncompleted</option>
              </select>
            </div>
          </div>

          {todos.map((item) => (
            <>
              <div
                className="todo_group_container"
                style={{ marginRight: "10rem" }}
              >
                {item.status ? (
                  <strike>
                    {" "}
                    <div
                      className="todo"
                      key={item.id}
                      style={{ opacity: 0.2 }}
                    >
                      <li className="todo-item">{item.groceryName}</li>
                      <li className="todo-item">{item.quantity}</li>
                      <li className="todo-item">{item.price}</li>
                    </div>
                  </strike>
                ) : (
                  <div className="todo" key={item.id}>
                    <li className="todo-item">{item.groceryName}</li>

                    <li className="todo-item">{item.quantity}</li>

                    <li className="todo-item">{item.price}</li>
                  </div>
                )}
                <div className="btn-group" style={{ marginLeft: "1rem" }}>
                  <button
                    className="complete-btn"
                    onClick={() => completeHandler(item.id)}
                  >
                    <i className="fas fa-check"></i>
                  </button>
                  <button
                    className="trash-btn"
                    onClick={() => deleteHandler(item.id)}
                  >
                    <i className="fas fa-trash"></i>
                  </button>
                  <button
                    className="edit-btn"
                    onClick={() => EditHandler(item)}
                  >
                    <i className="fas fa-edit"></i>
                  </button>
                </div>
              </div>
            </>
          ))}
        </ul>
      </div>
      <div className="paginate_btn">
        <button
          className={page == 1 ? "disable_btn" : "prev_btn"}
          onClick={() => pageChange(-1)}
          disabled={page == 1}
        >
          <i className="fas fa-arrow-left"></i>
        </button>

        {paginate_arr.map((i, idx) => (
          <button
            disabled={page == 10}
            key={idx}
            style={{ marginLeft: "10px", padding: "13px" }}
            className={i == page ? "active-btn" : ""}
          >
            {i}
          </button>
        ))}

        <button
          onClick={() => pageChange(1)}
          className={page == 10 ? "disable_btn" : "next_btn"}
          style={{ marginLeft: "20px" }}
          disabled={page==10}
        >
          <i className="fas fa-arrow-right"></i>
        </button>
      </div>
    </>
  );
};
