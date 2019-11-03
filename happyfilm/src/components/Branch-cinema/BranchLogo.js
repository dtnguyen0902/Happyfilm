import React, { Component } from 'react';
import _BranchLogo from '../../SASS/Components/Branch/_BranchLogo.scss';
import { NavLink } from "react-router-dom";
import 'react-tabs/style/react-tabs.css';
class BranchLogo extends Component {
    render() {
        let { branch } = this.props;
        return (
            <NavLink className='branchLogo' to={`/${branch.maHeThongRap}`}>
                <img src={branch.logo} alt="" className='myLogo'/>
            </NavLink>
        );
    }
}

export default BranchLogo;