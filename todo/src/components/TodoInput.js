import { useContext, useRef, useState } from "react";
import TodoContext from "../context";

function TodoInput() {

  const [userInput, setUserInput] = useState("");
  const {setTodos} = useContext(TodoContext);
  const inputRef = useRef(null);

  const onAdd = () => {
    const value = userInput.trim();
    if (value !== "") {
      setTodos((todos) => [{
        key: Math.random(),
        content: userInput,
        completed: false,
      },
        ...todos]);

      setUserInput("");
      inputRef.current.focus();
    }
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
