import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
class MoreInfoFilm extends Component {
    render() {
        return (
            <div className="d-flex justify-content-end">
                <NavLink to='toan-bo-phim' type="button" class="btn btn-info">Xem Thêm</NavLink>
            </div>
        );
    }
}

export default MoreInfoFilm;