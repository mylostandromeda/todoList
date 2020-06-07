import React from 'react';
import './TodoItem.css';
import TodoButtons from '../TodoButtons/TodoButtons';
import TodoItemText from '../TodoItemText/TodoItemText';

class TodoItem extends React.Component {
    render(){
        return (
            <div className="todo__item">
                <TodoItemText value={this.props.itemText} disable={this.props.itemLock} itemId={this.props.itemId} itemUpdate={this.props.itemUpdate}/>
                <TodoButtons itemDisable={this.props.itemDisable} itemId={this.props.itemId} itemDelete={this.props.itemDelete}/>
            </div>
        );
    }
}

export default TodoItem;