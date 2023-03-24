import classNames from "classnames";
import { useContext } from "react";
import TodoContext from "../context";

function TodoItem({todo}) {
  const myKey = todo.key;

  const { setTodos } = useContext(TodoContext);

  const onDoubleClick = () => {
    setTodos((todos) => {
      return todos.map((todo) => {
        if (todo.key === myKey) {
          return {...todo, completed: !todo.completed};
        } else {
          return todo;
        }
      })
    })
  }

  const onDelete = () => {
    setTodos((todos) => {
      return todos.filter((todo) => todo.key !== myKey);
    })
  }

  return (
    <li>
      <span className={classNames("todo-label", { completed: todo.completed })}
        onDoubleClick={onDoubleClick}
      >
        {todo.content}
      </span>
      <button onClick={onDelete}>Delete</button>
    </li>
  )
}

export default TodoItem;
