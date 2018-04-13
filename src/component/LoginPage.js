import React, {Component} from 'react';
import {login} from "../services/APIAjax";
import {Redirect} from "react-router-dom";

class Login extends Component {
    state = {
        email: "",
        password: ""
    }
    render() {
        const {email, password} = this.state;
        const {auth} = this.props;
        if (!!auth) {
            return (<Redirect to="/"/>);
        }
        return (
            <div className="Login_Page">
                <form className="from_login">
                    <input onChange={this.onChangeInput.bind(this)} className="email" value={email}/>
                    <input onChange={this.onChangeInput.bind(this)} className="password" value={password}/>
                    <button onClick={this.onClickLogin.bind(this)}>Login</button>
                </form>
            </div>
        );
    }
    onChangeInput(e) {
        const {value, className} = e.target;
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
    onClickLogin(e) {
        e.preventDefault();
        const {email, password} = this.state;
        login({email, password}).then(response => {
            const {accessToken} = response.data;
            this.props.onAuth(accessToken);
        })
    }
}

export default Login;