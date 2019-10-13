import React, { Component } from 'react';

export default class Search extends Component {
    render() {
        return (
            <div className="row">
                <input
                    className="form-control"
                    type="search"
                    placeholder="Tìm kiếm phim"
                    aria-label="Search"
                />
            </div>
        )
    }
}


