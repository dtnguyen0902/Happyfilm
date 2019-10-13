import React, { Component } from "react";
import Search from "../header/search";

export default class Navbar extends Component {
    render() {
        return (
            <div className="bg-dark">
                <div className="container">
                    <nav className="navbar navbar-expand-lg ">
                        <ul className="container navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    MUA VÉ
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    PHIM
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    LỊCH CHIẾU
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    RẠP/GIÁ VÉ
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    ƯU ĐÃI
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    GÓC ĐIỆN ẢNH
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">                                  
                                    <Search />
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        )
    }
}
