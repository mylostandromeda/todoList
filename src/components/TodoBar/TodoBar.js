import React from 'react';
import './TodoBar.css';
import TodoItem from '../TodoItem/TodoItem';

class TodoBar extends React.Component {
    render(){
        const todoList = this.props.todoList;

        return (
            <div className="todo__bar">
                {
                    todoList.map( item => (
                        <TodoItem
                            key={item.id}
                            itemLock={item.disabled}
                            itemId={item.id}
                            itemText={item.text}
                            itemDisable={this.props.itemDisable}
                            itemDelete={this.props.itemDelete}
                            itemUpdate={this.props.itemUpdate}
                        />
                    ))
                }
            </div>
        );
    }
}

export default TodoBar;