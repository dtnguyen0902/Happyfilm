import React, { Component } from 'react';
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
                        {setInterval(<h2 className='happyfilm'>{new Date().toLocaleTimeString()}</h2>,1000)}
                    </div>
                </div>
            </div>
        )
    }
}
