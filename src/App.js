import React ,{Component} from 'react';
import Todo from "./Todo"
import AddTodo from "./AddTodo"

class App extends Component{
  state= {
      todos :[
      { id:"1" , content: "Buy milk"},
      { id:"2" , content: "Buy goat"},
      { id:"3" , content: "Buy house"}
    ]
  }
 
  deleteTodo = (id)=>{
    const todos= this.state.todos.filter(todo=>{
      return id !== todo.id
    })
    this.setState({
      todos : todos
    })
  }

  addTodo = (todo)=>{
    todo.id = Math.random() * 10
    const todos = [...this.state.todos,todo]
    this.setState({
      todos : todos
    })
  }

  render(){
    return(
      <div className="todo-app container">
        <h1 className="center blue-text">MY ToDo App</h1>
          <Todo todos={this.state.todos} deleteTodo={this.deleteTodo}/>
          <AddTodo addTodo = {this.addTodo}/>
      </div>
    )
  }
}

export default App;
