import React, {Component} from 'react';
import {Route, Switch} from "react-router-dom";
import Home from "./component/Home";
import Register from "./component/Register";
import Login from "./component/LoginPage";
import NavBar from "./component/NavBar";

class App extends Component {
    state = {
        auth: false,
        token: ''
    };
    onChangeAuth(token) {
        console.log(token);
        this.setState({
            auth: true,
            token: token
        });
    }
    render() {
        const {auth} = this.state;
        return (
            <div id="app">
                <NavBar auth={auth}/>
                <Switch>
                    <Route exact path="/" component={() => <Home auth={auth}/>}/>
                    <Route
                        exact path="/Login"
                        component={() => <Login onAuth={this.onChangeAuth.bind(this)} auth={auth}/>}
                    />
                    <Route
                        exact path="/Register"
                        component={() => <Register onAuth={this.onChangeAuth.bind(this)} auth={auth}/>}
                    />
                </Switch>
            </div>
        );
    }
}

export default App;