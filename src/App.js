import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newTask: "",
      list: []
    }
  }

  updateInput(key, value) {
    // update component state
    this.setState({
      [key]: value
    })
  }

  addTask() {
    // create task with unique id
    const newTask = {
      id: 1 + Math.random(),
      value: this.state.newTask.slice()
    }

    // copy of current list of tasks
    const list = [...this.state.list];

    // add the new task to the list
    list.push(newTask);

    // update state with new list and reset the input
    this.setState({
      newTask: "",
      list
    })

  }

  render() {
    return (
      <div className="App">
        <div>
          Add a new task...
          <br/>
          <input 
            type="text"
            placeholder="Write task here..."
            value={this.state.newTask}
            onChange={e => this.updateInput("newTask", e.target.value)}
          />
          <button
            onClick={() => this.addTask()}
          >
            Add
          </button>
          <br/>
          <ul>
            {
              this.state.list.map(task => {
                return (
                  <li key={task.id}>{task.value}</li>
                );
              })
            }
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
