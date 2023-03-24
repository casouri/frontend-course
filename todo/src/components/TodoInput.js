import { useState } from "react";

function TodoInput({setTodos}) {

  const [userInput, setUserInput] = useState("");

  const onAdd = () => {
    setTodos((todos) => [{
      key: Math.random(),
      content: userInput,
      completed: false,
    },
      ...todos]);
    setUserInput("");
  };

  const onChange = (event) => {
    setUserInput(event.target.value);
  }

  return (
    <div>
      <input
        type="text" value={userInput} onChange={onChange}
        className="todo-input"
      />
      <button onClick={onAdd}>Add</button>
    </div>
  )
}

export default TodoInput;
