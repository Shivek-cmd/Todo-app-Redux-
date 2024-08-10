// reducers/todoReducer.js
import { ADD_TODO, REMOVE_TODO } from "../actions/todoAction";

const initialState = {
  todos: [
    "Revise Advanced JavaScript",
    "Go for 30 mins walk",
    "Revise CSS Pseudo Class Selectors",
  ],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case REMOVE_TODO:
      return {
        ...state,
        todos: state.todos.filter((_, index) => index !== action.payload),
      };
    default:
      return state;
  }
};
