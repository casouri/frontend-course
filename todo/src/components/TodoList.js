import classNames from "classnames";
import { useSelector } from "react-redux";

import TodoItem from "./TodoItem";

function TodoList() {
  const todos = useSelector((state) => state);

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
