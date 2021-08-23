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

  // We use an arrow function becuase this function is triggered by a DOM event (submitting the form)
  addTodo = (event) => {
    // Stop the page from refreshing (browser's default behavior)
    event.preventDefault();

    // Note: We never want to update state directly. Only through calling 'setState()'
    // this.state.todoList.push(this.state.inputVal);

    // Create a new array with our existing todoList and combining it with the new todo
    const updatedList = [
      ...this.state.todoList,
      this.state.inputVal
    ];

    this.setState({ todoList: updatedList });
  }

  // Does not need to be an arrow function because it is not triggered by a DOM event (clicking, submitting a form, typing into input, etc...)

  // Converts the array of todos into an array of JSX
  renderTodos() {
    // ['crush some code', 'make a dope app']
    
    // forEach method
    const todosListJSX = [];
    
    this.state.todoList.forEach((todo) => {
      const todoJSX = <li>{todo}</li>;
      
      todosListJSX.push(todoJSX);
    });
    
    // [<li>crush some code</li>, <li>make a dope app</li>]

    return todosListJSX;
  }


  render() {
    this.renderTodos();

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
        
        <ul>
          {this.renderTodos()}
        </ul>
      </div>
    );
  }
}

export default App;
