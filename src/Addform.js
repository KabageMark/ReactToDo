import React from 'react';
import { Component } from 'react';

class AddTodo extends Component {
    state = {

        content:''
    }
    //Handling textinput change
    handleChange =(e) =>{
        this.setState({
            content : e.target.value
        })    
    }
    // Handling form submition
    handleSubmit = (e) =>{
        e.preventDefault();
        this.props.addToDo(this.state)
        this.setState({
            content:''
        })
    }
    render(){
        return(
            <div>
                <form  onSubmit={this.handleSubmit}>
                   <label>
                    Add Something to do:
                    <input type="text" name="name" onChange={this.handleChange} value={this.state.content} />
                    </label>
                    <button class="btn-floating btn-large waves-effect waves-light light-blue ">
                    <i class="material-icons right">add</i>
                    </button>
                    

                </form>
            </div>
        )
    }
}

export default AddTodo
