import classNames from "classnames";

import TodoItem from "./TodoItem";

function TodoList({ todos, setTodos }) {
  const listItems = todos.map((todo) => (
    <TodoItem
      key={todo.key}
      todo={todo}
      setTodos={setTodos}
      className={classNames({ completed: todo.completed })}
    />
  ));
  return <ul>{listItems}</ul>;
}

export default TodoList;
