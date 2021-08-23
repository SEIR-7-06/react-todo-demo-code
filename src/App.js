import React from 'react';
import './App.css';

class App extends React.Component {
  state = {
    inputVal: ''
  }

  // event is an object with information about the typing event
  // event.target.value is the key the user types!
  handleInputChange = (event) => {
    console.log(event.target.value);

    this.setState({ inputVal: event.target.value });
  }

  render() {
    return (
      <div className="App">
        <h1>React Todo List</h1>
  
        <form>
          <input 
            type="text" 
            placeholder="Enter a Todo..." 
            value={this.state.inputVal} 
            onChange={this.handleInputChange}
          />
  
          <input type="submit" value="Add Todo" />
        </form>
      </div>
    );
  }
}

export default App;
