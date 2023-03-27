import { useEffect } from "react";
import { useDispatch } from "react-redux";

import TodoInput from "./components/TodoInput";
import TodoHeader from "./components/TodoHeader";
import TodoList from "./components/TodoList";
import ErrorDisplay from "./components/ErrorDisplay";
import { initTodo } from "./actions";

import "./App.css";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(initTodo());
  }, [dispatch]);

return (
    <div className="App">
      <TodoHeader content="Todo" />
      <TodoInput />
      <TodoList />
      <ErrorDisplay />
    </div>
  );
}

export default App;
