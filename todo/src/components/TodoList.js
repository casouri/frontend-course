import classNames from "classnames";
import { useContext } from "react";
import TodoContext from "../context";

import TodoItem from "./TodoItem";

function TodoList() {
  const { todos } = useContext(TodoContext);

  const listItems = todos.map((todo) => (
    <TodoItem
      key={todo.key}
      todo={todo}
      className={classNames({ completed: todo.completed })}
    />
  ));
  return <ul>{listItems}</ul>;
}

export default TodoList;
