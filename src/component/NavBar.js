import React, {Component} from "react";
import "../css/NavBar.css";
import {Link} from "react-router-dom";

class NavBar extends Component {
    render() {
        const {auth} = this.props;
        const ListLogin = (auth ? <li><a>Logout</a></li> : <li><Link to="/Login">Login</Link></li>);
        return (
            <ul className="NavBar">
                <li><Link className="active" to="/">Home</Link></li>
                {ListLogin}
                <li><Link to="/Register">Register</Link></li>
            </ul>
        );
    }
}

export default NavBar;