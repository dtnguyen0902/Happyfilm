import React, { Component } from "react";

import Login from "./login";
import Signin from "./signin"

export default class Logo extends Component {
    render() {
        return (
            <div className ="container-fluid px-0">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href="#">
                        <img
                            style={{ width: 60 }}
                            className="navbar-brand"
                            src="../img/logo.png"
                            alt
                        />
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="#">
                                    Trang chủ<span className="sr-only">(current)</span>
                                </a>
                            </li>
                            <li>
                                <input
                                    className="form-control mr-sm-2"
                                    type="search"
                                    placeholder="Tìm kiếm phim"
                                    aria-label="Search"
                                />
                            </li>
                        </ul>
                        <form className="form-inline my-2 my-lg-0">
                        <Login/>
                        <Signin/>
                        </form>
                    </div>
                </nav>

            </div>
        )
    }
}