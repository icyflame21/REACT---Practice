import { ADD_TODO, DELETE_TODO, TOGGLE_TODO } from "./Action-Types";

export const addtodo = (payload) => {
  return {
    type: ADD_TODO,
    payload: payload,
  };
};

export const deletetodo = (payload) => {
  return {
    type: DELETE_TODO,
    payload: payload,
  };
};

export const toggle_todo = (payload) => {
  return {
    type: TOGGLE_TODO,
    payload: payload,
  };
};
