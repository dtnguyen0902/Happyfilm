import React, { Component } from 'react';

export default class Search extends Component {
    render() {
        return (
            <div>
                <span className="fa fa-search">
                <input
                    className="form-control fa fa-search"
                    type="search"
                    placeholder="Tìm kiếm phim"
                    aria-label="Search"
                /></span>
            </div>
        )
    }
}


