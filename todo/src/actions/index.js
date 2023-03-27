import {ADD_TODO, MOD_TODO, DEL_TODO, INIT_TODO, ERROR, RESET_ERROR} from "../enum";

import {todoApi} from "../api";

export const addTodo = (todo) => async (dispatch) => {
  try {
    await todoApi.addTodo(todo);
    dispatch({
      type: ADD_TODO,
      payload: todo
    })
  } catch (err) {
    dispatch({ type: ERROR, payload: err.toString() });
  }
};

export const modTodo = (key) => async (dispatch) => {
  try {
    await todoApi.modTodo(key);
    dispatch({
      type: MOD_TODO,
      payload: key
    });
  } catch (err) {
    dispatch({ type: ERROR, payload: err.toString() });
  }
};

export const delTodo = (key) => async (dispatch) => {
  try {
    await todoApi.delTodo(key);
    dispatch({
      type: DEL_TODO,
      payload: key
    });
  } catch (err) {
    dispatch({ type: ERROR, payload: err.toString() });
  }
};

export const initTodo = () => async (dispatch) => {
  try {
    const todos = await todoApi.getAllTodos();
    dispatch({
      type: INIT_TODO,
      payload: todos
    });
  } catch (err) {
    dispatch({ type: ERROR, payload: err.toString() });
  }
};

export const resetError = () => (dispatch) => {
  dispatch({
    type: RESET_ERROR,
    payload: {},
  })
};
