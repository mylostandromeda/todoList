import React from 'react';
import './TodoInput.css';

class TodoInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        }
    }

    handleChange(event){
        this.setState({
            value: event.target.value
        });
    }

    handleSubmit(event){
        if(event.key === 'Enter' && event.target.value) {
            this.props.onValueChange(event.target.value);
            this.setState({
                value: ''
            });
        }
    }

    render(){
        return(
            <input
                type="text"
                value={this.state.value}
                placeholder="Write your todo"
                className="todo__input"
                onChange={this.handleChange.bind(this)}
                onKeyPress={this.handleSubmit.bind(this)}
            />
        );
    }
}

export default TodoInput;