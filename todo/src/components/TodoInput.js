import { useRef, useState } from "react";
import { useDispatch } from "react-redux";

import { addTodo } from "../actions";

function TodoInput() {

  const [userInput, setUserInput] = useState("");
  const inputRef = useRef(null);
  const dispatch = useDispatch();

  const onAdd = () => {
    const content = userInput.trim();
    if (content !== "") {
      dispatch(addTodo(content));
    }
    setUserInput("");
    inputRef.current.focus();
  };

  const onEnter = (event) => {
    if (event.key === "Enter") {
      onAdd();
    }
  };

  const onChange = (event) => {
    setUserInput(event.target.value);
  }

  return (
    <div>
      <input
        type="text"
        value={userInput}
        onChange={onChange}
        onKeyDown={onEnter}
        className="todo-input"
        ref={inputRef}
      />
      <button onClick={onAdd}>Add</button>
    </div>
  )
}

export default TodoInput;
