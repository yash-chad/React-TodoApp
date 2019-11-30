import React ,{Component} from 'react';

class AddTodo extends Component{
    state = {
        content : ""
    }
    handleChange = (e)=>{
        this.setState({
            content : e.target.value
        })
    }
    handleSubmit=(e)=>{
        e.preventDefault()
        this.props.addTodo(this.state)
        this.setState({
            content : ""
        })
        document.getElementById("toClear").value=""

    }
    
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <input type="text" onChange={this.handleChange} placeholder="Add your todo here!" id="toClear"/ >
            </form>
        )
    }
}

export default AddTodo