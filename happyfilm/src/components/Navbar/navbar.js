import React, { Component } from "react";

export default class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="#">
                                    Mua Vé <span className="sr-only">(current)</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    Phim
        </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    Lịch Chiếu
        </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    Ưu đãi
        </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    Tin Tức
        </a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}
