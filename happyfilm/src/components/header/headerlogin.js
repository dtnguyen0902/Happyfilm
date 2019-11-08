import React, { Component } from 'react';
import Logo from "./logo";

import LoginSuccess from './LoginSuccess';
import _header from "../../SASS/Components/Header/_header.scss"

export default class Header extends Component {
    render() {
        return (
            <div className="myHeader__bg container">
                <nav className="myHeader navbar navbar-expand-lg  d-flex justify-content-between">
                    <Logo />
                    <div className="row">
                        <LoginSuccess />
                    </div>
                </nav>
            </div>
        )
    }
}