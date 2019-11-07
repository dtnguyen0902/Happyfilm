import React, { Component } from 'react';
import _BranchLogo from '../../SASS/Components/Branch/_BranchLogo.scss';
import { NavLink } from "react-router-dom";
import 'react-tabs/style/react-tabs.css';
class BranchLogo extends Component {
    render() {
        let { branch } = this.props;
        return (
            <NavLink to={`/lich-chieu/${branch.maHeThongRap}`}>
                <div className="card bg-dark" style={{ width: '18rem' }}>
                    <ul className="list-group list-group-flush ">
                        <li className="list-group-item bg-dark">{branch.maHeThongRap}</li>
                    </ul>
                </div>
            </NavLink>
        );
    }
}

export default BranchLogo;