import TodoInput from "./components/TodoInput";
import TodoHeader from "./components/TodoHeader";
import TodoList from "./components/TodoList";
import { addTodo } from "./actions";
import "./App.css";

function App() {
  addTodo({ content: "Buy milk", completed: true });
  addTodo({ content: "World domination", completed: false });

  return (
    <div className="App">
      <TodoHeader content="Todo" />
      <TodoInput />
      <TodoList />
    </div>
  );
}

export default App;
