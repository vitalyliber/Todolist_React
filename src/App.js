import React from 'react';
import './App.css';
import NewTodo from "./NewComponent/NewTodo";

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      tasks: [
        {id: 1, title: "task №1", done: true},
        {id: 2, title: "task №2", done: false},
        {id: 3, title: "task №3", done: false}
      ],
      value: '',
      valueOld: '',
    }
    this.onDelete = this.onDelete.bind(this)
    this.onAdd = this.onAdd.bind(this)
    this.keyPress =  this.keyPress.bind(this)
    this.itemId = 4
  }
  
  onDelete(id) {
    this.setState(({tasks}) => {
      return {
        tasks: tasks.filter((obj) => obj.id !== id)
      }
    })
  }
  
  input1Change = (e) => {
    let next = this.state;
    next.value = e.target.value;
    next.changed = next.value !== next.valueOld;
    e.currentTarget.value = ""
    this.setState(next)
  }
  
  onAdd(value) {
    const newItem = {
      id: this.itemId++, title: value, done: false
    }
    this.setState(({tasks}) => {
      const newArr = [...tasks, newItem]
      return {
        tasks: newArr
      }
    })
  }
  
  keyPress(e) {
    if (e.key === "Enter" ) {
      this.setState({
        tasks : [...this.state.tasks, e.currentTarget.value]
      })
      e.currentTarget.value = ""
    }
  }
  
  render() {
    const {tasks} = this.state
    return (
      <div className="container">
        <em>Todo List</em>
        <div className="input-group">
          <input type="text" data-class="hello"
                 className="form-control  mr-1"
                 aria-label="Text input with checkbox"
                 onChange={this.input1Change}
                 value={this.state.value}
                 onKeyPress={this.keyPress}
          />
          <button className="btn btn-success"
                  onClick={() => this.onAdd(this.state.value)}>+ add
          </button>
        </div>
        <div>
          {tasks.map(task => (
            <NewTodo task={task}
                     key={task.id}
                     onDelete={() => this.onDelete(task.id)}
                     done={tasks.done}/>
          ))}
        </div>
      </div>
    )
  }
}


export default App;
