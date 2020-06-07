import React from 'react';
import './TodoButton.css';

class TodoButton extends React.Component {
    constructor(props){
        super(props);

        this.btnTypeClass = this.props.type ? "todo__btn_" + this.props.type : '';
    }

    handleClick(){
        if(this.props.type === 'delete'){
            this.props.itemDelete(this.props.itemId);
        } else {
            this.props.itemDisable(this.props.itemId);
        }
    }
    render(){
        return(
            <button onClick={this.handleClick.bind(this)} className={`todo__btn ${this.btnTypeClass}`}>{this.props.title}</button>
        );
    }
}

export default TodoButton;