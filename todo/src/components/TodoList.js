import classNames from "classnames";
import React from 'react';

import TodoItem from "./TodoItem";

class TodoList extends React.Component {
  render() {
    const {todos, setTodos} = this.props;
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
}

export default TodoList;
