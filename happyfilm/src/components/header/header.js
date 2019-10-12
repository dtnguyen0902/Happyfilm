import React, { Component } from 'react';
import Logo from "./logo";
import Search from "./search";
import Signup from "./signup";
import Login from "./login";

export default class Header extends Component {
    render() {
        return(
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <Logo/>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <Search/>
                    <form class="form-inline my-2 my-lg-0">
                        <Login/>
                        <Signup/>
                    </form>
                    </div>
                </nav>
            </div>
        )
    }
}