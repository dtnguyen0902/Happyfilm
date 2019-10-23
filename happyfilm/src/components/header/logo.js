import React, { Component } from 'react';
import _header from "../../SASS/Components/Header/_header.scss";

export default class Logo extends Component {
    render() {
        return (
            <div className='row align-items-center'>
                <div>
                    <a className="navbar-brand" href="#">
                        <img
                            className="headerImg navbar-brand" src="../img/logo_happyfilm_nobg.png"
                        />
                    </a>
                </div>
                <div>
                    <h3 className='happyfilm'>Happy Film</h3>
                </div>

            </div>

        )
    }
}
