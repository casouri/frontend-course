
import { ADD_TODO, MOD_TODO, DEL_TODO } from "../enum";

const initialTodos = [
  { key: Math.random(), content: "Buy Mlik", completed: true },
  { key: Math.random(), content: "World domination", completed: false },
];

export const reducer = (state = initialTodos, action) => {
  switch (action.type) {
  case ADD_TODO:
    {
      const todos = state;
      const content = action.payload;
      return [
        { key: Math.random(), content, completed: false },
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
  default:
    return state;
  }
};
