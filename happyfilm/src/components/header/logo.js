import React, { Component } from 'react';

export default class Logo extends Component {
    render() {
        return (
            <div>
                <a className="navbar-brand" href="#">
                    <img
                        style={{ width: 60 }}
                        className="navbar-brand"
                        src="../img/logo_happyfilm_nobg.png"
                        alt
                    />
                </a>

            </div>

        )
    }
}
