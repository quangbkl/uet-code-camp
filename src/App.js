import React, {Component} from 'react';
import {Route, Switch} from "react-router-dom";
import Home from "./component/Home";
import Register from "./component/Register";
import Login from "./component/LoginPage";
import NavBar from "./component/NavBar";

class App extends Component {
    render() {
        return (
            <div id="app">
                <NavBar/>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/Login" component={Login}/>
                    <Route exact path="/Register" component={Register}/>
                </Switch>
            </div>
        );
    }
}

export default App;