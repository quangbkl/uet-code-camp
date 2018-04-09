import React, {Component} from "react";
import "../css/NavBar.css";
import {Link} from "react-router-dom";

class NavBar extends Component {
    render() {
        return (
            <ul className="NavBar">
                <li><Link className="active" to="/">Home</Link></li>
                <li><Link to="/Login">Login</Link></li>
                <li><Link to="/Register">Register</Link></li>
            </ul>
        );
    }
}

export default NavBar;