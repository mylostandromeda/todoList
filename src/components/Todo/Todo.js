import React from 'react';
import './Todo.css';
import Header from '../Header/Header';
import TodoInput from '../TodoInput/TodoInput';
import TodoBar from '../TodoBar/TodoBar';

class Todo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todoList: []
        };
    }

    handleValueChange(value) {
        let {todoList} = this.state;
        this.setState({
            todoList: [...todoList, {text: value, id: Date.now(), disabled: true, completed: false}]
        });
    };

    itemDelete(item){
        const data = this.state.todoList.filter(i => i.id !== item);
        this.setState({
            todoList: [...data]
        });
    };

    itemUpdate(item, value){
        let {todoList} = this.state;
        todoList.forEach(el => {
            if(el.id === item){
                el.text = value;
                el.disabled = !el.disabled;
            }
        });

        this.setState({
            todoList: [...todoList]
        });
    }

    itemDisable(item){
        let {todoList} = this.state;
        todoList.forEach(el => {
            if(el.id === item){
                el.disabled = !el.disabled
            }
        });

        this.setState({
            todoList: [...todoList]
        });
    }

    render() {
        return(
            <div className="todo">
                <Header/>
                <TodoInput onValueChange={this.handleValueChange.bind(this)}/>
                {this.state.todoList.length !== 0 
                    ? <TodoBar
                        itemDisable={this.itemDisable.bind(this)}
                        todoList={this.state.todoList}
                        itemDelete={this.itemDelete.bind(this)}
                        itemUpdate={this.itemUpdate.bind(this)}/>
                    : <h2>No Todos...</h2>
                }
            </div>
        );
    }
}

export default Todo; 