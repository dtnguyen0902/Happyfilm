import React, { Component } from 'react';
import _header from "../../SASS/Components/Header/_header.scss";
import { NavLink } from "react-router-dom";

export default class Logo extends Component {
    render() {
        return (
            <div>
                <div className='row align-items-center'>
                    <div>
                        <NavLink to='/' className="navbar-brand">
                            <img
                                className="headerImg navbar-brand" src="../img/logo_happyfilm_nobg.png"
                            />
                        </NavLink>
                    </div>
                    <div>
                        <h3 className='happyfilm'>Happy Film</h3>
                    </div>
                </div>
            </div>
        )
    }
}
