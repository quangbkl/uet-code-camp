import React, {Component} from 'react';
import Header from "../Todos/Header";
import TodoList from "../Todos/TodoList";
import {createTodo, deleteTodo, fetchTodos, toggleTodo} from "../services/APIAjax";
import '../css/Todo.css';
import {Redirect} from "react-router-dom";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [],
            input_text: ""
        }
        this.onCreateTodo = this.onCreateTodo.bind(this)
        this.onChangeInput = this.onChangeInput.bind(this)
        this.onClickRemove = this.onClickRemove.bind(this)
        this.handleToggle = this.handleToggle.bind(this)
        this.selectTodos = this.selectTodos.bind(this)
    }
    selectTodos() {
        fetchTodos().then(object => {
            const {data, success} = object;
            if (success) {
                this.setState({
                    todos: data
                });
            }
        }).catch(error => {
            console.log(error);
        });
    }
    onCreateTodo() {
        const {input_text} = this.state;
        createTodo(input_text).then(object => {
            this.selectTodos();
        }).catch(error => {
            console.log(error);
        });
    }
    onChangeInput(text) {
        this.setState({
            input_text: text
        });
    }
    onClickRemove(id) {
        deleteTodo(id).then(object => {
            this.selectTodos();
        }).catch(error => {
            console.log(error);
        });
    }
    handleToggle(id) {
        toggleTodo(id).then(object => {
            this.selectTodos();
        }).catch(error => {
            console.log(error);
        });
    }

    componentDidMount() {
        this.selectTodos();
    }
    render() {
        const onClick = {
            onCreateTodo: this.onCreateTodo,
            onChangeInput: this.onChangeInput,
            onClickRemove: this.onClickRemove,
            handleToggle: this.handleToggle
        }
        const {auth} = this.props;
        if (!auth) {
            return (<Redirect to="/Login"/>);
        }
        return (
            <div className="app">
                <Header onClick={onClick} input_text={this.state.input_text}/>
                <TodoList onClick={onClick} todos={this.state.todos}/>
            </div>
        );
    }
}

export default Home;