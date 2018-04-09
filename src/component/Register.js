import React, {Component} from 'react';

class Register extends Component {
    render() {
        return (
            <div className="Login_Page">
                <from className="from_login">
                    <input className="username" value="dfk"/>
                    <input className="password" value="ladks"/>
                    <button>Login</button>
                </from>
            </div>
        );
    }
}

export default Register;