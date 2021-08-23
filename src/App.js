import React from 'react';
import './App.css';

class App extends React.Component {
  state = {
    inputVal: '',
    todoList: ['crush some code', 'make a dope app']
  }

  // event is an object with information about the typing event
  // event.target.value is the key the user types!
  handleInputChange = (event) => {
    console.log(event.target.value);

    this.setState({ inputVal: event.target.value });
  }

  addTodo = (event) => {
    // Stop the page from refreshing (browser's default behavior)
    event.preventDefault();

    // Create a new array with our existing todoList and combining it with the new todo
    const updatedList = [
      ...this.state.todoList,
      this.state.inputVal
    ];

    this.setState({ todoList: updatedList, inputVal: '' });
  }

  handleDeleteOne = (idx) => {
    console.log('Tried to delete one! Index:', idx);

    // Todo:
    // Remove the item from the todoList for the particular index we clicked on

  }

  // Converts the array of todos into an array of JSX
  // this.state.todoList => ['crush some code', 'make a dope app']
  // todoListJSX => [<li>crush some code</li>, <li>make a dope app</li>]
  renderTodos() {
    
    const todosListJSX = [];
    
    // forEach method - loops through todoList array
    // for each item push a <li> into todosListJSX
    this.state.todoList.forEach((todo, idx) => {
      const todoJSX = (
        <li key={idx}>
          <span>{todo}</span>
          {" "}
          <button onClick={() => this.handleDeleteOne(idx)}>x</button>
        </li>
      );
      
      todosListJSX.push(todoJSX);
    });

    return todosListJSX;
  }

  // Activity
  // - Create a method to handle when the clear button is clicked
  // - Inside of the method, update state to get rid of all todos

  handleDelete = (event) => {
    // this.setState({ todoList: this.state.todoList.splice(event, 0) })
    this.setState({ todoList: [] });
  }

  render() {
    return (
      <div className="App">
        <h1>React Todo List</h1>
  
        <form onSubmit={this.addTodo}>
          <input 
            type="text" 
            placeholder="Enter a Todo..." 
            value={this.state.inputVal} 
            onChange={this.handleInputChange}
          />
  
          <input type="submit" value="Add Todo" />
        </form>

        <br />
        <button onClick={this.handleDelete}>Clear All Todos</button>

        <ul>
          {this.renderTodos()}
        </ul>
      </div>
    );
  }
}

export default App;
