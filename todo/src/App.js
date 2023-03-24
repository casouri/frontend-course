import { useState } from "react";

import TodoInput from "./components/TodoInput";
import TodoHeader from "./components/TodoHeader";
import TodoList from "./components/TodoList";
import TodoContext from "./context/index";
import "./App.css";

function App() {
  const initialTodos = [
    { key: Math.random(), content: "Buy milk", completed: true },
    { key: Math.random(), content: "World domination", completed: false },
  ];

  const [todos, setTodos] = useState(initialTodos);

  return (
    <div className="App">
      <TodoHeader content="Todo" />
      <TodoContext.Provider value={{ todos, setTodos }}>
        <TodoInput />
        <TodoList />
      </TodoContext.Provider>
    </div>
  );
}

export default App;
