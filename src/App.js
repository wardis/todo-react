import React, { Component } from 'react';
import './tailwind.css';

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
    if(!this.state.newTask.length) return;

    // create task with unique id
    const newTask = {
      id: 1 + Math.random(),
      value: this.state.newTask.slice()
    }

    // copy of current list of tasks
    const list = [...this.state.list];

    // add the new task to the list
    list.unshift(newTask);

    // update state with new list and reset the input
    this.setState({
      newTask: "",
      list
    })
  }

  deleteTask(id) {
    // copy current list of tasks
    const list = [...this.state.list];
    
    // filter out task being deleted
    const updatedList = list.filter(task => id !== task.id);

    // update the state
    this.setState({
      list: updatedList
    });
  }

  render() {
    return (
      <div className="App font-sans bg-gray-300 h-screen">
        <div className="container max-w-sm mx-auto">
          <h1 className="text-3xl py-5 font-bold">What are you going to do?</h1>

          <div className="max-w-sm overflow-hidden  mb-0">

            <div className="new-task flex items-center shadow-md rounded mb-3">
              <input type="text" className="flex-1 appearance-none border border-r-0 rounded-l px-4 py-3 zm-2 mr-0 font-semibold" placeholder="Write task here..." value={this.state.newTask} onChange={e => this.updateInput("newTask", e.target.value)} />
              <button className="bg-teal-500 hover:bg-teal-700 text-white py-3 px-4 rounded rounded-l-none border border-teal-500 m-z2 ml-0" onClick={() => this.addTask()}>Add</button>
            </div>

            <div className="bg-white  rounded shadow-lg">

              <div>
                {
                  this.state.list.map(task => {
                    return (
                      <p key={task.id} className="flex text-gray-800 even:bg-gray-200 task font-semibold p-3">
                        <span className="flex-1">{task.value}</span>
                        <button onClick={() => this.deleteTask(task.id)} className="px-3 flex-none">X</button>
                      </p>
                    );
                  })
                }
              </div>

            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
