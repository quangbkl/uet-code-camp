import React, {Component} from 'react';
import Home from "./Home";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            auth: true
        }
    }
    render() {
        return (
            <div className="Login_Page">
                <from className="from_login">
                    <input className="username" value="sd"/>
                    <input className="password" value="dfs"/>
                    <button>Login</button>
                </from>
            </div>
        );
    }
}

export default Login;