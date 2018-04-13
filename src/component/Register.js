import React, {Component} from 'react';
import {register} from "../services/APIAjax";
import {Redirect} from "react-router-dom";

class Register extends Component {
    state = {
        username: "",
        email: "",
        password: ""
    }
    render() {
        const {username, email, password} = this.state;
        return (
            <div className="Login_Page">
                <form className="from_login">
                    <input className="username" onChange={this.onChangeInput.bind(this)} placeholder="Enter username..." value={username}/>
                    <input className="email" onChange={this.onChangeInput.bind(this)} placeholder="Enter email..." value={email}/>
                    <input className="password" onChange={this.onChangeInput.bind(this)} placeholder="Enter password..." value={password}/>
                    <button onClick={this.onRegister.bind(this)}>Login</button>
                </form>
            </div>
        );
    }
    onChangeInput(e) {
        const {className, value} = e.target;
        if (className === 'username') {
            this.setState({
                username: value
            });
        }
        if (className === 'email') {
            this.setState({
                email: value
            });
        }
        if (className === 'password') {
            this.setState({
                password: value
            });
        }
    }
    onRegister(e) {
        e.preventDefault();
        const {username, email, password} = this.state;
        register({email, password, username}).then(response => {
            //
        })
    }
}

export default Register;