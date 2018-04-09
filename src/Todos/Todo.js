import React, {Component} from 'react';
import '../css/Todo.css';

class Todo extends Component {
    render() {
        const {title, completed} = this.props.todos;
        return (
            <li className={completed ? "completed" : ""} onClick={this.handleToggle.bind(this)}>
                {title}
                <span className="close" onClick={this.onClickRemove.bind(this)}>X</span>
            </li>
        );
    }
    onClickRemove() {
        const {_id} = this.props.todos;
        this.props.onClick.onClickRemove(_id);
    }
    handleToggle(event) {
        const {_id} = this.props.todos;
        if (event.target.tagName === "LI") {
            this.props.onClick.handleToggle(_id);
        }
    }
}

export default Todo;