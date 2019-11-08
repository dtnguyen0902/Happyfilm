import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import _phimitems from '../../SASS/Components/Listphim/_phimitems.scss';


class PhimItemSearch extends Component {
    render() {
        let { movie } = this.props;

        return (
            <div className="card bg-dark" style={{ width: '18rem' }}>
                <ul className="list-group list-group-flush ">
                    <li className="list-group-item bg-dark">{movie.tenPhim}</li>
                </ul>
            </div>
        );
    }
}

export default PhimItemSearch;
