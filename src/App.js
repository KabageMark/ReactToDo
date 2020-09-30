import React from 'react';
import './App.css';
import TODO from './todos'
import { Component } from 'react';
import AddTodo from './Addform'

class App extends Component {

  state = {
    todos:[

    {id: 1, content:'Buy some milk'},
    {id: 2, content:'Play Super Mario'}

    ]
  }

  //function for deleting todo
  deleteToDo = (id)=> {
    const todos = this.state.todos.filter(todo =>{
      return todo.id !== id
    })
    this.setState({
      todos
    })

  }
  //function for adding todo
  addToDo = (todo) =>{
     todo.id = Math.random()
     let todos = [...this.state.todos ,todo]
     this.setState({
       todos
     })


  }

  render(){
  return (
    <div className="todo-App container">
     <h1  className="center blue-text" > Todo's</h1>
     <TODO  todos={this.state.todos} deleteToDo ={this.deleteToDo}  />
     <AddTodo addToDo={this.addToDo}/>
    </div>
  );
}
}

export default App;
