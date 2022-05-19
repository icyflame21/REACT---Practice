import { ADD_TODO, DELETE_TODO, TOGGLE_TODO } from "./Action-Types";

const intialState = [];
export const reducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case ADD_TODO:
      return [...state, payload];
    case TOGGLE_TODO:
      return state.map((item) =>
        item.id === payload ? { ...item, status: !item.status } : item
      );

    case DELETE_TODO:
      return state.filter((item) => item.id !== payload);
    default:
      return state;
  }
};
