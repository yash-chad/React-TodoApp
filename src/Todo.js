import React  from 'react';


const Todos = (props)=>{
    const {todos ,deleteTodo} = props
  
    const todoList = (todos.length) ? (

         todos.map(todo =>{
            return(
               <div className="collection-item" key={todo.id}>
                   <span>{todo.content}</span>
                   <button  onClick={()=>{deleteTodo(todo.id)} }>Delete</button>
               </div>                  
            )
         })
        ):(      
            <div  className="collection-item">You have no todos left!!</div>  
        )
          
      
    return (<div className="todos collection">{todoList}</div>)
}


export default Todos