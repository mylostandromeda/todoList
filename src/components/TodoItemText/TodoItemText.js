import React from 'react';
import './TodoItemText.css';

class TodoItemText extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: this.props.value
        };
    }

    handleSubmit(event){
        if(event.key === 'Enter') {
            this.props.itemUpdate(this.props.itemId, event.target.value);
            this.setState({
                value: event.target.value
            });
        }
    }

    render(){
        return(
            <textarea className="todo__text"  defaultValue={this.props.value} disabled={this.props.disable} onKeyPress={this.handleSubmit.bind(this)}/>
        );
    }
}

export default TodoItemText;