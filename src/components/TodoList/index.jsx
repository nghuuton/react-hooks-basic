import React, { Component } from "react";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = { newText: "", todoList: [{ id: 1, title: "Do something" }] };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleDelete(item) {
    const newTodoList = [...this.state.todoList];
    const index = newTodoList.findIndex((i) => i.id === item.id);
    newTodoList.splice(index, 1);
    this.setState({ todoList: newTodoList });
  }
  handleChange({ currentTarget: input }) {
    this.setState({ newText: input.value });
  }
  handleSubmit(e) {
    e.preventDefault();
    const newTodo = { title: this.state.newText };
    const newTodoList = [...this.state.todoList, { ...newTodo }];
    this.setState({ todoList: newTodoList, newText: "" });
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            onChange={this.handleChange}
            value={this.state.newText}
          />
        </form>
        <ul>
          {this.state.todoList.map((item, index) => (
            <li key={index} onClick={() => this.handleDelete(item)}>
              {item.title}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default TodoList;
