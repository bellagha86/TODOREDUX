import React, { Component } from "react";
import { connect } from "react-redux";
import { addTask, deleteTask, completeTask } from "./actions/actions";
import './ToDoList.css'

class ToDoList extends Component {
  state = {
    myInput: "",
    isComplete: false,

  };
  handleChange = e => {
    this.setState({
      myInput: e.target.value
    });
  };
  handleAdd = () => {
    this.props.addTask({
      text: this.state.myInput,
      id: Math.random(),
      isComplete: false,
    });
    this.setState({
      myInput: ""
    });
  };
  render() {
    return (
      <div>
        <div className="headpart">
            
          <input className="tasks"value={this.state.myInput} onChange={this.handleChange} />
          <button onClick={this.handleAdd}>ADD</button>
        </div>
        <ul className="taskslist">
          {this.props.todos.map(el => (
            <li>
              <span className={el.isComplete?"taskdone":"task"}>{el.text}</span>
              <button onClick={()=> this.props.completeTask(el.id)}>Complete</button>
              <button onClick={() => this.props.deleteTask(el.id)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    todos: state
  };
};
const mapDispatchToProps = dispatch => {
  return {
    addTask: payload => dispatch(addTask(payload)),
    deleteTask: payload => dispatch(deleteTask(payload)),
    completeTask:payload =>dispatch(completeTask(payload))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ToDoList);
