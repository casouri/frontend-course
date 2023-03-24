import classNames from "classnames";
import { useDispatch } from "react-redux";

import {modTodo, delTodo} from "../actions";

function TodoItem({todo}) {
  const myKey = todo.key;
  const dispatch = useDispatch();

  const onDoubleClick = () => {
    dispatch(modTodo(myKey));
  }

  const onDelete = () => {
    dispatch(delTodo(myKey));
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
