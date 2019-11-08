import React, { Component } from 'react';
import _BranchLogo from '../../SASS/Components/Branch/_BranchLogo.scss';
import { NavLink } from "react-router-dom";
import 'react-tabs/style/react-tabs.css';
class BranchLogo extends Component {
    render() {
        let { branch } = this.props;
        return (
            <div className="card bg-dark" style={{ width: '18rem' }}>
                <ul className="list-group list-group-flush lichChieuCinema ">
                    <NavLink to={`/lich-chieu/${branch.maHeThongRap}`} className="list-group-item lichChieuCinema">{branch.maHeThongRap}</NavLink>
                </ul>
            </div>
        );
    }
}

export default BranchLogo;