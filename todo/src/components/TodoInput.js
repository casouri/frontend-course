import React from 'react';

class TodoInput extends React.Component {
  constructor(props) {
    super(props)
    this.state = { input: "" };
  }

  render() {
    const {setTodos} = this.props;

    const onAdd = () => {
      setTodos((todos) => [{
        key: Math.random(),
        content: this.state.input,
        completed: false,
      },
        ...todos]);
      this.setState({ input: "" });
    };

    const onChange = (event) => {
      this.setState((state, props) => ({ input: event.target.value }));
    }

    return (
      <div>
        <input
          type="text" value={this.state.input} onChange={onChange}
          className="todo-input"
        />
        <button onClick={onAdd}>Add</button>
      </div>
    );
  }
}

export default TodoInput;
