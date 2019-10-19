import React, { Component } from 'react';
import Logo from "./logo";
import Signup from "./signup";
import Login from "./login";

export default class Header extends Component {
    render() {
        return (
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light bg-light d-flex justify-content-between">
                    <Logo />
                    <div className="row">
                        <Login />
                        <Signup />
                    </div>
                </nav>
            </div>
        )
    }
}