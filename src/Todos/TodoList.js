import React, {Component} from 'react';
import Todo from "./Todo";

class TodoList extends Component {
    render() {
        const todos = this.props.todos;

        return (
            <div className="Todo_List">
                <ul className="List">
                    {
                        todos.map((data, index) => {
                            return (
                                <Todo
                                    onClick={this.props.onClick}
                                    todos={data}
                                    id={index}
                                    key={index}
                                />
                            );
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default TodoList;
