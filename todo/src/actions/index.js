
import {ADD_TODO, MOD_TODO, DEL_TODO} from "../enum";

export const addTodo = (content) => ({
  type: ADD_TODO,
  payload: content,
});

export const modTodo = (key) => ({
  type: MOD_TODO,
  payload: key
});

export const delTodo = (key) => ({
  type: DEL_TODO,
  payload: key
});
