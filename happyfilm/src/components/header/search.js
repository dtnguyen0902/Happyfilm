import React, { Component } from 'react';

export default class Search extends Component {
    render() {
        return (
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

        )
    }
}


