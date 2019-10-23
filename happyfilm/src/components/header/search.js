import React, { Component } from 'react';
import _search from '../../SASS/Function/_search.scss';

export default class Search extends Component {
    render() {
        return (
            <div className="row">
                <input
                    className="mySearch form-control"
                    type="search"
                    placeholder="Tìm kiếm phim"
                    aria-label="Search"
                />
            </div>
        )
    }
}


