import { combineReducers } from "redux";

import { ADD_TODO, MOD_TODO, DEL_TODO, INIT_TODO, ERROR, RESET_ERROR } from "../enum";

const todoReducer = (state = [], action) => {
  switch (action.type) {
  case ADD_TODO:
    {
      const todos = state;
      return [
        action.payload,
        ...todos
      ];
    }
  case MOD_TODO:
    {
      const key = action.payload;
      const todos = state;
      return todos.map((todo) => {
        if (todo.key === key) {
          return {...todo, completed: !todo.completed};
        } else {
          return todo;
        }
      })
    }
  case DEL_TODO:
    {
      const key = action.payload;
      const todos = state;
      return todos.filter((todo) => todo.key !== key);
    }
  case INIT_TODO:
    {
      return action.payload;
    }
  default:
    return state;
  }
};

const initErrorState = { error: false, message: "" };

export const errorReducer = (state = initErrorState, action) => {
  const {type, payload} = action;
  switch (type) {
  case ERROR:
    return { error: true, message: payload };
  case RESET_ERROR:
    return initErrorState;
  default:
    return state;
  }
}

export default combineReducers({
  todos: todoReducer,
  error: errorReducer
});
