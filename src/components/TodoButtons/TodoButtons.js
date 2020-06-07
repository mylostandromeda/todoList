import React from 'react';
import TodoButton from '../TodoButton/TodoButton';

class TodoButtons extends React.Component {
    render(){
        return(
            <div className="todo__buttons">
                <TodoButton type="edit" title="Update" itemDisable={this.props.itemDisable} itemUpdate={this.props.itemUpdate} itemId={this.props.itemId}/>
                <TodoButton type="delete" title="Delete" itemDelete={this.props.itemDelete} itemId={this.props.itemId}/>
            </div>
        );
    }
}

export default TodoButtons;