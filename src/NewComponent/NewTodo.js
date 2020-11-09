import React, {Component} from "react";

class NewTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      done: false
    }
    this.onDone = this.onDone.bind(this)
   
  }
  
  onDone () {
    this.setState({
     done: !this.state.done
    })
 
  };
  
  render() {
    let style;
    if(this.state.done){
      style = {textDecoration: "line-through"}
    }
    return (
      <div className="input-group mt-2">
        <div className="input-group-prepend">
          <div className="input-group-text">
            <input type="checkbox"
                   aria-label="Checkbox for following text input"
                   onClick={this.onDone}
            />
          </div>
        </div>
        <input
          className="form-control"
          aria-label="Text input with checkbox"
          value={this.props.task.title}
          style={style}
          />
        <button className="btn btn-danger"
                onClick={() => this.props.onDelete(this.props.key)}>delete
        </button>
      </div>
    )
  }
}

export default NewTodo;