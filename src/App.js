import React,{Component} from 'react'
import './App.css';
import Todo from './Components/ToDoList' 
/*const store = createStore(reducer);  */

class App extends Component {
  render(){
  return (
    <div>
      <Todo/>
    </div>
   
  );
}}

export default App;
